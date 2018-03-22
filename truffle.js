const KeystoreProvider = require("truffle-keystore-provider")
const Web3 = require("web3")

const memoizeProviderCreator = () => {
    let keystoreProviders = {}

    return (account, dataDir, providerUrl, readOnly) => {
        if (readOnly) {
            return new Web3.providers.HttpProvider(providerUrl)
        } else {
            if (providerUrl in keystoreProviders) {
                return keystoreProviders[providerUrl]
            } else {
                const provider = new KeystoreProvider(account, dataDir, providerUrl)
                keystoreProviders[providerUrl] = provider
                return provider
            }
        }
    }
}

const createProvider = memoizeProviderCreator()

module.exports = {
  networks: {
    livenet: {
      host: "localhost",
      port: 8546,
      network_id: "1"
    },
    rinkeby: {
      provider: () => {
        return createProvider(process.env.RINKEBY_ACCOUNT, process.env.DATA_DIR, "https://rinkeby.infura.io", process.env.READ_ONLY)
      },
      network_id: 4,
      gas: 6600000
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
