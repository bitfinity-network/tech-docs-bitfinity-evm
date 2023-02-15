---
title: "Networks Endpoints"
---

# Networks

Ethereum Virtual Machine (EVM) support is currently available on the
following networks:

<div class="networks-table"></div>

| Network             | Engine ID                  | Chain ID                | Endpoint URL                 |
|---------------------|----------------------------|-------------------------|------------------------------|
| [Mainnet](#mainnet) | [`evmc`][aurora@Mainnet] | 1313161554 (0x4e454152) | <https://mainnet.evmc.dev> |
| [Testnet](#testnet) | [`evmc`][aurora@Testnet] | 1313161555 (0x4e454153) | <https://testnet.evmc.dev> |
| Localnet            | `evmc.test.ic`         | 1313161556 (0x4e454154) | <http://localhost:8545>      |

Find the status page and public incident log at
[api.evmc.dev](https://api.evmc.dev).
You can also subscribe to incident notifications there.

:::note
EVMC runs on top of Internet Computer, meaning that the underlying Internet Computer gas is the real measure of
computational work. However, for compatibility with Ethereum we want our users to be able to pay for
transactions with ether (ETH). To enable this, the EVMC infrastructure includes relayers which
encapsulate ordinary EVM transactions into Internet Computer transactions, submit them on-chain, and return the
transaction result.

Transaction cost ~$0.02 (this value is not calculated automatically, just based on our
observations).
:::

## Endpoints

### Mainnet

#### HTTPS

The Mainnet Web3 endpoint is at: `https://mainnet.evmc.dev` (port 443)

#### WSS

The Mainnet Websocket endpoint is at: `wss://mainnet.evmc.dev`

### Testnet

The Testnet Web3 endpoint is at: `https://testnet.evmc.dev` (port 443)

#### WSS

The Testnet Websocket endpoint is at: `wss://testnet.evmc.dev`

[aurora@Mainnet]: https://explorer.near.org/accounts/aurora

[aurora@Testnet]: https://explorer.testnet.near.org/accounts/aurora
