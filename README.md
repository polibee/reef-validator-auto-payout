# Reef Chain validator auto payout

Claim and distribute validator staking rewards for your stakers automagically in Reef Finance Substrate blockchain.

Made with ❤️ from ColmenaLabs_SVQ! Adapted to Reef Finance by Jimi Flowers

## Install

Needs nodejs (>= v10.20.1), check https://nodejs.org/en/download/ to install for your platform.

Clone the repository and install the needed dependencies:

```
git clone https://github.com/jimiflowers/reef-validator-auto-payout.git
cd reef-validator-auto-payout
yarn
```

Go to [Polkadot JS UI](https://polkadot.js.org/apps/#/accounts) and export the account you want to use to json format, then copy the json file/s in the `keystores` folder.

## Usage

Using parameters:

```
node autopayout.js -a keystores/account.json -p password -v validator_stash_address
```

Ask for password:

```
node autopayout.js -a keystores/account.json -v validator_stash_address
```

Or simply edit `config.js` with your data and run without any parameter (cron friendly):

```
node autopayout.js
```
Example output:

```
 Substrate auto payout

 - Check source at https://github.com/jimiflowers/reef-validator-auto-payout
 - Made with love from ColmenaLabs_SVQ https://colmenalabs.org/ and adapted to Reef Finance by Jimi Flowers

 -> Validator stash address is GTzRQPzkcuynHgkEHhsPBFpKdh4sAacVRsnd8vYfPpTMeEY
 -> Importing account FndLuNiewT7uDSB1Ucr3TQHm5vDvZsHfYV3eHivyB8FBAwF
 -> Connecting to wss://kusama-rpc.polkadot.io
 -> Account FndLuNiewT7uDSB1Ucr3TQHm5vDvZsHfYV3eHivyB8FBAwF free balance is 0.558 KSM
 -> Current era is 1730
 -> Unclaimed eras: [1720,1729]
 -> Paying Era: 1720
         Payout Success!
 -> Paying Era: 1729
         Payout Success!

```


NOTE: Set `config.js` file permissions to `600` for better security.

TODO: It doesn't take in account ongoing elections yet!

## Using multiple validators

Use `validators` array in `config_multiple.js` to add the stash address and name of your validators, then:

```
node autopayout-validators.js
```
