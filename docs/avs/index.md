# DIN as an AVS

DIN leverages [EigenLayer](https://app.eigenlayer.xyz/)'s AVS model to establish a robust framework
of economic security, performance accountability, and dynamic governance.
By implementing DIN as an AVS, the network aligns incentives among node providers, watchers,
and other participants, ensuring high standards of service quality, resilience, and transparency
across all operations.

Through AVS, DIN enforces rigorous standards for service level agreements,
incentivizes consistent performance, and incorporates real-time slashing and staking mechanisms,
providing a reliable and economically secure infrastructure for Web3 applications.

:::warning Mainnet Launch - November 14th, 2025
DIN AVS is launching on mainnet soon! Operators must begin onboarding **immediately** due to the
17-day allocation delay period. See our [Operator Onboarding Guide](./operator-onboarding/index.md)
to get started.
:::

## Role of AVS in DIN

Throughout 2024, DIN has operated in the federated model with Consensys as a core intermediary
for business development, operational testing, network onboarding, and payments distribution.
A subset of the Infura team that represents DIN has been building these components and collaborating with the 50+ signed DIN providers to test a decentralized RPC/API marketplace model.

The web3 infrastructure business is profitable in the short term, but in the long term becomes a commodity.
The DIN team looked for a sustainable upkeep and network access of Infura (centralized SaaS business) and MetaMask (wallet) to the trending growth of L2s and new blockchain protocols.
In 2024, we've launched 14 networks on DIN and Infura with 100M+ daily requests processed through the DIN Router.

As DIN moves from the federated model towards permissionless open API marketplace, we've been strategic on our architecture and mechanism design incentives.
To align our Token Generation Event (TGE) with the Linea Association ($LINEA announced at Devcon 2024), we've worked on unique implementations that can be constructive to our GTM.

## DIN as an AVS architecture

The EigenLayer AVS implementation is designed as a DIN watcher application that helps onboard DIN identities, DIN provider nodes, and adds SLAs to running each network within the DIN ecosystem.
The available economic security in collaboration with the broader blockchain development ecosystem
includes security measures with staking, jailing, and slashing conditions—all without the risk
of immediately launching a floating token.

The AVS components act as the third-party decentralized set of explorers that allow for the eventual decentralization of the roles played by Consensys.

## Economic alignment through staking and slashing

- **Staking requirements** - Each node provider and watcher within DIN must stake tokens through the EigenLayer AVS model, creating an economic commitment to their roles.
  This stake acts as collateral, guaranteeing that providers and watchers are financially invested in maintaining network standards.

- **Slashing mechanism** - To enforce compliance, AVS enables slashing protocols, where staked tokens are deducted if operators or watchers fail to meet SLA standards for freshness, validity, or availability.
  By financially penalizing non-compliance, AVS reduces the likelihood of low-quality service and incentivizes participants to uphold their obligations.

See [slashing and rewards](slashing-and-rewards.md) for more information.

## Real-time SLA enforcement

- **Continuous validation** - Watchers serve as AVS operators, continuously monitoring the performance of node providers to validate adherence to SLAs.
  They track key metrics—such as response freshness, data validity, and service availability—and report any deviations.
  This real-time validation ensures that any breaches in service quality are quickly detected and addressed.

- **Automated penalties for SLA violations** - AVS automates the enforcement of penalties for SLA breaches, enabling immediate slashing for operators who fail to meet performance standards.
  This process ensures swift accountability without requiring manual intervention, protecting network integrity and user trust.

## Transparent monitoring and reporting

- **Decentralized public ledger** - DIN's AVS integration ensures that performance data, including SLA compliance and slashing events, is published on a public ledger.
  This decentralized transparency allows users, DAO members, and other stakeholders to review the historical performance of node providers and watchers, fostering trust and accountability.

- **Performance reputation system** - AVS supports the development of a reputation system within DIN, where node providers and watchers build credibility based on their adherence to SLA standards.
  Consistent high performers may gain a higher reputation, making them preferred options for request routing, while poor performers face economic consequences and potential removal.
