---
title: "JSON-RPC"
---

# Compatibility with the Web3 JSON-RPC Protocol

The EVMC Relayer implements the Web3 JSON-RPC protocol.

## Methods

<div class="compat-json-rpc-table"></div>

Method | Status | Notes
------ | ------ | -----
[web3_clientVersion] | ✅ |
[web3_sha3] | ✅ |
[net_listening] | ✅ |
[net_peerCount] | ✅ |
[net_version] | ✅ |
[eth_accounts] | ✅ |
[eth_blockNumber] | ✅ |
[eth_call] | ✅ |
[eth_chainId] | ✅ |
[eth_coinbase] | ✅ |
[eth_compileLLL] | ❌ | Unsupported
[eth_compileSerpent] | ❌ | Unsupported
[eth_compileSolidity] | ❌ | Unsupported
[eth_estimateGas] | ✅ |
[eth_gasPrice] | ✅ |
[eth_getBalance] | ✅ |
[eth_getBlockByHash] | ✅ |
[eth_getBlockByNumber] | ✅ |
[eth_getBlockTransactionCountByHash] | ✅ |
[eth_getBlockTransactionCountByNumber] | ✅ |
[eth_getCode] | ✅ |
[eth_getCompilers] | ❌ | Unsupported
[eth_getFilterChanges] | ❌ | Unsupported
[eth_getFilterLogs] | ❌ | Unsupported
[eth_getLogs] | ✅ |
[eth_getProof] | ❌ | EIP-1186
[eth_getStorageAt] | ✅ |
[eth_getTransactionByBlockHashAndIndex] | ✅ |
[eth_getTransactionByBlockNumberAndIndex] | ✅ |
[eth_getTransactionByHash] | ✅ |
[eth_getTransactionCount] | ✅ |
[eth_getTransactionReceipt] | ✅ |
[eth_getUncleByBlockHashAndIndex] | ✅ |
[eth_getUncleByBlockNumberAndIndex] | ✅ |
[eth_getUncleCountByBlockHash] | ✅ |
[eth_getUncleCountByBlockNumber] | ✅ |
[eth_getWork] | ❌ | Unsupported
[eth_hashrate] | ✅ |
[eth_mining] | ✅ |
[eth_newBlockFilter] | ❌ | Unsupported
[eth_newFilter] | ❌ | Unsupported
[eth_newPendingTransactionFilter] | ❌ | Unsupported
[eth_pendingTransactions] | ❌ | [Undocumented](https://github.com/ethereum/go-ethereum/issues/1648#issuecomment-130591933)
[eth_protocolVersion] | ✅ |
[eth_sendRawTransaction] | ✅ |
[eth_sendTransaction] | ❌ | Unsupported
[eth_sign] | ❌ | Unsupported
[eth_signTransaction] | ❌ | Unsupported
[eth_signTypedData] | ❌ | Unsupported
[eth_submitHashrate] | ❌ | Unsupported
[eth_submitWork] | ❌ | Unsupported
[eth_syncing] | ✅ |
[eth_uninstallFilter] | ✅ |
[db_getHex] | ❌ | Deprecated
[db_getString] | ❌ | Deprecated
[db_putHex] | ❌ | Deprecated
[db_putString] | ❌ | Deprecated
[shh_addToGroup] | ❌ | Discontinued
[shh_getFilterChanges] | ❌ | Discontinued
[shh_getMessages] | ❌ | Discontinued
[shh_hasIdentity] | ❌ | Discontinued
[shh_newFilter] | ❌ | Discontinued
[shh_newGroup] | ❌ | Discontinued
[shh_newIdentity] | ❌ | Discontinued
[shh_post] | ❌ | Discontinued
[shh_uninstallFilter] | ❌ | Discontinued
[shh_version] | ❌ | Discontinued | Unsupported
[txpool_content] | ❌ | Unsupported
[txpool_inspect] | ❌ | Unsupported
[txpool_status] | ❌ | Unsupported
[parity_pendingTransactions] | ❌ | Unsupported

**Legend**: ❌ = not supported. 🚧 = work in progress. ✅ = supported.

## Limitations

- The `eth_getProof` method ([EIP-1186]) is not supported and is unlikely to be
  possible to implement.

## Notes

- For now, the `eth_estimateGas` method returns a fixed value (6,721,975,
  matching Truffle's default gas limit).

- Ethereum is a proof-of-work (PoW) network, and Internet Computer is a proof-of-stake (PoS)
  network.
  Therefore with EVMC all mining-related methods such as `eth_getWork`,
  `eth_submitHashrate`, and `eth_submitWork` are not supported and return
  an error code.
  Additionally, PoW-related block metadata such as `nonce` and `difficulty`
  contain all zeroes.

- There is no concept of uncle (aka ommer) blocks in the Bitfinity

- There is no access to pending transactions.

- The nonstandard Geth tracing APIs are not supported at present.

- The nonstandard Parity tracing APIs are not supported at present.

## Source Code

[web3_clientVersion]: https://ethereum.org/en/developers/docs/apis/json-rpc/#web3_clientversion
[web3_sha3]: https://ethereum.org/en/developers/docs/apis/json-rpc/#web3_sha3
[net_listening]: https://ethereum.org/en/developers/docs/apis/json-rpc/#net_listening
[net_peerCount]: https://ethereum.org/en/developers/docs/apis/json-rpc/#net_peercount
[net_version]: https://ethereum.org/en/developers/docs/apis/json-rpc/#net_version
[eth_accounts]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts
[eth_blockNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber
[eth_call]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call
[eth_chainId]: https://eips.ethereum.org/EIPS/eip-695
[eth_coinbase]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_coinbase
[eth_compileLLL]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_compilelll
[eth_compileSerpent]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_compileserpent
[eth_compileSolidity]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_compile_solidity
[eth_estimateGas]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas
[eth_gasPrice]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice
[eth_getBalance]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance
[eth_getBlockByHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash
[eth_getBlockByNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber
[eth_getBlockTransactionCountByHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash
[eth_getBlockTransactionCountByNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber
[eth_getCode]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode
[eth_getCompilers]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcompilers
[eth_getFilterChanges]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges
[eth_getFilterLogs]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs
[eth_getLogs]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs
[eth_getProof]: https://eips.ethereum.org/EIPS/eip-1186
[eth_getStorageAt]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat
[eth_getTransactionByBlockHashAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblockhashandindex
[eth_getTransactionByBlockNumberAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblocknumberandindex
[eth_getTransactionByHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyhash
[eth_getTransactionCount]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount
[eth_getTransactionReceipt]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionreceipt
[eth_getUncleByBlockHashAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclebyblockhashandindex
[eth_getUncleByBlockNumberAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclebyblocknumberandindex
[eth_getUncleCountByBlockHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblockhash
[eth_getUncleCountByBlockNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblocknumber
[eth_getWork]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getwork
[eth_hashrate]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_hashrate
[eth_mining]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_mining
[eth_newBlockFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newblockfilter
[eth_newFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter
[eth_newPendingTransactionFilter]: https://openethereum.github.io/JSONRPC-eth-module.html#eth_newpendingtransactionfilter
[eth_pendingTransactions]: https://github.com/ethereum/wiki/issues/685
[eth_protocolVersion]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_protocolversion
[eth_sendRawTransaction]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction
[eth_sendTransaction]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction
[eth_sign]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign
[eth_signTransaction]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction
[eth_signTypedData]: https://eips.ethereum.org/EIPS/eip-712
[eth_submitHashrate]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_submithashrate
[eth_submitWork]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_submitwork
[eth_syncing]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_syncing
[eth_uninstallFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallfilter
[db_getHex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#db_gethex
[db_getString]: https://ethereum.org/en/developers/docs/apis/json-rpc/#db_getstring
[db_putHex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#db_puthex
[db_putString]: https://ethereum.org/en/developers/docs/apis/json-rpc/#db_putstring
[shh_addToGroup]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_addtogroup
[shh_getFilterChanges]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_getfilterchanges
[shh_getMessages]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_getmessages
[shh_hasIdentity]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_hasidentity
[shh_newFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_newfilter
[shh_newGroup]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_newgroup
[shh_newIdentity]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_newidentity
[shh_post]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_post
[shh_uninstallFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_uninstallfilter
[shh_version]: https://ethereum.org/en/developers/docs/apis/json-rpc/#shh_post
[txpool_content]: https://geth.ethereum.org/docs/rpc/ns-txpool#txpool_content
[txpool_inspect]: https://geth.ethereum.org/docs/rpc/ns-txpool#txpool_inspect
[txpool_status]: https://geth.ethereum.org/docs/rpc/ns-txpool#txpool_status
[parity_pendingTransactions]: https://openethereum.github.io/JSONRPC-parity-module#parity_pendingtransactions

[EIP-1186]: https://eips.ethereum.org/EIPS/eip-1186
