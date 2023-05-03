---
title: EVM Overview
sidebar_position: 1
---

# EVM Overview

The EVMC EVM is the official EVM for the
Internet Computer ecosystem. _It accomplishes a 1:1 experience with the Ethereum protocol.
Beyond the base scope, the EVM also allows Canisters (smart-contracts) on the IC to register private keys 
to interact natively with the protocol, as if they were users with a private key. 

:::tip
We suggest you interact through the EVM through MetaMask or Hardhat as we provide
an identical experience through our RPC. However, you may also interact with it through the [Internet Computer CLI].

[Internet Computer CLI]: https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent
:::


## Powered by REVM

The EVMC EVM utilises the power of the [REVM] in its current implementation. Additionally,
part of the EVMC Labs team have been made contributors to the project due to the significant
contributions that they have made. 

[REVM]: https://github.com/bluealloy/revm

## Additional Features


### Additional precompiles

In order to provide additional support to the Internet Computer ecosystem, we may in future  create additional precompiles.

More information about these precompiles can be found in the [EVMC EVM precompile documentation].

[EVMC EVM precompile documentation]: ./precompiles.md

### Default ICRC-1 mapped ERC-20 contract

Coming Soon
