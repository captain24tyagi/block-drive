require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      hardhat: {
        chainId: 1337,
      },
    },
  },

  paths: {
    artifacts: "./my-app/src/artifacts",
  },
};
