---
title: Starting with Development
sidebar_position: 0
---

## Deploying a Smart Contract to the Bitfinity EVM

# Step 1 - Writing a Smart Contract

A smart contract is a self-executing contract with the terms of the agreement directly written into code. These contracts are stored on a blockchain and automatically execute, control, or document events and actions based on predefined conditions. Smart contracts are immutable once deployed, ensuring that the contract's terms cannot be altered.

Here’s a simple example of a smart contract written in Solidity:

```
// pragma specifies the compiler version of Solidity.
// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.26 and less than 0.9.0

pragma solidity ^0.8.26;

contract HelloWorld {
    string public greet = "Hello World!";
}
```

This contract defines a single string variable greet that returns the message "Hello World!" when accessed.

# Step 2 - Selecting an IDE and Framework

To write, compile, and deploy smart contracts, you'll need an Integrated Development Environment (IDE) and a framework. Popular options include:

* **HardHat**: A flexible and powerful Ethereum development environment for compiling, deploying, testing, and debugging your Ethereum software.
* **Truffle**: A development framework that provides a suite of tools for developing, testing, and deploying smart contracts on the Ethereum blockchain.
* **Remix**: An online IDE that provides a user-friendly environment for writing Solidity contracts, along with a built-in debugger and testing tools.

# Step 3 - Connecting Your Wallet

To interact with the Bitfinity EVM, you'll need a wallet. A wallet is a software application that stores your private keys and enables you to interact with the blockchain. As the Bitfinity EVM is RPC compatible, any RPC-compatible wallet will do. However, one of the most popular options is:

**MetaMask**: One of the most popular Ethereum wallets that also supports the Bitfinity EVM. MetaMask can be installed as a browser extension or a mobile app.

* Install MetaMask from the official website or browser extension store.
* Create a new wallet or import an existing one.
* Connect MetaMask to the Bitfinity EVM by adding a custom network. Provide the required network information such as RPC URL, Chain ID, and symbol.

# Step 4 - Selecting a Network

Before deploying your smart contract, you need to select a network. The Bitfinity EVM supports different networks, each serving a specific purpose:

* **Testnet**: A testing environment where you can deploy and test your smart contracts without spending real tokens. It's ideal for development and experimentation.
* **Mainnet**: The live network where real transactions take place, using real tokens. Deploying on the Mainnet means your contract is fully operational and accessible to the public.

Choose the network that aligns with your current development stage. For testing and development, deploy on a Testnet first. Once your contract is thoroughly tested and ready for production, you can deploy it on the Mainnet.

# Step 5 - Covering Deployment Costs (gas)

Deploying a smart contract on the Bitfinity EVM requires paying a fee known as "gas." Gas is a measure of the computational work required to perform operations like deploying contracts or executing transactions.

* Get BTF tokens: You'll need Bitfinity tokens (the native cryptocurrency of the Bitfinity network) in your wallet to cover the gas fees.
* Estimate gas costs: Use your chosen IDE or wallet to estimate the gas cost for deploying your contract.
* Ensure sufficient balance: Make sure your wallet has enough tokens to cover the deployment and future interactions with the contract.

# Step 6 - Verifying Your Deployment

Once your contract is deployed, you can verify it to ensure that the source code matches the deployed bytecode. Verification is important for transparency and allows others to interact with your contract with confidence.

* Obtain contract details: After deployment, retrieve the contract's address and the ABI (Application Binary Interface).
* Verify on Block Explorer: Use a block explorer that supports the Bitfinity EVM to verify your contract. Enter the contract address, compiler version, and source code.
* Publish the contract: Once verified, the contract's source code and ABI will be publicly available, allowing anyone to interact with it.

# Step 8 - Interacting with Deployed Contracts

Once your smart contract is deployed on the Bitfinity EVM, the next step is to interact with it. This can be done through a web interface, a script, or directly through your wallet. Interacting with your contract allows you to execute its functions, view data stored on the blockchain, and integrate it with other decentralized applications (dApps).

### Using a Web Interface

If you're building a dApp, you'll likely want to create a user-friendly front-end to interact with your smart contract. Popular libraries and frameworks for this include:

- **`ethers.js`**: A lightweight library for interacting with the Ethereum blockchain, which is also compatible with the Bitfinity EVM. It's commonly used to connect a front-end application with a deployed smart contract.
- **`web3.js`**: Another popular JavaScript library for interacting with the blockchain. It provides a rich set of APIs for sending transactions, interacting with smart contracts, and managing accounts.

**Example:**

Here’s a basic example of how you can interact with a deployed contract using `ethers.js` in a JavaScript front-end:

```javascript
// Import ethers.js
const { ethers } = require("ethers");

// Connect to the Bitfinity EVM network (Testnet/Mainnet)
const provider = new ethers.providers.JsonRpcProvider("https://testnet.bitfinity.network");

// Specify your deployed contract's address
const contractAddress = "0xYourContractAddress";

// Define the ABI (Application Binary Interface) of your contract
const abi = [
    // Add the functions you want to interact with
    "function greet() public view returns (string memory)"
];

// Create a contract instance
const contract = new ethers.Contract(contractAddress, abi, provider);

// Function to call the `greet` function from the contract
async function getGreeting() {
    const greeting = await contract.greet();
    console.log("Greeting from contract:", greeting);
}

// Execute the function
getGreeting();
```

# Additional Step - Working with Image Assets (Optional)

In some decentralized applications (dApps), you may need to work with image assets, especially if you're creating Non-Fungible Tokens (NFTs) or other visual elements within your smart contracts. While smart contracts themselves cannot directly handle image data due to their limitations in storing large files, there are established methods for integrating image assets into your dApp. See the article [Complete Guide to Working with Image Assets on the Bitfinity EVM](https://www.blog.bitfinity.network/complete-guide-to-working-with-image-assets-on-the-bitfinity-evm/) for further information.

# Conclusion

Deploying a smart contract on the Bitfinity EVM involves several key steps, from writing the contract to deploying it on the network. By following these steps, you can create, deploy, and manage your smart contracts effectively. Whether you’re building decentralized applications, issuing tokens, or creating NFTs, the Bitfinity EVM provides a robust platform for blockchain development.