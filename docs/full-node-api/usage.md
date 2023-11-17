---
title: "Usage"
---


To run the archiver use CLI command:
```bash
evm-archiver [OPTIONS]
```

### CLI options

- `--logger-filter <LOGGER_FILTER>`

Sets the logger `EnvFilter`. Valid values: `trace`, `debug`, `info`, `warn`, `error`. Example of a valid filter: `warn,my_crate=info,my_crate::my_mod=debug,[my_span]=trace`. Default: `info`.

- `--server-port <SERVER_PORT>`

The port that serves the tool API.
This port may be used to perform read-only [Ethereum JSON-RPC requests](#api-calls) to the archiver.
Default: 8080.

- `--remote-rpc-url <REMOTE_RPC_URL>`

URL of the remote Ethereum JSON RPC server which will be used to import blocks from.
Default: http://127.0.0.1:8545

- `--request-delay <REQUEST_DELAY>`

Delay in seconds between consequent requests in case of retry, no data, etc.
Default: 10

- `--max-batch-size <MAX_BATCH_SIZE>`

Max number of requests in a single JSON RPC batch.
Default: 25

- `--retry-count <RETRY_COUNT>`

Number of retries for operations that may fail before exiting [default: 10].
Default: 10

- `--storage-directory <STORAGE_DIRECTORY>`

Directory where main storage files are kept. These files represent current EVM state and blockchain history snapshot.
The "memory-mapped files" mechanism used to achieve persistent storage in combination with fast access to data.
Default: storage_data

- `--backup-directory <BACKUP_DIRECTORY>`

Path to the directory where to put backups.
This directory stores copies of `storage-directory` for a certain block.
Default: ./

- `--backup-job-cron <BACKUP_JOB_CRON>`

Backup job cron schedule. 
This job executes at the given time and stores copy of the current state to the backup directory.
The backup can be used to revert state of the archiver to a previous block. 
To do it, user should replace content of the storage directory with backup for the desired block.
The default value is "0 0 2 * * *" (every day at 2:00am).

- `--block-synchronization-job-interval-seconds 
<BLOCK_SYNCHRONIZATION_JOB_INTERVAL_SECONDS>`
Block synchronization job interval schedule.
The block synchronization job querying new blocks from the remote Ethereum JSON-RPC URL and adds them to the archiver state.
Default: 60

### Example

This command will run the application with default settings.
The archiver will synchronize blocks every minute, keep the latest state in the `evm-archiver-storage` and save backups to the `target/evm-archiver-backup` directory.

#### Requirements:

- The `evm-archiver` binary should have permission for execution.
- The storage and backup directories should exist and allow writing.

Example command to run a `evm-archiver` instance:

```bash
evm-archiver \
    --remote-rpc-url http://127.0.0.1:8545 \
    --storage-directory target/evm-archiver-storage \
    --backup-directory target/evm-archiver-backup
```

### API calls

The running `evm-archiver` provides `http://<IP_ADDR>:8080/rpc` endpoint, which accepts [Ethereum JSON-RPC](https://ethereum.org/en/developers/docs/apis/json-rpc/) calls. 

#### eth_getChainId

On request:

```bash
curl -X POST \
    -H "Content-Type: application/json" \
    --data \
    '{
        "jsonrpc": "2.0",
        "method": "eth_chainId",
        "params": [],
        "id":1
    }' \
    'http://localhost:8080/rpc'
```

the `evm-archiver` will reply like:

```json
{
    "jsonrpc": "2.0",
    "result": "0x56b29",
    "id": 1
}
```

#### eth_getBlockByNumber

On request:

```bash
curl -X POST \
    -H "Content-Type: application/json" \
    --data \
    '{
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": ["0x1", false],
        "id":1
    }' \
    'http://localhost:8080/rpc'
```

the `evm-archiver` will return block#1 data:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "baseFeePerGas": "0x3b9aca00",
    "difficulty": "0x0",
    "extraData": "0x",
    "gasLimit": "0x1c9c380",
    "gasUsed": "0x2f0a12",
    "hash": "0x196420485bbe1959ab6a7e534521b14d956a42283e365141dee3b0aee64a31e4",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0x0000000000000000000000000000000000000000",
    "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000000",
    "number": "0x1",
    "parentHash": "0x89a20ee01a71622f5e1d1765d85a69476fc288fc7889408691b30ce1d055789f",
    "receiptsRoot": "0x95f6ed8a055e8d6648d5ff73cbc62af5a01c08e411d3d46c885a456369b9bf1c",
    "sealFields": [],
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x756e",
    "stateRoot": "0x152eb962d679aa12de5b88f37d466df5eb02165d434c54fb0a00a5857cbeb23e",
    "timestamp": "0x654c973e",
    "totalDifficulty": "0x0",
    "transactions": [
      "0x6280dca15626aaea263e44544586525c6ec5243c40950c0663d7e1216c7c95dd"
    ],
    "transactionsRoot": "0xc515e57fa66759b575ef4a651a5e8246148e1fc15f94126ec4a0b02836f108fa",
    "uncles": []
  },
  "id": 1
}
```

#### eth_getTransactionByHash

On request:

```bash
curl -X POST \
    -H "Content-Type: application/json" \
    --data \
    '{
        "jsonrpc": "2.0",
        "method": "eth_getTransactionByHash",
        "params": ["0x6280dca15626aaea263e44544586525c6ec5243c40950c0663d7e1216c7c95dd"],
        "id":1
    }' \
    'http://localhost:8080/rpc'
```

the `evm-archiver` will reply like:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHash": "0x196420485bbe1959ab6a7e534521b14d956a42283e365141dee3b0aee64a31e4",
    "blockNumber": "0x1",
    "chainId": "0x56b29",
    "from": "0x2bc455fe0447fb07976a943a8eb8d63e66cc6e39",
    "gas": "0x3567e0",
    "gasPrice": "0x3b9aca00",
    "hash": "0x6280dca15626aaea263e44544586525c6ec5243c40950c0663d7e1216c7c95dd",
    "input": "<binary tx input here>",
    "nonce": "0x0",
    "r": "0xab1413f1d19ec35a43fcf04343c3072033850712f2f105c78c69b0f3b7d7590c",
    "s": "0x3b8ae0e7d3a6ce571c23399506bf07adbdbfc51f1eb42575eacddd97f2a7117b",
    "to": null,
    "transactionIndex": "0x0",
    "v": "0xad675",
    "value": "0x0"
  },
  "id": 1
}
```