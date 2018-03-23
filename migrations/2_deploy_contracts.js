const config = require("./migrations.config.js")

const MultisigWalletWithDailyLimit = artifacts.require('MultiSigWalletWithDailyLimit.sol')
const MultisigWalletWithoutDailyLimit = artifacts.require('MultiSigWallet.sol')

module.exports = deployer => {
  if (config.hasDailyLimit) {
    deployer.deploy(MultisigWalletWithDailyLimit, config.owners, config.requiredConfirmations, config.dailyLimit)
  } else {
    deployer.deploy(MultisigWalletWithoutDailyLimit, config.owners, config.requiredConfirmations)
  }
}