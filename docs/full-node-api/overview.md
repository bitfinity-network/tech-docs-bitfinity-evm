---
title: "Overview"
---

# Overview

The EVM has support for a limited number of blocks. To access all the historical data, you can run a full node locally, called the block-importer. 

Bitfinity currently supports a read-only full-node implementation to access the data on the EVM. Our Full node is a fork of Erigon that enables a user to download historical blocks, executes all transactions and validates the state roots. In addition, the EVM is capable of signing blocks, and the block-importer can validate the signatures to ensure the blcoks were indeed generated by the EVM.  

We will shortly be upgrading the full node, to enable broadcasting transactions. 

## Build and Run a Full Node

To sync with the node you will need to build the code by following the instructions in https://github.com/bitfinity-network/erigon/blob/evmc_importer/BITFINITY.README.md on the evmc_importer branch. 

The block-importer uses two processes, one to download and validate blocks and an other to establish an RPC URL for the full node. For example: 

``` 
build/bin/blockimporter --evm <JSON_RPC_URL> --db <DB_PATH> &\
build/bin/rpcdaemon --datadir <DB_PATH> --http.corsdomain * --http.api=eth,erigon,ots 
```

The JSON_RPC_URL must have all historical blocks.  You can retrieve all historical blocks from the following URLs: 

```
Testnet: https://evm-block-extractor-server-testnet-b7emmykj3q-uc.a.run.app
Mainnet: https://evm-block-extractor-server-mainnet-b7emmykj3q-uc.a.run.app
```

Note - the EVMC canister URL does not contain all historical blocks.

Once up and running, you can query your full node on localhost:8545, if you haven't assigned a custom port. 

## Explorer 

Once you have the daemon up and running, you can connect to Otterscan, also by following the description in the Repo. 

