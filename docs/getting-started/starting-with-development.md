---
title: Starting With Development
sidebar_position: 0
---

# Deploying a Smart Contract to the Bitfinity EVM

## Step 1 - Writing a Smart Contract

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

## Step 2 - Selecting an IDE and Framework

To write, compile, and deploy smart contracts, you'll need an Integrated Development Environment (IDE) and a framework. Popular options include:

* **Remix**: An online IDE that provides a user-friendly environment for writing Solidity contracts, along with a built-in debugger and testing tools. See the full guide [here](/getting-started/remix).
* **HardHat**: A flexible and powerful Ethereum development environment for compiling, deploying, testing, and debugging your Ethereum software. See the full guide [here](/getting-started/hardhat).
* **Truffle**: A development framework that provides a suite of tools for developing, testing, and deploying smart contracts on the Ethereum blockchain.

You can find examples that use these frameworks on [GitHub](https://github.com/bitfinity-network/bitfinity-evm-examples).

:::tip Use a Linter
It's a good idea to use a Solidity linter like **Solhint** or **Solium** to catch potential syntax and security issues early in your code.
:::

## Step 3 - Connecting Your Wallet

To interact with the Bitfinity EVM, you'll need a wallet. A wallet is a software application that stores your private keys and enables you to interact with the blockchain. As the Bitfinity EVM is RPC compatible, any RPC-compatible wallet will do. However, one of the most popular options is:

**MetaMask**: One of the most popular Ethereum wallets that also supports the Bitfinity EVM. MetaMask can be installed as a browser extension or a mobile app.

* Install MetaMask from the official website or browser extension store.
* Create a new wallet or import an existing one.
* Connect MetaMask to the Bitfinity EVM by adding a custom network. Provide the required network information such as RPC URL, Chain ID, and symbol.

See the full guide for [connecting to MetaMask](/getting-started/metamask).

## Step 4 - Selecting a Network

:::note
Mainnet currently points to the Execution Layer until it is directly upgraded to Mainnet (no state resets).
:::

Before deploying your smart contract, you need to select a network. The Bitfinity EVM supports different networks, each serving a specific purpose:

* **Testnet**: A testing environment where you can deploy and test your smart contracts without spending real tokens. It's ideal for development and experimentation.
* **Mainnet**: The live network where real transactions take place, using real tokens. Deploying on the Mainnet means your contract is fully operational and accessible to the public.

Choose the network that aligns with your current development stage. For testing and development, deploy on a Testnet first. Once your contract is thoroughly tested and ready for production, you can deploy it on the Mainnet.

## Step 5 - Covering Deployment Costs (Gas)

Deploying a smart contract on the Bitfinity EVM requires paying a fee known as "gas." Gas is a measure of the computational work required to perform operations like deploying contracts or executing transactions.

* Get BTF tokens: You'll need Bitfinity tokens (the native cryptocurrency of the Bitfinity network) in your wallet to cover the gas fees.
* Estimate gas costs: Use your chosen IDE or wallet to estimate the gas cost for deploying your contract.
* Ensure sufficient balance: Make sure your wallet has enough tokens to cover the deployment and future interactions with the contract.

:::tip Estimate Gas Correctly
Different operations within your contract can require different amounts of gas. To estimate gas consumption you can send a transaction request to eth_estimateGas.
:::


## Step 6 - Verifying Your Deployment

Once your contract is deployed, you can verify it to ensure that the source code matches the deployed bytecode. Verification is important for transparency and allows others to interact with your contract with confidence.

* Obtain contract details: After deployment, retrieve the contract's address and the ABI (Application Binary Interface).
* Verify on Block Explorer: Use a block explorer that supports the Bitfinity EVM to verify your contract. Enter the contract address, compiler version, and source code. [Testnet Block Explorer](https://explorer.testnet.bitfinity.network/), [Mainnet Block Explorer](https://explorer.mainnet.bitfinity.network/).
* Publish the contract: Once verified, the contract's source code and ABI will be publicly available, allowing anyone to interact with it.

:::tip Contract Verification Benefits
Verifying your contract on a block explorer allows others to view and interact with your contract more easily. It builds trust in your code by ensuring transparency.
:::

## Step 8 - Interacting with Deployed Contracts

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

---

## **Advanced**

## Interacting with Bitcoin

Directly interacting with Bitcoin in your smart contracts is a feature that is currently under development in the [BitFusion SDK](https://github.com/bitfinity-network/bit-fusion-sdk).

## Working with Image Assets

In some decentralized applications (dApps), you may need to work with image assets, especially if you're creating Non-Fungible Tokens (NFTs) or other visual elements within your smart contracts. While smart contracts themselves cannot directly handle image data due to their limitations in storing large files, there are established methods for integrating image assets into your dApp. See the article [Complete Guide to Working with Image Assets on the Bitfinity EVM](https://www.blog.bitfinity.network/complete-guide-to-working-with-image-assets-on-the-bitfinity-evm/) for further information.


## Security Best Practices 

Security is paramount when deploying smart contracts on the Bitfinity EVM or any blockchain. Once a smart contract is deployed, it cannot be altered, making it essential to ensure that your code is secure and free from vulnerabilities. Here are some key practices and tools to help you secure your smart contract:

### 1. Secure Coding Practices

Adopting secure coding practices from the outset can prevent many common vulnerabilities. Here are a few tips to follow:

- **Keep contracts simple**: The more complex your contract is, the harder it is to ensure security. Only implement necessary features and avoid overcomplicating the logic.
- **Avoid floating-point arithmetic**: Solidity does not support floating-point numbers, and improper use of integers can lead to overflow issues. Use the `SafeMath` library (or Solidity's built-in overflow checks in version 0.8.x and above) to handle mathematical operations safely.
- **Be mindful of `tx.origin`**: Using `tx.origin` for authorization can expose your contract to phishing attacks. Always use `msg.sender` when checking permissions.
- **Proper access control**: Restrict critical functions in your contract using appropriate access control mechanisms, such as `onlyOwner` or role-based access provided by OpenZeppelin’s libraries.
- **Fail-safe mechanisms**: Implement a circuit breaker mechanism (e.g., a `pause` function) that allows you to stop contract operations in case of emergencies or attacks.

### 2. Common Vulnerabilities

Some vulnerabilities are particularly common in smart contract development. Here are a few to watch out for:

- **Reentrancy Attacks**: This occurs when an external contract is able to call back into the calling contract before the original function is completed. To prevent reentrancy, ensure that state changes occur before external calls, or use the `ReentrancyGuard` modifier from OpenZeppelin.

    **Example of a reentrancy vulnerability**:

    ```solidity
    // Vulnerable contract
    function withdraw(uint _amount) public {
        require(balances[msg.sender] >= _amount);
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success);
        balances[msg.sender] -= _amount;  // State change after external call
    }
    ```

- **Integer Overflow/Underflow**: Although Solidity versions 0.8.0 and above automatically handle overflow checks, for older versions, using the `SafeMath` library is essential to prevent overflows.

- **Unchecked External Calls**: Always check the return values of external function calls and handle errors properly to avoid vulnerabilities.

### 3. Importance of Code Audits

Even the most experienced developers can miss security flaws. Conducting a thorough code audit is essential to identify potential vulnerabilities. Here are some common steps for auditing:

- **Internal Code Reviews**: Have other team members review the smart contract code for potential vulnerabilities.
- **Automated Auditing Tools**: Use automated tools like MythX and Slither to scan your contract for known vulnerabilities and misconfigurations.
- **Third-Party Audits**: For critical contracts, consider hiring a third-party auditing firm to conduct a detailed security audit. This is especially important for contracts handling large amounts of value.

### 4. Testing Thoroughly

- **Unit Testing**: Before deploying your contract, write comprehensive unit tests for all functions and edge cases using testing frameworks like HardHat or Truffle.
- **Fuzz Testing**: Use fuzz testing to automatically test your contract with random inputs, helping to uncover unexpected behavior.
- **Test on a Testnet**: Always deploy and test your contract on a Testnet (like the Bitfinity Testnet) before deploying it to the Mainnet.

### 5. Using Security Libraries

Utilizing well-tested security libraries can help you avoid writing your own security code from scratch. Some popular libraries include:

- **OpenZeppelin**: Provides widely-used contracts such as ERC-20, ERC-721, access control (Ownable), and security-related utilities like `ReentrancyGuard` and `SafeMath`.
- **Slither**: A static analysis tool to identify potential vulnerabilities in your smart contract code.
- **MythX**: A powerful tool for automated analysis of Ethereum smart contracts. It can detect common vulnerabilities like reentrancy, unchecked sends, and integer overflows.

:::tip Use OpenZeppelin Libraries
OpenZeppelin provides audited and well-tested implementations of smart contract standards like **ERC-20** and **ERC-721**. Using these can save time and reduce security risks.
:::


## Gas Optimization Tips

Optimizing gas usage can make your smart contracts more efficient and cheaper to use. Here are some tips for reducing gas consumption:

- **Use smaller data types**: Use `uint8` or `uint16` instead of `uint256` when the full range is not needed.
- **Batch transactions**: If possible, batch multiple operations in one transaction to reduce the overall gas cost.
- **Minimize storage writes**: Writing to storage is one of the most expensive operations in Solidity. Only update state variables when necessary.
- **Use external functions**: When calling a function that doesn't need to modify the state, declare it as `external`. It consumes less gas than internal calls.

:::tip Save on Gas
Optimize your contract's logic to minimize state changes and storage access, which can significantly reduce gas costs.
:::


## Managing and Upgrading Contracts

Once a smart contract is deployed on the Bitfinity EVM, it is generally immutable, meaning its code cannot be changed. However, managing your contract and planning for upgrades is crucial, especially as business requirements or security concerns evolve. While immutability ensures trust, there are patterns that allow for safe contract upgrades.

### Proxy Contract Pattern

One of the most common methods for upgrading smart contracts is using a **proxy contract**. This pattern allows you to deploy a proxy that forwards calls to the logic contract (implementation contract). The key benefit is that the proxy’s address remains the same, while the logic contract can be updated without changing the proxy contract.

- **How it works**: The proxy delegates calls to the current logic contract using the `delegatecall` function, meaning the proxy holds all the state and storage while the logic contract contains the functions and code.
- **Upgrade process**: When an upgrade is needed, you deploy a new logic contract and update the proxy to point to this new contract, allowing for new functionality while maintaining the same state and user data.

**Example Proxy Contract:**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Proxy {
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function upgrade(address _newImplementation) public {
        implementation = _newImplementation;
    }

    fallback() external payable {
        (bool success, ) = implementation.delegatecall(msg.data);
        require(success);
    }
}
```

## A Note on Inspect Checks

To prevent spamming and misuse of the network, the EVM performs the following checks ahead of processing transactions:
- Gas Limit: Ensures the transaction’s gas limit is within acceptable bounds.
- Chain ID: Confirms the transaction is intended for the correct blockchain.
- Sender Verification: Checks the transaction’s sender address and signature.
- Token Balance: Verifies that the sender has sufficient tokens to cover the transaction costs.
- Read-Only Execution: Simulates the transaction in read-only mode to ensure it doesn’t cause any runtime errors. If any transaction causes a panic, the transaction will be rejected outright.

**Note:** if a transaction is rejected in the inspect message step, it will not show up on the block explorer as a failed transaction since the execution didn’t pass concensus.

---

## Conclusion

Deploying a smart contract on the Bitfinity EVM involves several key steps, from writing the contract to deploying it on the network. By following these steps, you can create, deploy, and manage your smart contracts effectively. Whether you’re building decentralized applications, issuing tokens, or creating NFTs, the Bitfinity EVM provides a robust platform for blockchain development.