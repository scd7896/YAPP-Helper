module.exports = {
  apps: [
    {
      name: "app",
      script: "ts-node ./index.ts",
      error_file: "./err.log",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
