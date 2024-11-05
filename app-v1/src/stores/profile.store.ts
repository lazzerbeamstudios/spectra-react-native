import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { usersApi } from '~/src/api';
import { Profile } from '~/src/openapi/api';
import { AuthStore } from '~/src/stores/auth.store';

type State = {
  profile: Profile | null;
};

type Actions = {
  profileSet: (profile: Profile) => void;
  profileClear: () => void;
  profileInit: () => Promise<void>;
  profileUpdate: (profile: Profile) => Promise<void>;
  logout: () => void;
};

const initState: State = {
  profile: null,
};

export const ProfileStore = create<State & Actions>()((set, get) => ({
  ...initState,
  profileSet: (profile: Profile) => {
    set({ profile: profile });
  },
  profileClear: () => {
    set(initState);
  },
  profileInit: async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      AuthStore.getState().authSet(token);
      token = AuthStore.getState().authToken;
      const response = await usersApi.profileGet(token);
      get().profileSet(response.data.object);
    } else {
      AuthStore.getState().authClear();
      get().profileClear();
    }
  },
  profileUpdate: async (profile: Profile) => {
    const token = AuthStore.getState().authToken;
    const response = await usersApi.profileUpdate({ object: profile }, token);
    get().profileSet(response.data.object);
  },
  logout: async () => {
    get().profileClear();
  }
}));
