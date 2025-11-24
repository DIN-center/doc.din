# Roadmap

DIN progresses through a structured roadmap that enhances its decentralization, scalability, and governance capabilities.
This roadmap divides into key phases, each building on the last to ensure a robust and resilient network.

| Phase | Status | Milestones | Description |
| ----- | ------ | ---------- | ----------- |
| Federated phase | Completed (2024) | Joining DIN, processing transactions | Alpha customers (Infura, MetaMask) route API traffic and seed developer calls; providers meet performance thresholds and handle transactions, with payments managed through traditional invoicing. |
| Progressive decentralization | In progress (2024-2025) | DIN as an AVS (launched November 17, 2025), decentralized transaction processing, DIN Payments Layer 3 (planned), DIN Foundation and DAO (planned), incentivized testnet (completed) | Integration of economic security and staking/slashing through DIN as an AVS; providers gain routing flexibility beyond Infura; payments will move to Layer 3 onchain protocol; DIN Foundation will oversee shared services and governance will transition to DAO-driven decision-making. |
| Full decentralization | Planned (2025-2026) | Permissionless onboarding, advanced payments, and DAO-managed innovation fund | DIN becomes fully permissionless, enabling automated service level agreement enforcement, dynamic pricing, cross-protocol staking, and DAO-led growth initiatives, establishing DIN as a decentralized, community-driven infrastructure for web3. |

## Federated phase

The federated phase is the foundational stage of DIN, where the network's initial components were deployed, tested, and refined in a controlled environment with trusted alpha customers.
This phase focused on establishing DIN's basic operational capabilities, ensuring service reliability, and verifying economic viability before fully opening the network.

### Joining DIN

- **Acceptance criteria and minimum performance thresholds** - During this phase,
  DIN implemented strict entry requirements for node providers and watchers,
  ensuring that each participant met predefined performance standards.
  Providers demonstrated compliance with service-level agreements covering metrics
  such as response freshness, data validity, and uptime.

- **Assigned identities for DIN routing** - Each participant was assigned a unique identity, enabling seamless routing of developer API requests to the appropriate node providers.
  This identity management system laid the groundwork for effective transaction processing and tracking, setting clear accountability for each operator within the network.

### Processing transactions for DIN

- **Transaction routing from alpha customers** - Infura and MetaMask generated developer API traffic, which was routed through DIN provider nodes.
  This federated setup enabled DIN to validate its routing efficiency, latency benchmarks, and load-balancing algorithms under real-world conditions.

- **Traditional invoicing and payment validation** - In this phase,
  payments from alpha customers to node providers were handled through traditional invoicing,
  allowing DIN to test and refine its financial tracking and reward distribution processes.
  This traditional invoicing approach provided DIN with critical insights into payment workflows,
  helping to prepare the network for decentralized, onchain payment models in later phases.

## Progressive decentralization

DIN launched its mainnet AVS on November 17, 2025, transitioning from its federated setup to a progressively decentralized network.
This phase introduces additional layers of decentralization,
with expanded functionality for transaction routing, payments, and governance,
marking the beginning of DIN's evolution towards a permissionless infrastructure.

### DIN as an AVS

DIN launched as an Autonomous Verifiable Service (AVS) on EigenLayer on November 17, 2025.
EigenLayer's AVS model provides a robust framework for economic alignment and real-time performance enforcement.
DIN integrates functionalities that streamline agent onboarding,
improve oversight via a watchtower,
and establish a structured accountability model without launching a token that may have floating value.

- **Onboarding components** - Providers stake and add their wallet identities to join the DIN Router Registry contracts.

- **Economic security service level agreements** - Watchers and AVS operators use staking, slashing, and challenges to monitor onboarded node performance and reputation of entities in DIN.

The DIN AVS system deploys watchers with a dedicated "watcher node kit," which operates as both a monitoring tool and a user-friendly interface to the DIN network backend.
Through the AVS interface, watchers access essential modules for onboarding DIN providers, viewing onboarding notes, tracking network status, and enforcing slashing protocols.

DIN watchers act as operators on EigenLayer and monitor service accuracy and reliability while upholding AVS-based slashing and staking rules for performance infractions.
Watchers gather and analyze response data by running simulated requests to ensure adherence to service level agreements.
Watchers publish their results on a public event stream, providing transparency and informing DIN's crypto-economic incentives.
By aligning with EigenLayer's AVS structure,
DIN strengthens its validation processes,
ensuring real-time accountability and economic security for all network participants.

### Decentralized traffic processing

- **Provider-driven routing capabilities** - Providers in the DIN network route service traffic through various web3 gateways, not limited to Infura.
  This expanded functionality decentralizes the routing process, creating an open network where multiple web3 gateways interact with DIN providers.

- **DIN Payments Layer 3 network** - DIN plans to implement an onchain payments layer on Linea as a Layer 3 to facilitate real-time, decentralized payments among DIN providers and web3 gateways.
  This payments layer will allow for seamless, automated transactions, eliminating the need for traditional invoicing and streamlining economic interactions within DIN.
  Operators will be compensated based on their service contributions, with payment records transparently available onchain.

### DIN foundation and governance

- **Establishment of the DIN Foundation** - The DIN Foundation will be formed to oversee shared services,
  community initiatives, and technical upgrades,
  ensuring that DIN remains aligned with the community's evolving needs.
  The Foundation will manage essential services like security audits, research funding,
  and cross-protocol collaborations.

- **Decentralized governance and DAO** - The introduction of a DIN DAO will enable community-led governance,
  where stakeholders propose and vote on protocol upgrades, SLA adjustments, and economic policies.
  Token holders who stake within the DAO will gain voting rights,
  empowering them to shape the future of DIN and ensuring that governance decisions reflect the collective interests of the network.

### Incentivized testnet as a mechanism design laboratory

DIN completed its incentivized testnet, which validated the network's economic structures and performance capabilities before mainnet launch on November 17, 2025.
The testnet achieved a >99% success rate, median latency under 250ms, and served 7B+ monthly requests during pilot phases.
DIN maintains a perpetual testnet environment for new operators to validate their infrastructure.

#### Economic testing and reward calibration

- **Staking and slashing simulations** - The incentivized testnet validated staking and slashing mechanisms,
  identifying optimal thresholds for penalties and ensuring that economic deterrents are effective
  without being overly punitive.

- **Reward structure optimization** - By distributing rewards based on testnet performance,
  DIN collects data on the effectiveness of its incentive structures,
  including high-performance bonuses and routing efficiency rewards.
  This feedback helps calibrate rewards to align with desired behaviors and network standards.

- **Policy feedback** - Testnet participants provided feedback on the economic
  and governance policies in place.
  This input allows informed adjustments to network policies,
  ensuring they are fair, practical, and aligned with community expectations.

#### Participant onboarding and reputation building

- **Early access to economic mechanisms** - Node providers, watchers,
  and web3 gateways gained early access to DIN's staking, slashing, and reward systems through the testnet.
  This experience allowed them to adapt to DIN's operational standards and fine-tune their infrastructure,
  reducing the learning curve for mainnet.

- **Reputation establishment** - Participants who performed well on the incentivized testnet built a reputation
  that carries over to the mainnet,
  giving them a competitive edge in request routing and access to higher-tier rewards.
  This early reputation system encourages operators to establish themselves as reliable contributors
  to DIN's ecosystem.

#### Data-driven mechanism refinement

- **Performance data collection** - Real-time data on SLA compliance, request throughput,
  and operator availability from the testnet informs adjustments to the mainnet mechanism design.
  This data helps refine parameters,
  ensuring DIN's economic model supports scalability and network resilience.

- **Iterative testing for robust mechanisms** - The testnet enabled iterative testing of new policies
  and mechanisms, allowing adjustments based on test outcomes.
  This iterative process ensured that only well-tested mechanisms are deployed on mainnet,
  reducing the likelihood of economic inefficiencies or security vulnerabilities.

## Full decentralization and governance-driven expansion

In the final phase, DIN will operate as a fully decentralized, community-governed infrastructure,
with robust economic mechanisms, autonomous routing, a sustainable business model,
and a mature governance framework.

### Open network access and permissionless onboarding

- **Permissionless onboarding of operators** - The DIN onboarding process will become permissionless,
  enabling anyone who meets the staking and SLA requirements to join as a node provider or watcher.
  This open access expands DIN's capacity to accommodate growing demand and diversifies the operator base,
  enhancing network resilience.

- **Automated SLA compliance and enforcement** - Through further integration with EigenLayer's AVS model,
  DIN will implement automated SLA compliance checks and penalty enforcement.
  This ensures that performance standards are consistently maintained without manual intervention,
  supporting a fully autonomous infrastructure.

### Advanced payment and reward structures

- **Dynamic pricing and custom service level agreements** - As DIN matures,
  the DAO may introduce dynamic pricing for API requests and allows operators to offer customized service level agreements.
  This flexibility enables providers to compete based on specialized services,
  fostering a competitive and adaptable market for blockchain API services.

- **Cross-protocol staking and partnerships** - DIN will explore partnerships with other web3 projects,
  such as staking collaborations, liquidity pooling, and cross-chain integrations,
  enhancing DIN's economic resilience and extending its ecosystem reach.

### DAO-managed innovation fund and ecosystem growth

- **Funding for ecosystem development** - The DIN DAO will establish an innovation fund,
  supporting projects that build on DIN, integrate with other blockchain networks, or advance web3 infrastructure.
  This fund will fuel ecosystem growth and attract developers, researchers,
  and contributors to enhance DIN's utility and reach.

- **Community-driven upgrades and enhancements** - As a fully decentralized network,
  DIN's growth will be guided by community-driven proposals and DAO-backed initiatives.
  The DAO will support upgrades to DIN's core protocol, expand governance mechanisms, and enable ongoing innovation,
  ensuring that DIN remains adaptable and responsive to technological advancements and user needs.
