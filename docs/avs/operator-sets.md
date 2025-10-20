# Operator Sets

EigenLayer operator sets have been discussed and designed at length to create more granular roles and permissions for EigenLayer operators and AVS design.
For DIN as an AVS, this would mean the node providers would be able to join EigenLayer restaking and specifically be identified for watchers to stake or slash.
Each operator set will need to represent a specific service—for example, the watcher service or specific blockchain networks.

![DIN operator sets](/img/operator-sets.png)

## Understanding Operator Sets

Operator sets in DIN represent different blockchain networks that operators can serve. Each set has its own:
- Staking requirements
- Performance metrics
- Slashing conditions
- Infrastructure requirements

## Available Operator Sets

DIN currently supports the following blockchain networks through operator sets:

| Set ID | Network Name |
|--------|-------------|
| 2 | ethereum |
| 3 | ethereum-holesky |
| 4 | blast-mainnet |
| 5 | blast-testnet |
| 6 | polygon |
| 7 | polygon-testnet |
| 8 | optimism-mainnet |
| 9 | optimism-sepolia |
| 10 | arbitrum-mainnet |
| 11 | arbitrum-mainnet-archive |
| 12 | arbitrum-sepolia-archive |
| 13 | avalanche-mainnet |
| 14 | mantle-mainnet |
| 15 | mantle-sepolia |
| 16 | zksync-mainnet |
| 17 | zksync-sepolia |
| 18 | bsc-mainnet |
| 19 | bsc-testnet |
| 20 | starknet-mainnet |
| 21 | starknet-sepolia |
| 22 | opbnb-mainnet |
| 23 | opbnb-testnet |
| 24 | base-mainnet |
| 25 | base-sepolia |
| 26 | scroll-mainnet |
| 27 | scroll-sepolia |
| 28 | solana-mainnet |
| 29 | solana-devnet |
| 30 | unichain-mainnet |
| 31 | unichain-sepolia |
| 32 | swellchain-mainnet |
| 33 | swellchain-testnet |
| 34 | sei-mainnet |
| 35 | sei-mainnet-archive |
| 36 | Hoodi |

*Check [app.din.build](https://app.din.build) for the most up-to-date list and requirements.*

## Joining Operator Sets

Operators select which sets to join during onboarding:

1. **Assess Capabilities**: Evaluate your infrastructure for each network
2. **Review Requirements**: Check minimum stake and performance standards
3. **Select Sets**: Choose networks you can reliably support
4. **Allocate Stake**: Distribute your stake across selected sets
5. **Configure Infrastructure**: Set up nodes for each network

For detailed instructions, see our [Operator Onboarding Guide](./operator-onboarding/index.md).

## Stake Allocation Strategies

When joining operator sets, you'll allocate your stake across different strategies:

### Available Strategies
- **stETH** (Lido Staked ETH): Earns staking rewards
- **WETH** (Wrapped ETH): Provides liquidity flexibility
- **cbETH** (Coinbase Staked ETH): Alternative staking option (mainnet)
- **rETH** (Rocket Pool ETH): Decentralized staking (mainnet)

### Allocation Examples

**Conservative Approach (Focus on Yield)**
- 75% stETH
- 25% WETH

**Balanced Approach**
- 50% stETH
- 50% WETH

**Flexible Approach (Focus on Liquidity)**
- 25% stETH
- 75% WETH

## Performance Requirements

Each operator set has specific SLA requirements:

### General Standards
- **Uptime**: Greater than 99.9%
- **Response Time**: Less than 100ms p50
- **Availability**: 24/7
- **Data Freshness**: Real-time

### Network-Specific Requirements
Different networks may have additional requirements:
- **Ethereum**: Archive node access
- **L2s**: Sequencer connectivity
- **Alt-L1s**: Native token holdings

## Rewards Distribution

Rewards are calculated per operator set based on:
1. **Request Volume**: Number of RPC requests served
2. **Performance Metrics**: SLA compliance
3. **Stake Weight**: Your stake relative to total
4. **Network Demand**: Overall usage of the network

## Slashing Conditions

Each operator set can have specific slashing conditions:
- **Downtime**: Extended unavailability
- **Latency**: Consistent slow responses
- **Invalid Data**: Serving incorrect information
- **Liveness**: Failure to respond

See [Slashing and Rewards](./slashing-and-rewards.md) for detailed information.

## Managing Multiple Sets

### Best Practices
1. **Start Small**: Begin with 1-2 sets you know well
2. **Monitor Performance**: Ensure SLAs before adding more
3. **Scale Gradually**: Add sets as infrastructure allows
4. **Maintain Balance**: Don't overextend resources

### Infrastructure Considerations
- **Dedicated Nodes**: Run separate nodes per network
- **Monitoring**: Track each set independently
- **Redundancy**: Backup systems per network
- **Team Expertise**: Ensure knowledge for each chain

## Future Developments

### Upcoming Features
- Dynamic stake reallocation
- Cross-set performance bonuses
- Set-specific governance rights
- Advanced slashing parameters

### Planned Operator Sets
- Additional L2 solutions
- Cosmos ecosystem chains
- Solana and other alt-L1s
- Application-specific chains

## Getting Started

Ready to join operator sets? Follow these steps:

1. **Review Requirements**: Check our [Prerequisites](./operator-onboarding/prerequisites.md)
2. **Begin Onboarding**: Start with [Step 1: Register](./operator-onboarding/step-1-register-operator.md)
3. **Select Sets**: Choose during the allowlisting process
4. **Allocate Stake**: Configure in [Step 2](./operator-onboarding/step-2-stake-tokens.md)

---

*For the latest operator set information and requirements, visit [app.din.build](https://app.din.build)*
