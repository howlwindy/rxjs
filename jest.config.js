module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  collectCoverageFrom: [],
  moduleFileExtensions: ['vue', 'js', 'ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // 配置 jest 下 @ -> src
  }
}
