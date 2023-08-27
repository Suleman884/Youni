import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isIOS} from '../util/platform';
import {styleConstants} from './styleConstants';

export const baseContainer = {
  flex: 1,
  paddingRight: styleConstants.PADDING_RIGHT,
  paddingLeft: styleConstants.PADDING_LEFT,
  paddingTop: isIOS ? hp(5.7) : hp(2.3),
};

export const defaultContainer = {
  marginTop: hp(2.7),
};

export const indicatorStyle = {
  zIndex: 1,
  position: 'absolute',
  elevation: 5,
  alignSelf: 'center',
  height: hp(100),
  width: wp(100),
};
