---
title: "Full Node API Overview"
---

# Full Node API Overview

The Bitfinity EVM supports a limited number of blocks. To access all historical data, you can run a full node locally. Our full node runs a fork of Reth, which imports blocks from an off-chain data source. For additional developer information on building and running a node, please refer to our [GitHub repository](https://github.com/bitfinity-network/reth/blob/bitfinity-archive-node/bitfinity.md).

## Quickstart Guide

### 1. Download the Latest Snapshot

First, download the most recent snapshot using the following commands. Make sure to update the `DATE` variable to the current date, as only the most recent week's snapshots are retained.

# Set variables

```bash
DATA_DIR="~/.local/share/reth/bitfinity"
ENV="mainnet" # or "testnet"
DATE="2024-04-03" # Update to current date
EVMC_PRINCIPAL="i3jjb-wqaaa-aaaaa-qadrq-cai" # Use "4fe7g-7iaaa-aaaak-aegcq-cai" for testnet
JSON_RPC_URL="https://${ENV}.bitfinity.network"

URL="<https://storage.googleapis.com/bitfinity-reth-snapshots-${ENV}/reth-snapshot-${DATE}.tar.gz>"
```

# Create directory and download snapshot

```bash
mkdir -p $DATA_DIR && wget -O - $URL | tar -xvzf - -C $DATA_DIR
```

Note: If you skip this step, syncing will start from the first block, requiring a JSON_RPC_URL source with all blocks.

### 2. Run the Full Node

After downloading the snapshot, run the full node using Cargo:

```bash
cargo run -p reth -- node -vvv \
  --http \
  --http.port 8080 \
  --http.addr 0.0.0.0 \
  --http.api "debug,eth,net,trace,txpool,web3" \
  --disable-discovery \
  --ipcdisable \
  --no-persist-peers \
  -r $JSON_RPC_URL \
  -i 30 \
  -b 10 \
  --datadir $DATA_DIR \
  --evmc-principal $EVMC_PRINCIPAL \
  --send-raw-transaction-rpc-url $JSON_RPC_URL
```

### 3. Query the Node

Once the node is running, you can query it using the JSON-RPC API. For example, to get the current block number:

```bash
curl -X POST -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  <http://localhost:8080>
```

## Alternative Build Options

### Build from Source

To build and run using Make:

```bash
cd reth
make install

reth run -d -p 8080:8080 bitfinity/reth node -vvv \
  --http \
  --http.port 8080 \
  --http.addr 0.0.0.0 \
  --http.api "debug,eth,net,trace,txpool,web3" \
  --disable-discovery \
  --ipcdisable \
  --no-persist-peers \
  -r $JSON_RPC_URL \
  -i 30 \
  -b 10 \
  --datadir $DATA_DIR \
  --evmc-principal $EVMC_PRINCIPAL \
  --send-raw-transaction-rpc-url $JSON_RPC_URL
```

### Build with Docker

To build and run using Docker:

```bash
cd reth
make docker-build-push

docker run -d -p 8080:8080 bitfinity/reth node -vvv \
  --http \
  --http.port 8080 \
  --http.addr 0.0.0.0 \
  --http.api "debug,eth,net,trace,txpool,web3" \
  --disable-discovery \
  --ipcdisable \
  --no-persist-peers \
  -r $JSON_RPC_URL \
  -i 30 \
  -b 10 \
  --datadir $DATA_DIR \
  --evmc-principal $EVMC_PRINCIPAL \
  --send-raw-transaction-rpc-url $JSON_RPC_URL
```

This setup provides a comprehensive guide for running and interacting with a Bitfinity full node, offering flexibility in deployment methods to suit various development environments.
