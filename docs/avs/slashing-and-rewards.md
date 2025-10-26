---
description: Information about how slashing and rewards work with DIN
---

# Slashing and rewards

The DIN AVS ties incentives to measured performance. Node providers and watchers earn rewards for
meeting service level agreements (SLAs), and face penalties (including slashing) when independent watcher
attestations show sustained violations. This aligns behavior with DIN’s reliability and performance goals.

:::info Operator onboarding
Ready to operate and earn? Start with the [operator onboarding guide](./operator-onboarding/index.md).

DIN AVS is launching on mainnet soon! Operators must begin onboarding immediately due to a 17-day
operator allocation delay.
:::

## Performance-based rewards

- **SLA compliance rewards** - Node providers and watchers who consistently meet or
    exceed SLA standards receive additional token rewards. These rewards, distributed through the
    gateway contract, encourage participants to prioritize performance and reliability.

- **Reputation-linked routing** - Higher SLA scores improve reputation, which can increase traffic
    allocation and earnings.

## Deterrents for underperformance

- **Progressive penalties and slashing** - Repeated or severe SLA violations trigger escalating responses,
    which encourages operators to rectify issues promptly, reducing long-term service disruptions.

- **Suspension or removal** - Chronic non-compliance can result in removal from relevant operator
    sets to protect network quality.

## Slashable events and penalties

### Types of slashing events

The following table identifies the types of slashable events. The recovery time specifies the time
in which to rectify the issue to avoid a repeated offense. TODO: confirm exact meaning of "Recovery time"

| Violation type | First offense | Repeated offense | Recovery time |
|---------------|---------------|------------------|---------------|
| **Downtime** (less than 99.9% uptime) | 0.1% stake | 0.5% stake | 24 hours |
| **High latency** (over 200ms p50) | 0.05% stake | 0.25% stake | 12 hours |
| **Invalid data** | 1% stake | 5% stake | 48 hours |
| **Complete failure** | 2% stake | 10% stake | 72 hours |

### Mitigation strategies

Us the following strategies to reduce SLA violations and minimize slashing risk:

1. **Infrastructure redundancy**: Run multiple nodes per operator set
2. **Monitoring systems**: Track uptime, latency, error rate, and data freshness; alert before breaches.
3. **Gradual scaling**: Start with fewer operator sets and scale upwards
4. **Team coverage**: Maintain runbooks, on-call rotation, and incident drills.

## Reward calculations

### Reward formula

```text
operator rewards = (base rate × request volume × performance score) / total network stake
```

### Factors affecting rewards

1. **Request volume**: Higher traffic = higher rewards
2. **Performance score**: Better service level agreement compliance = bonus multipliers
3. **Stake weight**: Your stake vs. total network stake
4. **Operator set demand**: Popular networks pay more

### Expected returns

::info
Returns are estimates and depend on network growth and demand.
:::

| Scenario | Annual return | Requirements |
|----------|---------------|--------------|
| **Conservative** | 5-8% APY | Basic SLA compliance |
| **Standard** | 8-12% APY | Good performance, multiple sets |
| **Optimized** | 12-18% APY | Excellent performance, high volume |

## Reward distribution

### Payment schedule

- **Frequency**: Monthly distributions
- **Method**: Direct to operator address
- **Currency**: ETH and potentially DIN tokens
- **Timing**: First week of each month

### Tracking your rewards

1. Monitor dashboard at [app.din.build](https://app.din.build)
2. View per-operator-set breakdown
3. Export reports for accounting
4. Track performance metrics

## Veto committee protection

The [Veto Committee](./veto-committee.md) can review and potentially reverse slashing events in cases of:

- Network-wide issues
- Unfair slashing conditions
- Technical failures beyond operator control
- Coordinated attacks on operators

## Getting started

Ready to start earning rewards while avoiding slashing?

1. **Understand requirements**: Review our [Prerequisites](./operator-onboarding/prerequisites.md)
2. **Begin onboarding**: Follow our [Step-by-Step Guide](./operator-onboarding/index.md)
3. **Prepare for mainnet**: Check [Mainnet Preparation](./operator-onboarding/mainnet-preparation.md)
4. **Monitor performance**: Set up robust monitoring systems
