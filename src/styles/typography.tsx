import {colors} from './colors';
import {isIOS} from '../util/platform';

const displayBase = {
  // fontFamily: 'ValueSerif-Bold',
  ...(isIOS && {fontWeight: '700'}),
  fontStyle: 'normal',
  color: colors.white,
};

// Text font options
const textBase = {
  // fontFamily: 'ValueSans-Regular',
  fontWeight: '400',
  fontStyle: 'normal',
  color: colors.white,
};

export const typography = {
  // Display typography
  display32: {
    ...displayBase,
    fontSize: 32,
    lineHeight: 48,
  },

  display24: {
    ...displayBase,
    fontSize: 24,
    lineHeight: 36,
  },

  display20: {
    ...displayBase,
    fontSize: 20,
    lineHeight: 30,
  },

  display16: {
    ...displayBase,
    fontSize: 16,
    lineHeight: 24,
  },

  display18: {
    ...displayBase,
    fontSize: 18,
    lineHeight: 27,
  },

  display14: {
    ...displayBase,
    fontSize: 14,
    lineHeight: 19.6,
  },

  text24: {
    ...textBase,
    fontSize: 24,
    lineHeight: 36,
  },

  // Text typography
  text20: {
    ...textBase,
    fontSize: 20,
    lineHeight: 30,
  },

  text18: {
    ...textBase,
    fontSize: 18,
    lineHeight: 25.2,
  },

  text16: {
    ...textBase,
    fontSize: 16,
    lineHeight: 22.4,
  },

  text15: {
    ...textBase,
    fontSize: 15.05,
    lineHeight: 21.07,
  },

  text14: {
    ...textBase,
    fontSize: 14,
    lineHeight: 19.6,
  },

  text13: {
    ...textBase,
    fontSize: 13,
    lineHeight: 17.73,
  },

  text12: {
    ...textBase,
    fontSize: 12,
    lineHeight: 16.8,
  },

  text10: {
    ...textBase,
    fontSize: 10,
    lineHeight: 14,
  },

  text8: {
    ...textBase,
    fontSize: 8,
    lineHeight: 13.64,
  },
};
