import { createInterFont } from '@tamagui/font-inter';

const poppinsFont = createInterFont({
  family: 'PoppinsRegular',
  size: {
    1: 16,
  },
  lineHeight: {
    1: 22,
  },
  weight: {
    1: '300',
  },
  letterSpacing: {
    1: 0,
  },
  face: {
    600: { normal: 'PoppinsRegular' },
  },
});

export default poppinsFont;
