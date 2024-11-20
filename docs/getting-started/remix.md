---
title: Remix
sidebar_position: 2
---


# Getting Started with Remix

## Introduction

Ensure that you have Metamask installed, see the guide on setting up Metamask with Bitfinity [here](/getting-started/metamask).

In this tutorial we will walk through connecting MetaMask to the Bitfinity Testnet, deploying a simple ERC-20 contract using [Remix], and transferring the new token using MetaMask.

:::note
Screenshots in this tutorial are taken from the MetaMask browser extension version 9.5.5.
:::


## Deploying an ERC-20 Token using Remix

It is important to chose the Paris version of the EVM and also Solidity version 0.8 when deploying with Remix.

In a new tab, open the Remix IDE at [remix.ethereum.org](https://remix.ethereum.org).
It might take a minute to load, but once it has, create a new file `ERC20Token.sol` in the workspace panel on the left:

![Remix-new-file](/img/remix_new_file.png)

Copy and paste the following code into the central editor panel:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor (string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }
}
```

This code is a slightly modified (the Solidity compiler and [OpenZeppelin] versions are newer) version of the [example from Solidity by Example].

Click the `Solidity Compile` button on the far left panel (the second icon down);
ensure your selected Solidity compiler version is 0.8 (minor versions within 0.8, e.g., 0.8.4 work too), and click `Compile ERC20Token.sol`.

Ensure that the Paris version is selected as shown in the screenshot. 

![Remix-solidity-compile](/img/remix_solidity_compile.png)

Once the contract is compiled, click the `Deploy & run transactions` button in the far left panel (the icon below the Solidity compiler).
In the `ENVIRONMENT` drop-down select `Injected Web3`.

![Remix-inject-web3](/img/remix_injected_web3.png)

You will see a MetaMask pop-up window asking you to give the Remix IDE permission to access it.
Click `Next` and then `Connect` to grant access.

![Remix-connect-MetaMask](/img/remix_connect_with_metamask.png)

Back in the Remix interface, click the arrow next to the `DEPLOY` section of the left panel.
Fill in the token details with whatever you like (`MyToken` and `MT` in the example), and click `transact`.

![Remix-deploy-contract](/img/remix_deploy_contract.png)

Another MetaMask pop-up will appear asking you to confirm the transaction.
Click `Confirm`.

![Remix-deploy-contract-MetaMask-confirm](/img/remix_deploy_contract_metamask_confirm.png)

:::note
Transaction may cost ~ $0.01 or free on testnet
:::

After a few moments the transaction will be confirmed by the network.
You will see a success message in the bottom panel and the contract listed under `Deployed Contracts` on the left panel.
Click the copy button to copy the address of the newly deployed contract.

![Remix-deploy-contract-confirmed](/img/remix_deploy_contract_confirmed.png)

Now that the contract is deployed on the Bitfinity network, we can interact with it via MetaMask.

## Adding an ERC-20 Token to MetaMask

In the MetaMask interface (with the Bitfinity Testnet network still selected), click the `Add Token` button:

![MetaMask-add-token-button](/img/metamask_add_token_button.png)

Paste the token address copied from Remix in the previous step.
The remaining token details should fill in automatically as MetaMask finds the contract on-chain.
Click `Next`:

![MetaMask-add-token](/img/metamask_add_token.png)

On the next screen you see the balance (100 tokens), as minted in our contract constructor.
Click `Add Tokens`:

![MetaMask-add-token-confirm](/img/metamask_add_token_confirm.png)

The token has now been added to MetaMask and we can use the MetaMask interface to view the token balance and to transfer the token to others.
## Summary

In this tutorial we connected MetaMask to the Bitfinity Testnet, deployed an ERC-20 token contract using Remix, and transferred that token using MetaMask.
The only difference to doing this on the original Ethereum network was setting the RPC endpoint to be Bitfinity's.

[MetaMask]: https://metamask.io
[Remix]: https://remix.ethereum.org
[OpenZeppelin]: https://openzeppelin.com/contracts/
[example from Solidity by Example]: https://solidity-by-example.org/app/erc20/
