---
title: EVM Overview
sidebar_position: 1
---

# EVM Overview

The EVMC EVM is the official EVM for the
Internet Computer ecosystem. _It accomplishes a 1:1 experience with the Ethereum protocol
including adopting ETH as the base currency_. Beyond the base scope, the EVM also allows
for extra precompiles. Such precompiles enable the EVM to interact with the rest of the Internet Computer ecosystem.

:::tip
We suggest you interact through the EVM through MetaMask or Hardhat as we provide
an identical experience through our RPC. However, you may also interact with it through the [Internet Computer CLI].

[Internet Computer CLI]: https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent
:::

:::caution
Since the underlying measure of computational work is _Internet Computer cycles_, an edge case that arises is when
the transaction runs out of Internet Computer cycles before running out of _EVM gas_.

_In this case the transaction will be considered as failed on EVMC_, but this may or may not be
compatible with what the outcome on Ethereum would have been (if the gas limit was actually high
enough for the transaction to complete had Internet Computer cycles not been the limiting factor).

This case will not come up for the vast majority of transactions, and indeed will become
less likely as we improve the efficiency of our EVM contract (thus allowing Internet Computer gas to go further
in terms of EVM computation). Eventually, we hope to eliminate this entirely by setting
the [ETH block gas limit] on EVMC to be lower than the amount of Internet Computer which we could spend in one
transaction.

[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
:::

## Powered by REVM

The EVMC EVM utilises the power of the [REVM] in its current implementation. Additionally,
part of the EVMC Labs team have been made contributors to the project due to the significant
contributions that they have made. However, we intend to explore other implementations and possibly
develop our own backend depending on performance considerations.

[REVM]: https://github.com/bluealloy/revm

## Additional Features

### Changes to the output of some Opcodes

Some of the Opcodes provided by Ethereum we are not able to entirely support. Though we do not
believe that this will impact EVM contracts that use these Opcodes, it is important to note these
changes which can be found in the [EVMC EVM opcode documentation].

[EVMC EVM opcode documentation]: ./opcodes.md

### Additional precompiles

In order to provide additional support to the Internet Computer ecosystem, some additional precompiles are
available.

More information about these precompiles can be found in the [EVMC EVM precompile documentation].

[EVMC EVM precompile documentation]: ./precompiles.md

### Default ICRC-1 mapped ERC-20 contract

Coming Soon
