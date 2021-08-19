# Create Multisig ERC20 token

## Pre-requisites

Install all the below dependencies:
- Node.js
- Truffle framework
- Ganache CLI (for local testing)
- Openzeppelin contracts@v0.3.2

## Configuration

parameter.json:
- "Name": Token name
- "SYMBOL": Ticker
- "ACCOUNT": Multisig contract address
- "CAP" : Maximum total supply
- "DECIMALS" : toekn decimals

## Setup the verification for the code before deployed

1. Install the truffle-plugin-verify
    > npm install -D truffle-plugin-verify

2. Add the plugin to truffle-config.js file
    module.exports = {
        plugins:['truffle-plugin-verify']
    }