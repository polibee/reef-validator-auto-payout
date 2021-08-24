module.exports = {
  nodeWS: 'wss://rpc-testnet.reefscan.com/ws',
  denom: 'REEF',
  decimalPlaces: 18,
  validators: [
	['VALIDATOR1_STASH_ACCOUNT_ADDRESS', 'VALIDATOR1_NAME'],
	['VALIDATOR2_STASH_ACCOUNT_ADDRESS', 'VALIDATOR2_NAME'],
	['VALIDATOR3_STASH_ACCOUNT_ADDRESS', 'VALIDATOR3_NAME']
  ],
  password: 'YOUR_KEYSTORE_ACCOUNT_PASSWORD',
  accountJSON: './keystores/ACCOUNT_FILE.json', //JSON ACCOUNT FILE EXPORTED FROM PolkadotJS Extension
  log: true,
}
