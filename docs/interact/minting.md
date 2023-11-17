---
title: Testnet Tokens
sidebar_position: 2
---

# Minting Testnet Tokens

## Introduction

The [Bitfinity Testnet](https://bitfinity.network) supports minting testnet tokens which users can pay for gas fees when deploying their dapps.

We support minting testnet tokens in a number of ways. 

* Discord 
* Web Interface 
* JSON RPC 
* Internet Computer Interface

## Minting on Discord

We have two endpoints for minting tokens. We support both IC and Ethereum users. For the JSON-RPC endpoint, we use the `ic_mint_native_token` method, while for the IC endpoint, we use the `mint_native_tokens` method.

## Minting through the Website 



## Minting through JSON RPC

We have two endpoints for minting tokens. We support both IC and Ethereum users. For the JSON-RPC endpoint, we use the `ic_mint_native_token` method, while for the IC endpoint, we use the `mint_native_tokens` method.

## Examples

- Minting 1 ETH tokens for the Ethereum address `0x1234567890123456789012345678901234567890`:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "ic_mintEVMToken",
  "params": {
    "address": "0x1234567890123456789012345678901234567890",
    "amount": "0x3e8"
  }
}
```

```bash
curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc": "2.0", "id": 1, "method": "ic_mintEVMToken", "params": ["0x1234567890123456789012345678901234567890", "0xde0b6b3a7640000"]}' http://testnet.bitfinity.network
```

- Minting 1 ETH using the IC endpoint `0x1234567890123456789012345678901234567890`:

```bash
dfx canister call --network=ic BITFINITY_CANISTER_URL mint_evm_tokens '(opt \"0x1234567890123456789012345678901234567890\", 10000000000000000000)'
```

## Minting through the IC 


## Final Notes

After minting tokens, if the request was successful, you can check your balance using the `eth_getBalance` method, or you can check the balance from your wallet.
