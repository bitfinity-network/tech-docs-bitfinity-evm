---
title: Minting Tokens
sidebar_position: 5
---

# Minting Tokens

## Introduction

Minting is the process of creating new tokens. In the context of the Bitfinity, minting is the process of creating new tokens on the Bitfinity Testnet. The Bitfinity Testnet supports minting tokens for the Native Asset.

## Minting

We have two endpoints for minting tokens. We support both IC and Ethereum users. For the JSON-RPC endpoint, we use the `ic_mintEVMToken` method, while for the IC endpoint, we use the `mint_evm_tokens` method.

## Examples

- Minting 1000 tokens for the Ethereum address `0x1234567890123456789012345678901234567890`:

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
curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc": "2.0", "id": 1, "method": "ic_mintEVMToken", "params": {"address": "0x1234567890123456789012345678901234567890", "amount": "0x3e8"}}' http://testnet.bitfinity.network
```

- Minting 1000 tokens using the IC endpoint `0x123456789`:

```bash
dfx canister call --network=ic BITFINITY_CANISTER_URL mint_evm_tokens '(opt \"0xfB0D14c07DA958bBB257346F49b2E9C9382c4888\", 5_000_000_000)'
```

## Final Notes

After minting tokens, if the request was successful, you can check your balance using the `eth_getBalance` method, or you can check the balance from your wallet.
