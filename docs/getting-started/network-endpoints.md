---
title: "Networks Endpoints"
---

# Networks

Ethereum Virtual Machine (EVM) support is currently available on the
following networks:

<div class="networks-table"></div>

| Network             | Engine ID                  | Chain ID                | Endpoint URL                 |
|---------------------|----------------------------|-------------------------|------------------------------|
| [Mainnet](#mainnet) | [`Bitfinity`][bitfinity@Mainnet] | 355110 (0x4e454152) | <https://mainnet.bitfinity.network> |
| [Testnet](#testnet) | [`Bitfinity`][bitfinity@Testnet] | 355113 (0x4e454153) | <https://testnet.bitfinity.network> |
| Localnet            | `Bitfinity.test.ic`         | 355113 (0x4e454154) | <http://localhost:8545>      |

Find the status page and public incident log at
[api.Bitfinity.dev](https://api.Bitfinity.dev).
You can also subscribe to incident notifications there.

:::note
Bitfinity runs on top of Internet Computer, meaning that the underlying Internet Computer gas is the real measure of
computational work. 

:::

## Endpoints

### Mainnet

#### HTTPS

The Mainnet Web3 endpoint is at: `https://mainnet.bitfinity.network` (port 443)

#### WSS

The Mainnet Websocket endpoint is at: `wss://mainnet.bitfinity.network`

### Testnet

The Testnet Web3 endpoint is at: `https://testnet.bitfinity.network` (port 443)

#### WSS

The Testnet Websocket endpoint is at: `wss://testnet.bitfinity.network`

[bitfinity@Mainnet]: https://bitfinity.network/

[bitfinity@Testnet]: https://bitfinity.network/
