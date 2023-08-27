import React from 'react';
import {ActivityIndicator, View, Modal} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';

export const LoadingIndicator = ({isLoading}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isLoading}
      supportedOrientations={['portrait', 'landscape']}>
      <View style={styles.container}>
        <View style={styles.loaderBox}>
          <ActivityIndicator size="large" color={colors.youniPink} />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  loaderBox: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: hp(3),
    borderRadius: hp(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
};
