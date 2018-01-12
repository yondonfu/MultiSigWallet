module.exports = {
  networks: {
    livenet: {
      host: "localhost",
      port: 8546,
      network_id: "1"
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
