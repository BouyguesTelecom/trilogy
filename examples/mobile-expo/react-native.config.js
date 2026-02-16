module.exports = {
  dependencies: {
    '@react-native-community/datetimepicker': {
      platforms: {
        android: {
          sourceDir: '../node_modules/@react-native-community/datetimepicker/android',
          packageImportPath: 'import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;',
          packageInstance: 'new RNDateTimePickerPackage()',
        },
      },
    },
  },
};
