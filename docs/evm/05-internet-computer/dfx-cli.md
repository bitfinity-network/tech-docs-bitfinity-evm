---
title: "DFX CLI"
---

## DFX CLI

The DFX CLI (Command Line Interface) is a versatile tool allowing direct interaction with the Internet Computer. It facilitates various operations such as deploying, installing, and calling canisters (containerized smart contracts). Moreover, it's instrumental in interfacing with the EVM on Bitfinity.

We have maintained a high level of compatibility with the Ethereum JSON-RPC API. This means that you can use the same endpoints and methods that you would use on Ethereum to interact with the EVM on Bitfinity with small modifications.

These modifications include:

- The RPC endpoint URL are in snake case, for example, `eth_getBalance` becomes `eth_get_balance`.
- The Block Number parameter is a variant type. When using methods that require a block number, you must use the `variant` type. For example, if you are querying the latest block, you would use `variant { Latest }`.

### Prerequisites

To utilize the DFX CLI, it needs to be installed on your system. Detailed installation instructions are available at [Install DFX CLI](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html#install-dfx-cli).

### Communicating with EVM(Bitfinity) using DFX CLI

The DFX CLI offers a range of commands for interacting with the EVM on Bitfinity. These include:

- [dfx canister call](#dfx-canister-call)

#### dfx canister call

The dfx canister call command is primarily used to execute functions on a canister. This functionality extends to interacting with the EVM on Bitfinity.

##### Syntax

```bash
dfx canister call <canister-id> --ic <function-name> [argument]...
```

##### Examples

###### Calling the `eth_getBalance` function

```bash
dfx canister call <evm-canister-id> --ic eth_get_balance "(0x00000000000000000)""
```

###### Calling the `eth_getBlockByNumber` function

```bash
dfx canister call <evm-canister-id> --ic eth_get_block_by_number "(variant { Latest }, true)"
```

###### Calling the `eth_getBlockByHash` function

```bash
dfx canister call <evm-canister-id> --ic eth_get_block_by_hash "(0x00000000000000000000000000000000, true)"
```

All the available methods and their parameters are listed in the [JSON-RPC API](../rpc.md) documentation. Keep in mind that the parameters are in snake case.
