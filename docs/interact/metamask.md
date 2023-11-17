---
title: MetaMask
sidebar_position: 1
---

## Introduction

[MetaMask](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) is a convenient UI for interacting with Ethereum-compatible blockchains (such as Bitfinity). For the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed. If you need help getting started with MetaMask itself, check out their [documentation](https://docs.metamask.io/).



## Connecting to Bitfinity Automatically

The simplest way to connect to Metamask on the Bitfinity Network is to navigate to the [get-started](https://bitfinity.network/start) page, and connecting to the network by clicking on the add network button. 


## Manual Connection 




Ensure you have Metamask installed. Open Metamask and in the top-right corner of the MetaMask interface, click the network selection drop-down and then click `Custom RPC`.

![MetaMask-network-select](/img/metamask_choose_network.png)

:::note
Screenshots in this tutorial are taken from the MetaMask browser extension version 9.5.5.
:::

Fill in the form with the following information:

* Network Name: Bitfinity TestNet
* New RPC URL: `https://testnet.bitfinity.network/`
* Chain ID: 355113
* Currency Symbol: BFT
* Block Explorer URL (Optional): `https://explorer.bitfinity.network`

![MetaMask-create-bitfinity-rpc](/img/metamask_create_bitfinity_rpc.png)

:::note
All the Bitfinity RPC endpoint URLs and chain IDs can be found on our [Networks](../getting-started/network-endpoints.md) page.
:::

Click `Save`, and you should see `Bitfinity Testnet` is now the network selected in MetaMask.
To see MetaMask in action, we will connect it to [Remix] and perform some transactions.
