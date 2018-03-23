// Edit this config file before running `npm run migrate` to configure the parameters for 
// a newly deployed multisig wallet

module.exports = {
    // Addresses of multisig wallet owners
    owners: [],
    // Required number of confirmations to execute a multisig wallet transaction
    // Should be <= the number of multisig wallet owners
    requiredConfirmations: 0,
    // Set this flag to true if the multisig wallet should have a daily limit on how much
    // ETH an individual owner can withdraw from the wallet without a confirmed multisig transaction
    // Set this flag to false if the multisig wallet should NOT have a daily limit meaning 
    // no individual owner can withdraw ETH without a confirmed multisig transaction
    hasDailyLimit: false,
    // The daily limit on how much ETH an individual owner can withdraw without a confirmed multisig transaction
    // This value is only used if `hasDailyLimit = true`
    dailyLimit: 0
}