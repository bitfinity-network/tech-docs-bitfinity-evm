---
title: "Overview"
---

# Full Node Setup Guide for Bitfinity Network

## Introduction to Full Nodes

### What is a Full Node?

A full node plays a pivotal role in blockchain networks by validating transactions and blocks in accordance with the network's consensus rules. It contributes to the decentralization and security of the network, offering users a private and trustless interface to the blockchain.

## Bitfinity Full Node Overview

The Ethereum Virtual Machine (EVM) supports a finite number of blocks. To access comprehensive historical data, you can operate a local full node, known as the block-importer.

### Bitfinity's Implementation

Bitfinity offers a read-only full-node implementation that allows for accessing data on the EVM. Our full node, a derivative of Erigon, enables users to download historical blocks, process all transactions, and verify state roots. Additionally, the EVM can sign blocks, and the block-importer verifies these signatures to confirm the blocks' authenticity. We are in the process of enhancing the full node to include transaction broadcasting capabilities.

## Getting Started with Your Full Node

### Prerequisites

Before initiating the setup, ensure you have:

- A stable internet connection.
- Adequate storage space for blockchain data.
- Basic knowledge of terminal commands.

## Setting Up and Running Your Full Node

### 1. Clone the Repository

Begin by cloning the Bitfinity full node repository from GitHub. Use the `evmc_importer` branch to access the latest features.

```sh
git clone -b evmc_importer https://github.com/bitfinity-network/erigon.git
```

For detailed build instructions, refer to the [Bitfinity Readme File](https://github.com/bitfinity-network/erigon/blob/evmc_importer/BITFINITY.README.md).

### 2. Run the Full Node

#### Start the Block Importer

Initialize the block importer to sync with the blockchain. Replace `<JSON_RPC_URL>` and `<DB_PATH>` with the appropriate RPC URL and your database path, respectively.

```sh
build/bin/blockimporter --evm <JSON_RPC_URL> --db <DB_PATH>
```

#### Launch the RPC Daemon

Activate the RPC daemon to create an RPC URL for your full node, using the same database path as before.

```sh
build/bin/rpcdaemon --datadir <DB_PATH> --http.corsdomain * --http.api=eth,erigon,ots
```

Alternatively, you can run both processes simultaneously using the following command:

```sh
build/bin/blockimporter --evm <JSON_RPC_URL> --db <DB_PATH> &\
build/bin/rpcdaemon --datadir <DB_PATH> --http.corsdomain * --http.api=eth,erigon,ots
```

### Historical Blocks Access

The JSON_RPC_URL must include all historical blocks, accessible through:

- Testnet: `https://evm-block-extractor-server-testnet-b7emmykj3q-uc.a.run.app`
- Mainnet: `https://evm-block-extractor-server-mainnet-b7emmykj3q-uc.a.run.app`

:::note
The Bitifinity EVM URL does not encompass all historical blocks.
:::

Once operational, access your full node at `localhost:8545` or a custom port if configured.

## Connecting to a Blockchain Explorer

### Using Otterscan

Enhance your user interface and simplify blockchain exploration by connecting your full node to Otterscan. Follow the setup instructions in the repository to establish the connection.
