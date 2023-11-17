---
title: "Overview"
---

# Introduction

IC Agents can reserve an Ethereum address for an IC principal/IC Agent. This address can be used to send transactions to the EVM. If a transaction is sent from a reserved address by a non-IC Agent, the transaction will be rejected.

## Registering an EVM address

This section provides a step-by-step guide to registering an EVM address for an IC principal. It consists of two parts:

- Sending a transaction to the EVM canister
- Reserving an EVM address

### Sending a transaction to the EVM canister

To send a transaction to the EVM canister, users must first create a transaction and sign it with their signing key. The transaction must have the following parameters:

- To: `USER_ADDRESS`
- Value: `0`
- From: `USER_ADDRESS`
- Data: The IC Agent's principal in bytes

The transaction must be signed with the signing key. Once signed, the transaction can be sent to the EVM canister using the `send_raw_transaction` endpoint. The caller must have sufficient tokens in their account to cover the transaction fee.

This endpoint returns the transaction hash, which is required to verify the registration and reserve an EVM address.

### Reserving an EVM address

To reserve an EVM address, users must call the `reserve_address` endpoint with the following parameters:

- Principal: The IC Agent's principal
- Transaction hash: The transaction hash returned by the `send_raw_transaction` endpoint

If the transaction hash is valid, the EVM canister will reserve the address. The reserved address can then be used to send transactions to the EVM canister, but it will only be reserved for the IC Agent's principal.
