---
title: "EVM Client"
---

EVM Client is a package that allows you to interact with the EVM (Bitfinity). It is a wrapper around the [JSON-RPC API](../rpc.md) and provides a simple interface for interacting with the EVM via the Canister endpoint.

### Key Features

- Integration with Internet Computer Canisters: The EVM Client is particularly designed to work in conjunction with canisters deployed on the Internet Computer. This integration allows for seamless interaction between the two environments, making it a vital tool for developers working within the Bitfinity ecosystem.

- Functionality and Limitation: While the EVM Client encompasses all the essential functionalities of the EVM on Bitfinity, it is crucial to note that it does not operate as a full node. Instead, it functions as a client that connects to the EVM on Bitfinity, facilitating various operations without bearing the full responsibilities of a node.

## Installation

The EVM Client is available as an rust crate. You can install it using the following command:

```toml
[dependencies]
ic-canister-client = { git = "https://github.com/bitfinity-network/canister-sdk", package = "ic-canister-client", tag = "v0.10.x" }
evm-canister-client = { git = "https://github.com/bitfinity-network/bitfinity-evm-sdk", package = "evm-canister-client", tag = "v0.8.x" }
```

## Usage

In you canister code, you can import the EVM Client using the following code:

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
