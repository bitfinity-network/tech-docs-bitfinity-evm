---
title: Block Explorer
sidebar_position: 7
---

## Public Explorer

[Bitfinity's block explorer](https://explorer.bitfinity.network/) is based on the [otterscan](https://github.com/wmitsuda/otterscan) project and provides real-time access to blockchain data (blocks, transactions, etc.). It interfaces with a custom [erigon](https://github.com/ledgerwatch/erigon) node for continuous updates from Bitfinity.


![Block Explorer](/img/block-explorer.png)


The Block Explorer offers users and developers access to tools and network statistics for in-depth insights into Bitfinity's EVM. Users can view transactions, addresses, and blocks. Developers can access charts and statistics related to smart contract execution, collator data, specific token transfers, and a list of ERC-20 tokens on Bitfinity.

## Local Deployment

You can launch a standalone version of the block explorer for access to Bitfinity's blocks and transactions. 

To do this, you will need to run a forked Erigon Node against the Bitfinity EVM. And once this has been stood up, you can run Otterscan or Bitfinity-Otterscan against this node. 

[bitfinity-eragon](https://github.com/bitfinity-network/erigon)

[otterscan](https://github.com/wmitsuda/otterscan)

[bitfinity-otterscan](https://github.com/bitfinity-network/otterscan/tree/v1.30.0-modified)
