---
title: Testnet Tokens
sidebar_position: 2
---

# Minting Testnet Tokens

## Introduction

The [Bitfinity Testnet](https://bitfinity.network) supports minting testnet tokens which users can pay for gas fees when deploying their dapps.

We support minting testnet tokens in a number of ways. 

* [Discord](https://discord.com/invite/AQwKukrdjf) 
* [Web Interface](https://bitfinity.network/faucet) 
* [JSON RPC](#minting-through-json-rpc)
* [Internet Computer Interface](#minting-through-the-ic)

## Minting on Discord

We have two endpoints for minting tokens. We support both IC and Ethereum users. For the JSON-RPC endpoint, we use the `ic_mint_native_token` method, while for the IC endpoint, we use the `mint_native_tokens` method.

## Minting through the Web Faucet 

Navigate to the [faucet interface](https://bitfinity.network/faucet), then click on the mint tokens button. Thsi will conenct to your metamask, and after waiting a few seconds you will  receive testnet tokens. 

![Mint Tokens](/img/mint-tokens.png)


## Minting through the EVM JSON RPC API

For the JSON-RPC endpoint, we use the `ic_mint_native_token` endpoint. As an example, see the code samples below:


- Minting native testnet tokens for the Ethereum address `0xfB0D14c07DA958bBB257346F49b2E9C9382c4888`:

An example curl command to mint tokens.

```bash
curl https://testnet.bitfinity.network \
-X POST -H 'content-Type: application/json' \
-d '{"jsonrpc":"2.0","id":"67","method":"ic_mintNativeToken","params":["0xfB0D14c07DA958bBB257346F49b2E9C9382c4888", "0xde0b6b3a76400000000000000"]}'
```

An example JSON blob to mint tokens. 

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "ic_mintNativeToken",
  "params": {
    "address": "0xfB0D14c07DA958bBB257346F49b2E9C9382c4888",
    "amount": "0x3e8"
  }
}
```

After minting tokens, if the request was successful, you can check your balance using the `eth_getBalance` method, or you can check the balance from your wallet. For example, see how to do this with curl:

```bash
curl https://testnet.bitfinity.network \
-X POST -H 'content-Type: application/json' \
-d '{"jsonrpc":"2.0","id":"67","method":"eth_getBalance","params":["0xfB0D14c07DA958bBB257346F49b2E9C9382c4888", "latest"]}'
```




## Minting through the IC 


- It is also possible to directly mint testnet native token using the Internet Computer. Here is an example with DFX, minting tokens for the address. `0xfB0D14c07DA958bBB257346F49b2E9C9382c4888`

Note that the endpoint name is `mint_native_tokens`

```bash
dfx canister call --network=ic BITFINITY_CANISTER_URL mint_native_tokens '(opt \"0x1234567890123456789012345678901234567890\", 10000000000000000000)'
```

