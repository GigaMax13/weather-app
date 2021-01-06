module.exports = {
  preset: 'jest-expo-enzyme',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  setupFilesAfterEnv: [
    './src/setupTests.js'
  ],
  setupFiles: [
    'dotenv/config'
  ]
};
