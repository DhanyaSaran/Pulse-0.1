module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/fileMock.js",
    '\\.(css|scss|less|sass)$': 'identity-obj-proxy'
  },
  "verbose": true,
  "moduleFileExtensions": [
      "js",
      "jsx",
      "scss"
  ],
  "moduleDirectories": [
      "node_modules"
  ],
  transform: {
    '^.+\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./src/setupTests.js']
};