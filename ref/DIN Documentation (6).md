# DIN Network Coverage

| Network | Network Description |
| :---- | :---- |
| Arbitrum | Arbitrum is a suite of Ethereum scaling solutions that make it easy to build and use decentralized applications. |
| Avalanche C-Chain | Avalanche is an open-source platform for building decentralized applications in one interoperable, decentralized, and highly scalable ecosystem. Focus on global finance. |
| Base | Created by Coinbase directly connected with the base wallet and focused on NFT launches |
| Bitcoin | Bitcoin: The Backbone of Decentralization |
| Blast | Native earned yield from ETH and stablecoins on the network |
| BNB Smart Chain | The design goal of BSC was to leave the high throughput of BNB Beacon Chain intact while introducing smart contracts into the BNB Chain ecosystem. Being EVM-compatible, other than easy portability, BSC enjoys support of the rich universe of [Ethereum](https://academy.binance.com/en/articles/what-is-ethereum) tools and dApps. Popularity in Asia. |
| Ethereum Holesky testnet | Testnet for Ethereum with 2x more validators than mainnet. Used for testing staking applications. |
| Linea | ZKRollup built on lattice-based cryptotography powered by Consensys |
| Mantle | Focus on modular architecture with optimistic rollups |
| opBNB | Unlock faster transactions, lower costs, and seamless integration with Binance's liquid ecosystem. |
| Optimism | Optimistic rollup focused on roll-up as a service providing services to other new L2 networks |
| Polygon | Sidechain solution that allows for speedy transactions and lower fees. MATIC is the native currency used for staking and fees. There’s a suite of Polygon solutions. |
| Scroll | With zero-knowledge proofs and full EVM compatibility, Scroll makes it easy to build fast, secure, and cost-effective dApps. |
| Solana | Build dapps on Rust that deliver lightning-fast user experiences and scale to millions of transactions with minimal fees. |
| Starknet | Starknet is a permissionless, Validity-Rollup, also known as a zero-knowledge rollup (ZK rollup) for Ethereum. |
| Swellchain | Restaking-powered L2 built on the OP Stack, combining Ethereum’s security, EigenLayer’s pooled security, and Optimism’s proven infrastructure to deliver scalability, decentralization, and innovative DeFi solutions. |
| Unichain | Built by Uniswap Labs. Ultimate Ethereum L2 solution, built to supercharge DeFi with ultra-fast transactions, decentralized security, and seamless cross-chain liquidity. |
| ZKsync Era | ZKsync is a Layer 2 blockchain protocol that eliminates Ethereum's inherent congestion with zero knowledge proofs. Created by Matter Labs team. |

Notion: [DIN Networks Full DB](https://www.notion.so/consensys/448d8ac430334627882958a4944e1ea8?v=6e33f6d68509410faa0f4a30b7957e12)

# **DIN Network Selection Considerations**

DIN has prioritised its addition of new networks mainly based on MetaMask demand. The methods and performance technical requirements are also based on working with MetaMask teams (Swaps, Bridges, Staking, etc) and usage metrics. 

The DIN BD team speaks with Protocols and Foundations to offer B2B deals for gateway and network coverage.

Other considerations:

* Networks requested by Infura growth/custom plans  
* Competitive parity with new network additions  
* Generally Trending Networks (L2s and L1s)  
* New networks with upcoming TGE or Mainnet launches

# **Core Method Requirements**

As of Sept 2024, DIN’s requirements have been established to support MetaMask RPS, volume, and methods.

There are typically 3 important variables for what DIN offers (full nodes, archive, and advanced methods).

* **Full nodes** are needed every-time, but we need to get a finalized list of methods that is covered  
* **Archive** is often requested, but it can impose extra cost to DIN partners. This is then a DIN decision if we believe there is a cost-benefit to including archive. That is interpreted as how important is it to MetaMask, how useful is it to have on Infura for customers, and how much added costs is there  
* **Advanced methods** are less often requests, it is usually **debug**. The analysis is the same as that of archive for if we include it or not.

Most networks require archive and therefore also debug methods for our MetaMask Transactions Simulation team.

In the future, we will add routing logic to the DIN Router where we can send the near-head requests to full nodes rather than the full archive nodes leading to more resilience and nodes in our network of providers.

EVM-Based Networks cover the core Ethereum JSON-RPC methods (full lists in the requirements):

* `eth_call`  
* `eth_blockNumber`  
* `eth_getBlockByHash`  
* `eth_getTransactionByHash`  
* `eth_estimateGas`  
* `eth_gasPrice`

ZK-sync specific Methods

* `zks_estimateFee`  
* `zks_getBlockDetails`  
* `zks_getConfirmedTokens`  
* `zks_getMainContract`  
* `zks_L1BatchDetails`

Trace/Debug Support

* `debug_traceTransaction`  
* `trace_block`  
* `debug_traceCall`

Archive Node Support

* Archival access \- Providers must support access to archive nodes for querying historical blockchain data across all networks

General tests:

* Request Per Second (RPS)  
  * Providers must handle up to X Requests Per Second (RPS) per network. For ZKsync and Scroll, expect higher RPS due to higher dApp transaction volume.  
  * Providers must ensure scalability to accommodate surges in network activity.  
* Volume Coverage  
  * Monthly expected volume: Y million requests.  
  * Providers must offer scalable infrastructure to handle an increasing number of transactions as adoption grows.

For the MetaMask Simulations and TXs team, we have the following requirements:

| simulation\_dependencies.md |
| :---- |
| We should have the following in place to offer the best possible service for simulations. 1\. debug\_traceCall callTracer 2\. debug\_traceCall prestateTracer 3\. eth\_estimateGas with state overrides They have all been available in geth since August 2023\. Any L2 that utilises geth can merge upstream changes.  It enables us to respond to requests within 500ms and is only required for "near head". \# Example Requests \#\# callTracer \`\`\`shell curl \--location 'https://mainnet.infura.io/v3/xxx' \\ \--header 'Content-Type: application/json' \\ \--data ' {     "method": "debug\_traceCall",     "params": \[         {             "from": "0x0a985a957b490f4d05bef05bc7ec556dd8535946",             "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",             "data": "0x095ea7b300000000000000000000000082e0b8cdd80af5930c4452c684e71c861148ec8a0000000000000000000000000000000000000000000000000000000002625a00"         },         "latest",         {             "tracer": "callTracer",             "tracerConfig": {                 "onlyTopCall": false             }         }     \],     "id": 42,     "jsonrpc": "2.0" } ' \`\`\` \#\# prestateTracer \`\`\`shell curl \--location 'https://mainnet.infura.io/v3/xxx' \\ \--header 'Content-Type: application/json' \\ \--data ' {     "method": "debug\_traceCall",     "params": \[         {             "from": "0x12342EBe4B6BAA946345C7b1F8d3Cc2FfB3429Bf",             "to": "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F",             "data": "0x095ea7b3000000000000000000000000881d40237659c251811cec9c364ef91dc08d300c00000000000000000000000000000000000000000000000000000000000f4240"         },         "latest",         {             "tracer": "prestateTracer",             "tracerConfig": {                 "diffMode": true             },             "stateOverrides": {                 "0xfe1B24921E1697f3f7C17CC976c94522609153dA": {                     "balance": "0x100000"                 }             }         }     \],     "id": 42,     "jsonrpc": "2.0" } ' \`\`\` \#\# eth\_estimateGas overrides \`\`\`shell curl \--location 'https://mainnet.infura.io/v3/70789203e75243f984b3e9179fd90424' \\ \--header 'Content-Type: application/json' \\ \--data ' {     "method": "eth\_estimateGas",     "params": \[         {             "from": "0x42EFfDd8372538C58cc07D4E0BeeF9CAFbc31F7E",             "to": "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F",             "data": "0x095ea7b3000000000000000000000000881d40237659c251811cec9c364ef91dc08d300c00000000000000000000000000000000000000000000000000000000000f4240",             "value": "0xaa"         },         "latest",         {             "0x42EFfDd8372538C58cc07D4E0BeeF9CAFbc31F7E": {                 "balance": "0xabc"             }         }     \],     "id": 42,     "jsonrpc": "2.0" } ' \`\`\` |

Other considerations:

* Rate limiting?  
* Enhanced logging?

Note: In order to testing existing methods any provider offers, we use the Chainbench tool: [https://github.com/chainstacklabs/chainbench](https://github.com/chainstacklabs/chainbench) 

Once installed, you can run (Note that \<KEY\> is redacted):

poetry run chainbench discover https://blast-mainnet.infura.io/v3/\<KEY\> \--clients geth

This will output something like:

Please wait, discovering methods available on https://blast-mainnet.infura.io/v3/\<KEY\>  
admin\_addPeer, ✖  
admin\_addTrustedPeer, ✖  
admin\_datadir, ✖  
admin\_exportChain, ✖  
admin\_importChain, ✖  
admin\_nodeInfo, ✖  
admin\_peerEvents, ✖  
admin\_peers, ✖  
admin\_removePeer, ✖  
admin\_removeTrustedPeer, ✖  
admin\_startHTTP, ✖  
admin\_startWS, ✖  
admin\_stopHTTP, ✖  
admin\_stopWS, ✖  
clique\_discard, ✖  
clique\_getSigner, ✖  
clique\_getSigners, ✖  
clique\_getSignersAtHash, ✖  
clique\_getSnapshot, ✖  
clique\_getSnapshotAtHash, ✖  
clique\_proposals, ✖  
clique\_propose, ✖  
clique\_status, ✖  
debug\_accountRange, ✔  
debug\_backtraceAt, ✔  
debug\_blockProfile, ✔  
debug\_chaindbCompact, HTTP Timeout Exception: The read operation timed out  
debug\_chaindbProperty, ✔  
debug\_cpuProfile, ✔  
debug\_dbAncient, ✔  
debug\_dbAncients, ✔  
debug\_dbGet, ✔  
debug\_dumpBlock, ✔  
debug\_freeOSMemory, ✔  
debug\_freezeClient, ✖  
debug\_gcStats, ✔  
debug\_getAccessibleState, ✔  
debug\_getBadBlocks, ✔  
debug\_getModifiedAccountsByHash, ✔  
debug\_getModifiedAccountsByNumber, ✔  
debug\_getRawBlock, ✔  
debug\_getRawHeader, ✔  
debug\_getRawReceipts, ✔  
debug\_getRawTransaction, ✔  
debug\_goTrace, ✔  
debug\_intermediateRoots, ✔  
debug\_memStats, ✔  
debug\_mutexProfile, ✔  
debug\_preimage, ✔  
debug\_printBlock, ✔  
debug\_setBlockProfileRate, ✔  
debug\_setGCPercent, ✔  
debug\_setHead, ✔  
debug\_setMutexProfileFraction, ✔  
debug\_setTrieFlushInterval, ✔  
debug\_stacks, ✔  
debug\_standardTraceBadBlockToFile, ✔  
debug\_standardTraceBlockToFile, ✔  
debug\_startCPUProfile, ✔  
debug\_startGoTrace, ✔  
debug\_stopCPUProfile, Unable to determine. Unknown error \-32000: CPU profiling not in progress  
debug\_stopGoTrace, Unable to determine. Unknown error \-32000: trace not in progress  
debug\_storageRangeAt, ✔  
debug\_traceBadBlock, ✖  
debug\_traceBlock, ✖  
debug\_traceBlockByHash, ✖  
debug\_traceBlockByNumber, ✖  
debug\_traceBlockFromFile, ✖  
debug\_traceCall, ✖  
debug\_traceChain, ✖  
debug\_traceTransaction, ✖  
debug\_verbosity, ✔  
debug\_vmodule, ✔  
debug\_writeBlockProfile, ✔  
debug\_writeMemProfile, ✔  
debug\_writeMutexProfile, ✔  
engine\_exchangeCapabilities, ✖  
engine\_exchangeTransitionConfigurationV1, ✖  
engine\_forkchoiceUpdatedV1, ✖  
engine\_forkchoiceUpdatedV2, ✖  
engine\_forkchoiceUpdatedV3, ✖  
engine\_getPayloadBodiesByHashV1, ✖  
engine\_getPayloadBodiesByRangeV1, ✖  
engine\_getPayloadV1, ✖  
engine\_getPayloadV2, ✖  
engine\_getPayloadV3, ✖  
engine\_newPayloadV1, ✖  
engine\_newPayloadV2, ✖  
engine\_newPayloadV3, ✖  
eth\_accounts, ✔  
eth\_blockNumber, ✔  
eth\_call, ✔  
eth\_chainId, ✔  
eth\_coinbase, Unable to determine. Unknown error \-32000: etherbase must be explicitly specified  
eth\_createAccessList, ✔  
eth\_estimateGas, ✔  
eth\_feeHistory, ✔  
eth\_gasPrice, ✔  
eth\_getBalance, ✔  
eth\_getBlockByHash, ✔  
eth\_getBlockByNumber, ✔  
eth\_getBlockReceipts, ✔  
eth\_getBlockTransactionCountByHash, ✔  
eth\_getBlockTransactionCountByNumber, ✔  
eth\_getCode, ✔  
eth\_getFilterChanges, ✔  
eth\_getFilterLogs, ✔  
eth\_getHeaderByHash, ✔  
eth\_getHeaderByNumber, ✔  
eth\_getLogs, ✔  
eth\_getProof, ✔  
eth\_getStorageAt, ✔  
eth\_getTransactionByBlockHashAndIndex, ✔  
eth\_getTransactionByBlockNumberAndIndex, ✔  
eth\_getTransactionByHash, ✔  
eth\_getTransactionCount, ✔  
eth\_getTransactionReceipt, ✔  
eth\_getUncleCountByBlockHash, ✔  
eth\_getUncleCountByBlockNumber, ✔  
eth\_maxPriorityFeePerGas, ✔  
eth\_newBlockFilter, ✔  
eth\_newFilter, ✔  
eth\_newPendingTransactionFilter, ✔  
eth\_sendRawTransaction, ✔  
eth\_sendTransaction, ✔  
eth\_sign, ✔  
eth\_signTransaction, ✔  
eth\_subscribe, ✖  
eth\_syncing, ✔  
eth\_uninstallFilter, ✔  
eth\_unsubscribe, ✔  
les\_addBalance, ✖  
les\_clientInfo, ✖  
les\_getCheckpoint, ✖  
les\_getCheckpointContractAddress, ✖  
les\_latestCheckpoint, ✖  
les\_priorityClientInfo, ✖  
les\_serverInfo, ✖  
les\_setClientParams, ✖  
les\_setDefaultParams, ✖  
net\_listening, ✔  
net\_peerCount, ✔  
net\_version, ✔  
personal\_deriveAccount, ✖  
personal\_ecRecover, ✖  
personal\_importRawKey, ✖  
personal\_initializeWallet, ✖  
personal\_initializeWallets, ✖  
personal\_listAccounts, ✖  
personal\_listWallets, ✖  
personal\_lockAccount, ✖  
personal\_newAccount, ✖  
personal\_openWallet, ✖  
personal\_sendTransaction, ✖  
personal\_sign, ✖  
personal\_signTransaction, ✖  
personal\_unlockAccount, ✖  
personal\_unpair, ✖  
txpool\_content, ✔  
txpool\_contentFrom, ✔  
txpool\_inspect, ✔  
txpool\_status, ✔  
web3\_clientVersion, ✔  
web3\_sha3, ✔

## DIN Network Covered by Methods on Infura

1. Arbitrum:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_maxpriorityfeepergas  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_syncing  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
2. Avalanche C-Chain:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_maxpriorityfeepergas  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
3. Base:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_maxpriorityfeepergas  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_syncing  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
4. Blast:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getbalancevalues  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_maxpriorityfeepergas  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
5. BNB Smart Chain:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_estimategas  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_maxpriorityfeepergas  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_submitwork  
* eth\_syncing  
* net\_listening  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
6. Celo:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_maxpriorityfeepergas  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_syncing  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
7. Ethereum:  
* eth\_accounts  
* eth\_blobbasefee  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_createaccesslist  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_getwork  
* eth\_hashrate  
* eth\_maxpriorityfeepergas  
* eth\_mining  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* net\_listening  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
8. Linea:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_getwork  
* eth\_hashrate  
* eth\_maxpriorityfeepergas  
* eth\_mining  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* linea\_estimategas  
* net\_listening  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
9. Mantle:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getbalancevalues  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockrange  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_maxpriorityfeepergas  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* net\_peercount  
* net\_version  
* rollup\_gasprices  
* rollup\_getinfo  
* Web3\_clientversion  
10. Optimism:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_maxpriorityfeepergas  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* net\_peercount  
* net\_version  
* Web3\_clientversion  
11. Palm:  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getstorageat  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_maxpriorityfeepergas  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* net\_listening  
* net\_peercount  
* net\_version  
* web3\_clientversion  
12. Polygon PoS:  
* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_createaccesslist  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblockreceipts  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getroothash  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_getwork  
* eth\_hashrate  
* eth\_maxpriorityfeepergas  
* eth\_mining  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_syncing  
* net\_listening  
* net\_peercount  
* net\_version  
* web3\_clientversion

13\. zkSync:

* eth\_accounts  
* eth\_blocknumber  
* eth\_call  
* eth\_chainid  
* eth\_coinbase  
* eth\_estimategas  
* eth\_feehistory  
* eth\_gasprice  
* eth\_getbalance  
* eth\_getblockbyhash  
* eth\_getblockbynumber  
* eth\_getblocktransactioncountbyhash  
* eth\_getblocktransactioncountbynumber  
* eth\_getcode  
* eth\_getlogs  
* eth\_getproof  
* eth\_getstorageat  
* eth\_gettransactionbyblockhashandindex  
* eth\_gettransactionbyblocknumberandindex  
* eth\_gettransactionbyhash  
* eth\_gettransactioncount  
* eth\_gettransactionreceipt  
* eth\_getunclebyblockhashandindex  
* eth\_getunclebyblocknumberandindex  
* eth\_getunclecountbyblockhash  
* eth\_getunclecountbyblocknumber  
* eth\_getwork  
* eth\_hashrate  
* eth\_maxpriorityfeepergas  
* eth\_mining  
* eth\_protocolversion  
* eth\_sendrawtransaction  
* eth\_sendtransaction  
* eth\_sign  
* eth\_submitwork  
* eth\_syncing  
* net\_listening  
* net\_peercount  
* net\_version  
* web3\_clientversion  
* zks\_estimatefee  
* zks\_estimategasl1tol2  
* zks\_getallaccountbalances  
* zks\_getblockdetails  
* zks\_getbridgecontracts  
* zks\_getbytecodebyhash  
* zks\_getl1batchblockrange  
* zks\_getl1batchdetails  
* zks\_getl2tol1logproof  
* zks\_getl2tol1msgproof  
* zks\_getmaincontract  
* zks\_getproof  
* zks\_getrawblocktransactions  
* zks\_gettestnetpaymaster  
* zks\_gettransactiondetails  
* zks\_l1batchnumber  
* zks\_l1chainid