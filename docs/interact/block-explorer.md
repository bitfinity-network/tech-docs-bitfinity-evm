---
title: Block Explorer
sidebar_position: 2
---

## Introduction

Block explorer allows accessing the bockchain information from EVMC (blocks, transactions, etc) that is updated in real-time.

While the EVMC Labs team works on the new EVMC block explorer - whose launch is expected to take place
in the upcoming months (Q2'2023) — users will in the meantime be able to rely on our Blockscout-based interim
solution to perform their usual tasks, deployed at [explorer.bitfinity.network](https://explorer.bitfinity.network/) for a Mainnet.

It is based on the [otterscan](https://github.com/wmitsuda/otterscan) project that targets the custom [erigon](https://github.com/ledgerwatch/erigon) node that continuously gets new information from the EVMC.

By using Block Explorer, users and developers can get access to the developer tools and network statistics that provide
extended insights into EVMC's EVM.

Users are able to view transactions, addresses, and blocks.
Developers can get a wide range of charts and statistics related to smart contract execution,
collator data, specific transfers between tokens, and a list of ERC-20 tokens on EVMC.

You can also view this explainer [video](https://user-images.githubusercontent.com/28685/124196700-4fe71200-daa3-11eb-912c-b66494fe4b23.mov).

## Deploying locally

It is possible to launch a standalone version of the blockchain explorer system that gives and access to the EVMC blocks and transactions. Please find the detailed instructions in the [documentation](https://github.com/infinity-swap/erigon/tree/EPROD-178_implement_block_importer/cmd/blockimporter/Readme.md) here.
