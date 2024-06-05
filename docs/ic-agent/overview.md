---
title: "Overview"
---

# Introduction

IC Agents can reserve an Ethereum address for an IC principal/IC Agent. This address can be used to send transactions to the EVM. If a transaction is sent from a reserved address by any entity other than the registered IC Agent, the transaction will be rejected.

The purpose of this registration process is to bind an Ethereum key to an IC agent, so that no other entity may use that key in conjunction with the Bitfinity EVM. This means that a canister could, for instance, hold a local key and use this to sign transactions on the EVM without the fear of losing funds from a lost or stolen private key. This only applies to the Bitfinity EVM, other EVMs cannot be protected in such a way, and it is important to keep your keys secure if used on other chains or not registered.

## Registering an EVM address

This section provides a step-by-step guide to registering an EVM address for an IC principal. It consists of two parts:

- Sending a transaction to the EVM canister
- Reserving an EVM address

### Sending a transaction to the EVM canister

To send a transaction to the EVM canister, users must first create a transaction and sign it with their signing key. The transaction must have the following parameters:

- To: `USER_ADDRESS`
- Value: `0`
- From: `USER_ADDRESS`
- Data: The IC Agent's principal in bytes

The transaction must be signed with the signing key. Once signed, the transaction can be sent to the EVM canister using the `send_raw_transaction` endpoint. The caller must have sufficient tokens in their account to cover the transaction fee.

This endpoint returns the transaction hash, which is required to verify the registration and reserve an EVM address.

### Reserving an EVM address

To reserve an EVM address, users must call the `reserve_address` endpoint with the following parameters:

- Principal: The IC Agent's principal
- Transaction hash: The transaction hash returned by the `send_raw_transaction` endpoint

If the transaction hash is valid, the EVM canister will reserve the address. The reserved address can then be used to send transactions to the EVM canister, but it will only be reserved for the IC Agent's principal.

### Example

### Using the register-agent tool

The `register-agent` tool can be used to register an EVM address for an IC principal. It can be found in this [repository](<https://github.com/bitfinity-network/bitfinity-evm-sdk/tree/main/src/register-evm-agent>). In the [releases](<https://github.com/bitfinity-network/bitfinity-evm-sdk/releases/tag/v0.9.x>) section, you can find the latest version of the tool.

The tool can be used as follows:

```bash
register-evm-agent reserve -k <private_key> -g <gas price> -n <network> -i <identity_path> --evm <evm_canister_principal> --canister-id <reserve_canister_principal>
```

- *private_key* is the Private key for the identity you're going to use to reserve your canister.
- *gas_price* is the gas price for the transaction that will be used as a proof.
- *network* is the network to run against: default is local, the value can be both ic or a custom URL.
- *identity_path* is the path to the identity you're going to use to reserve your canister
- *evm_canister_principal* is the principal for the EVM canister
- *reserve_canister_principal* is the principal of the canister you're going to associate to the reserved address

This command will send the transaction to the EVM canister and reserve the address for the IC principal. On Success, it will print `Address successfully reserved`.

For full documentation, please refer to the [README](<<https://github.com/bitfinity-network/bitfinity-evm-sdk/tree/main/src/register-evm-agent/README.md>)

### Using the DFX CLI

If you have DFX installed, you can use the following command to register an EVM address for an IC principal:

:::note
You strictly need to follow the steps mentioned above to register an EVM address for an IC principal.
:::

#### Step 1: Create and send a transaction

```bash
transaction = record {
    from = "\<USER_ADDRESS>\";
    to = "\<USER_ADDRESS>\";
    value = 0x0;
    data = vec { <IC_AGENT_PRINCIPAL> };
    gas = 0x989680;
    gas_price = 0xa;
    nonce = 0x0;
}

dfx canister call <evm_canister_principal> --ic send_raw_transaction "(transaction)"
```

#### Step 2: Reserve an EVM address

:::note
The transaction hash is returned by the `send_raw_transaction` endpoint.
:::

```bash

dfx canister call <evm_canister_principal> --ic reserve_address "(<IC_AGENT_PRINCIPAL>, <TRANSACTION_HASH>)"
```

These steps will reserve an EVM address for the IC principal. The reserved address can then be used to send transactions to the EVM canister, but it will only be reserved for the IC Agent's principal.


## EVM Rust Canister Client


The EVM Client is a Rust package that allows you to interact with the EVM (Bitfinity)
from a canister using the IC API. 

It is a wrapper around the [JSON-RPC API](../rpc.md) and provides a simple interface for interacting with the EVM via the Canister endpoint.

### Key Features

- Integration with Internet Computer Canisters: The EVM Client is particularly designed to work in conjunction with canisters deployed on the Internet Computer. This integration allows for seamless interaction between the two environments, making it a vital tool for developers working within the Bitfinity ecosystem.

- Functionality: The client connects to the EVM on Bitfinity, facilitating various operations without bearing the full responsibilities of a node.

## Installation

The EVM Client is available as a rust crate. You can install it using the following command:

```toml
[dependencies]
ic-canister-client = { git = "https://github.com/bitfinity-network/canister-sdk", package = "ic-canister-client", tag = "v0.10.x" }
evm-canister-client = { git = "https://github.com/bitfinity-network/bitfinity-evm-sdk", package = "evm-canister-client", tag = "v0.8.x" }
```

## Usage in Canister

In your canister code, you can import the EVM Client using the following code:

```rust
use evm_canister_client::{ EvmCanisterClient, IcCanisterClient};

let canister = IcCanisterClient::new(EVM_CANISTER_ID);
let evm = EvmCanisterClient::new(canister);
```

The `EVM_CANISTER_ID` is the canister ID of the EVM on Bitfinity.

## Examples

### Getting the balance of an account

```rust
use evm_canister_client::{ EvmCanisterClient, IcCanisterClient};
use ethers::types::{BlockNumber, H160};

let canister = IcCanisterClient::new(EVM_CANISTER_ID);
let evm = EvmCanisterClient::new(canister);

let balance = evm.get_balance(H160::from_str("0x0000000000000000000000000000000000000000").unwrap(), BlockNumber::Latest).await.unwrap();

println!("Balance: {}", balance);
```

### Getting the block by number

```rust
use evm_canister_client::{ EvmCanisterClient, IcCanisterClient};
use ethers::types::{BlockNumber, H160};

let canister = IcCanisterClient::new(EVM_CANISTER_ID);
let evm = EvmCanisterClient::new(canister);

let block = evm.get_block_by_number(BlockNumber::Latest, true).await.unwrap();

println!("Block: {}", block);
```

### Getting the block by hash

```rust
use evm_canister_client::{ EvmCanisterClient, IcCanisterClient};
use ethers::types::{BlockNumber, H256};

let canister = IcCanisterClient::new(EVM_CANISTER_ID);
let evm = EvmCanisterClient::new(canister);

let block = evm.get_block_by_hash(H256::from_str(
    "0x000000000000000000000000000000").unwrap(), true).await.unwrap();


println!("Block: {}", block);
```

For comprehensive information on all the methods available and their respective parameters refer to the [JSON-RPC API](../rpc.md) documentation.
