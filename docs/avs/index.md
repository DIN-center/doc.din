---
description: Information about the DIN using EigenLayer's AVS.
---
# DIN as an AVS

DIN uses [EigenLayer's Autonomous Verifiable Service (AVS)](https://docs.eigencloud.xyz/products/eigenlayer/developers/concepts/avs-developer-guide) model to provide economic security, performance
accountability, and transparent governance for its decentralized RPC/API marketplace.

EigenLayer's AVS aligns incentives for node providers, watchers, and gateways to meet clear, measurable service
level agreements (SLAs) and incentivizes consistent performance. It enforces these standards with
staking and real-time slashing, providing reliable, economically secure infrastructure for web3 applications.

:::warning Mainnet Launch - November 14th, 2025
DIN AVS is launching on mainnet soon! Operators must begin onboarding **immediately**
due to a 17-day operator allocation delay. See the
[operator onboarding information](./operator-onboarding/index.md) to get started.
:::

## AVS architecture

The AVS coordinates independent actors, including node providers, watchers, and gateways, so the network
meets measurable SLAs and applies incentives or penalties based on verified performance.

### Economic alignment through staking and slashing

- **Staking requirements** - Each node provider and watcher within DIN must stake tokens through the
    EigenLayer AVS model, creating an economic commitment to their roles.
    This stake acts as collateral, guaranteeing that providers and watchers are financially invested in maintaining network standards.

- **Slashing mechanism** - To enforce compliance, the AVS enables slashing protocols, where staked tokens
    are deducted if operators or watchers fail to meet SLA standards for freshness, validity, or availability.
    By financially penalizing non-compliance, AVS reduces the likelihood of low-quality service and incentivizes participants to uphold their obligations.

See [slashing and rewards](slashing-and-rewards.md) for more information.

### Real-time SLA enforcement

- **Continuous validation** - Watchers serve as AVS operators, continuously monitoring the performance
    of node providers to validate adherence to SLAs.
    They track key metrics—such as response freshness, data validity, and service availability—and report any deviations.
    This real-time validation ensures that any breaches in service quality are quickly detected and addressed.

- **Automated penalties for SLA violations** - The AVS automates the enforcement of penalties for SLA breaches,
    enabling immediate slashing for operators who fail to meet performance standards.
    This process ensures swift accountability without requiring manual intervention, protecting network integrity and user trust.

### Transparent monitoring and reporting

- **Decentralized public ledger** - DIN's AVS integration ensures that performance data, including SLA
    compliance and slashing events, is published on a public ledger.
    This decentralized transparency allows users, DAO members, and other stakeholders to review the historical performance of node providers and watchers, fostering trust and accountability.

- **Performance reputation system** - AVS supports the development of a reputation system within DIN,
    where node providers and watchers build credibility based on their adherence to SLA standards.
    Consistent high performers may gain a higher reputation, making them preferred options for request routing, while poor performers face economic consequences and potential removal.
