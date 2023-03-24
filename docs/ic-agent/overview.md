---
title: "Overview"
---

# Introduction

To use certain EVM canister features, such as `call_message`, `create_contract`, and `withdraw_tokens`, users must register an EVM address for their IC principal. Follow these steps to complete the registration process:

### Generate Ethereum signing key and EVM address
- Users must generate an Ethereum signing key (SIGNING_KEY) and a corresponding EVM address `(USER_ADDRESS)` on their side.

### Deposit tokens
- Users must deposit at least 100,000 tokens `(REGISTRATION_FEE)` to their EVM address using the `deposit_tokens` endpoint.
- Before this step, ensure that there are enough tokens in the deposit account by transferring tokens to the deposit account in the token canister. Use the `token_deposit_account(token_principal)` endpoint from the EVM canister to obtain the deposit account, where `token_principal` is the principal of the associated token canister.

### Create and sign a transaction 
**Users must create a transaction with the following parameters:** 
- To: `0xb0e5863d0ddf7e105e409fee0ecc0123a362e14b (MINTER_ADDRESS)`
- Value: `REGISTRATION_FEE`
- From: `USER_ADDRESS`

Then, sign the transaction with the signing key.

### Call register_ic_agent endpoint
- Users must call the `register_ic_agent` endpoint, passing the signed transaction as a parameter.

### Verify registration 
- After successfully completing step 3 & 4, users should call the `verify_registration` endpoint with the `SIGNING_KEY` as a parameter. 
- After step 3 & 4, other IC canisters will not be able to use the registered address when creating transactions, making it safe to expose the signing key at this point.

In summary, to register an EVM address for an IC principal, users must generate a signing key and EVM address, deposit tokens, create and sign a transaction, call the `register_ic_agent` endpoint with the transaction, and finally, verify the registration using the `verify_registration` endpoint.