const appUtils = {
  sleep: async (ms: number) => {
    await new Promise((r) => setTimeout(r, ms));
  },
};

export default appUtils;
