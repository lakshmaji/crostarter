declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CI_TEST_API_KEY: string;
      PLAYWRIGHT_TEST_BASE_URL?: string;
    }
  }
}
export {};
