import { create } from 'zustand';

type State = {
  salmon: number;
  tuna: number;
};

type Actions = {
  addSalmon: (qty: number) => void;
  addTuna: (qty: number) => void;
  reset: () => void;
};

const initialState: State = {
  salmon: 0,
  tuna: 0,
};

export const useStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  addSalmon: (qty: number) => {
    set({ salmon: get().salmon + qty });
  },
  addTuna: (qty: number) => {
    set({ tuna: get().tuna + qty });
  },
  reset: () => {
    set(initialState);
  },
}));
