# Slashing and Rewards

The AVS model within DIN provides structured incentives that reward high-performing node providers and watchers while penalizing those who fail to meet expectations.
This incentive structure ensures the network's sustainability and aligns participant behavior with DIN's quality standards.

:::info Operator Onboarding
If you're ready to become a DIN operator and start earning rewards, see our comprehensive
[Operator Onboarding Guide](./operator-onboarding/index.md).
Note the urgent timeline for mainnet launch on November 14th, 2025.
:::

## Performance-based rewards

- **Additional rewards for SLA compliance** - Node providers and watchers who consistently meet or exceed SLA standards receive additional token rewards.
  These rewards, distributed through the gateway contract, encourage participants to prioritize performance and reliability.

- **Reputation-linked incentives** - As AVS supports a reputation system, operators with high SLA compliance scores
  can attract more request routing, maximizing their earning potential while reinforcing a culture of quality service.

## Deterrents for underperformance

- **Incremental slashing for repeated violations** - AVS implements a tiered slashing system, where penalties increase in severity for operators with repeated SLA violations.
  This graduated approach encourages operators to rectify issues promptly, reducing long-term service disruptions.

- **Suspension and removal for persistent non-compliance** - Node providers with chronic performance issues face
  suspension or removal from the network, ensuring that DIN maintains only reliable and committed participants.

## Practical Slashing Scenarios

### Types of Slashing Events

| Violation Type | First Offense | Repeated Offense | Recovery Time |
|---------------|---------------|------------------|---------------|
| **Downtime** (less than 99.9% uptime) | 0.1% stake | 0.5% stake | 24 hours |
| **High Latency** (over 200ms p50) | 0.05% stake | 0.25% stake | 12 hours |
| **Invalid Data** | 1% stake | 5% stake | 48 hours |
| **Complete Failure** | 2% stake | 10% stake | 72 hours |

### Mitigation Strategies

1. **Infrastructure Redundancy**: Multiple nodes per operator set
2. **Monitoring Systems**: Real-time alerting for issues
3. **Gradual Scaling**: Start with fewer operator sets
4. **Team Coverage**: 24/7 operational support

## Reward Calculations

### Reward Formula

```text
Operator Rewards = (Base Rate × Request Volume × Performance Score) / Total Network Stake
```

### Factors Affecting Rewards

1. **Request Volume**: Higher traffic = higher rewards
2. **Performance Score**: Better service level agreement compliance = bonus multipliers
3. **Stake Weight**: Your stake vs. total network stake
4. **Operator Set Demand**: Popular networks pay more

### Expected Returns

| Scenario | Annual Return | Requirements |
|----------|---------------|--------------|
| **Conservative** | 5-8% APY | Basic SLA compliance |
| **Standard** | 8-12% APY | Good performance, multiple sets |
| **Optimized** | 12-18% APY | Excellent performance, high volume |

*Note: Returns are estimates and depend on network growth and demand.*

## Reward Distribution

### Payment Schedule

- **Frequency**: Monthly distributions
- **Method**: Direct to operator address
- **Currency**: ETH and potentially DIN tokens
- **Timing**: First week of each month

### Tracking Your Rewards

1. Monitor dashboard at [app.din.build](https://app.din.build)
2. View per-operator-set breakdown
3. Export reports for accounting
4. Track performance metrics

## Veto Committee Protection

The [Veto Committee](./veto-committee.md) can review and potentially reverse slashing events in cases of:

- Network-wide issues
- Unfair slashing conditions
- Technical failures beyond operator control
- Coordinated attacks on operators

## Getting Started

Ready to start earning rewards while avoiding slashing?

1. **Understand Requirements**: Review our [Prerequisites](./operator-onboarding/prerequisites.md)
2. **Begin Onboarding**: Follow our [Step-by-Step Guide](./operator-onboarding/index.md)
3. **Prepare for Mainnet**: Check [Mainnet Preparation](./operator-onboarding/mainnet-preparation.md)
4. **Monitor Performance**: Set up robust monitoring systems

---

*Remember: Good performance leads to rewards, poor performance leads to slashing. Prepare thoroughly before joining the network.*
