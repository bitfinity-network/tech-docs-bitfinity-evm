---
title: "Overview"
---

# Overview

The EVM has support for a limited number of blocks. To access all the historical data, you can run a full node locally. Our full node runs a fork of Reth, which imports blocks from an off-chain data source.

## Run a Full Node

Clone the reth fork and build the code.

```bash
git clone https://github.com/bitfinity-network/reth.git -b bitfinity-archive-node
```

```bash
cd reth
```

## Build from Docker

### Pre-requisites

- Docker

### Build

To build the docker image, use the following command:

```bash
make docker
```

### Run

To run the docker image, use the following command:

```bash
docker run -d -p 8080:8080 bitfinity/reth node --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL -i 30 -b 10
```

### Run pre-built image

To run the pre-built image, use the following command:

```bash
docker run ghcr.io/bitfinity-network/bitfinity-reth:main node --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL
```

## Build from Source

To build from source, you need to run the following commands:

```bash
make build
```

```bash
./target/release/reth node --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL
```

### Run with cargo

To run directly without building, you can use cargo command.

```bash
cargo run -p reth -- node -vvv --http --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL -i 30 -b 100 --datadir ./target/reth
```

## Sync with a Full Node

To sync with the full node, there are two options:

- Letting the node sync with the Bitfinity Network (default).
- Downloading the most recent snapshot from off-chain data source.

### Sync with Bitfinity Network

When running the node, it will also run a block import process. This process will download the blocks from the network and import them into the database. This process can take a long time, depending on the network speed and the number of blocks to import

### Downloading the Snapshot

The snapshot of reth is saved daily. You can download the snapshot from the following URL:

```text
https://storage.googleapis.com/bitfinity-reth-snapshots-testnet/reth-snapshot-2024-${month}-${day}.tar.gz
```

alternatively, you can download the snapshot using the following command:

```bash
mkdir -p ~/.local/share/reth/bitfinity && wget -O - https://storage.googleapis.com/bitfinity-reth-snapshots-testnet/reth-snapshot-2024-04-03.tar.gz | tar -xvzf - -C ~/.local/share/reth/bitfinity
```

This will download the snapshot into the `~/.local/share/reth/bitfinity` directory.

Note - the snapshot is not guaranteed to be up to date.

When the snapshot is downloaded and extracted, you can start the node with the following command:

```bash
./target/release/reth node --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers --datadir ~/.local/share/reth/bitfinity -r $JSON_RPC_URL -i 30 -b 100
```

This will start the node with the snapshot.

### JSON RPC URL

The JSON_RPC_URL must have all historical blocks.  You can retrieve all historical blocks from the following URLs:

```text

Testnet: https://block-extractor-testnet-xuwtjkb74a-od.a.run.app
Devnet: https://block-extractor-devnet-oia5clzt3a-lz.a.run.app
Mainnet: TBD
```

Note - the Bitfinity Network URL does not contain all historical blocks.

Once up and running, you can query your full node on <http://0.0.0.0:8545>, if you haven't assigned a custom port.

### Querying the Node

We have the node up and running and we can query it. The endpoints are all the same as the [JSON RPC](https://ethereum.org/en/developers/docs/apis/json-rpc/) specification.

```bash
curl https://0.0.0.0:8080 \
-X POST -H 'content-Type: application/json' \
-d '{"jsonrpc":"2.0","id":"67","method":"eth_getBlockByNumber","params":["0x0", true]}'
```
