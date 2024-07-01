---
title: "Overview"
---

# Overview

The EVM has support for a limited number of blocks. To access all the historical data, you can run a full node locally. Our full node runs a fork of Reth, which imports blocks from an off-chain data source. Additional developer information to build and run a node can be found [here.](https://github.com/bitfinity-network/reth/blob/bitfinity-archive-node/bitfinity.md)



## Quickstart

The first step to running a full node is to get the latest snapshot. You can download the snapshot using the following command. You will need to change the date in the URL string to be that of the present day. Only the most recent week's worth of snapshots are kept.  
``` bash
# set variables
DATA_DIR="~/.local/share/reth/bitfinity"
ENV="mainnet" # or testnet 
DATE="2024-04-03" # or current date
EVMC_PRINCIPAL="i3jjb-wqaaa-aaaaa-qadrq-cai" # or "4fe7g-7iaaa-aaaak-aegcq-cai" for testnet canister id 
JSON_RPC_URL="https://${ENV}.bitfinity.network" 

URL="https://storage.googleapis.com/bitfinity-reth-snapshots-${ENV}/reth-snapshot-${DATE}.tar.gz"
```

Then run the command below to download the snapshot to the data directory. If you do not run this command, the syncing will start from the first block, and you will need to set the JSON_RPC_URL from a source with all blocks: 

```
mkdir -p ~/.local/share/reth/bitfinity && wget -O - $URL | tar -xvzf - -C $DATA_DIR
```


Once you have downloaded the latest snapshot to the data directory, you can simply run the full Node with Cargo, being careful to specify the JSON_RPC_URL of interest. 

```bash
cargo run -p reth -- node -vvv --http --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL -i 30 -b 10 --datadir $DATA_DIR --evmc-principal  $EVMC_PRINCIPAL --send-raw-transaction-rpc-url $JSON_RPC_URL
```

#### Querying the node

Once built, you can query the node using the JSON-RPC API. For example, to get the block number, you can use the following command:

```bash 
curl -X POST -H 'content-Type: application/json' --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://localhost:8080
```

## Other Build Options

 It is also possible to build rom source with Make and Docker

### Build from Source
To build and run the docker image, use the following commands:

```bash
cd reth
make install

reth run -d -p 8080:8080 bitfinity/reth node -vvv --http --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL -i 30 -b 10 --datadir $DATA_DIR --evmc-principal  $EVMC_PRINCIPAL --send-raw-transaction-rpc-url $JSON_RPC_URL

```

### Build from Docker
To build and run the docker image, use the following commands:

```bash
cd reth
make docker-build-push

docker run -d -p 8080:8080 bitfinity/reth node -vvv --http --http.port 8080 --http.addr 0.0.0.0 --http.api "debug,eth,net,trace,txpool,web3" --disable-discovery --ipcdisable --no-persist-peers -r $JSON_RPC_URL -i 30 -b 10 --datadir $DATA_DIR --evmc-principal  $EVMC_PRINCIPAL --send-raw-transaction-rpc-url $JSON_RPC_URL
```
