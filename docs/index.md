import CardList from "@site/src/components/CardList"

# DIN documentation

DIN (Decentralized Infrastructure Network) is a B2B service-discovery marketplace for web3 infrastructure.
It helps RPC providers (like Infura) source, validate, and route capacity across a network of node
providers. DIN improves reliability, performance, and cost efficiency through provider choice, real-time health and reputation monitoring, and incentive-aligned governance (staking, slashing, and SLA enforcement).

:::info
For more background information, read the DIN [litepaper](https://drive.google.com/file/d/17t7tLbpyafvVv8UPSrjtaO68zgxOzXXa/view) and [whitepaper](https://drive.google.com/file/d/1hCHmcXMN6YpmGQkdxSTuZb6Ne_EaehJt/view).
:::

DIN's RPC-as-a-service model lets centralized RPC providers give developers access to
blockchain network APIs and RPCs across many chains, through resilient and high-performance endpoints. Developers continue to consume RPCs from their chosen provider, not from DIN directly.

DIN builds with the EigenLayer ecosystem to align onboarding and incentives for participants
[node providers](node-providers/index.md), [watchers](watchers/index.md), and [web3 gateways](web3-gateways/index.md).
[DIN as an AVS](avs/index.md) (Autonomous Verifiable Service) provides decentralized administration for router identities, reputation, and network endpoint management.

## DIN values

DIN's foundational values are:

- **Decentralization** – Reduce reliance on a single authority for infrastructure provisioning to
    improve reliability and access across the ecosystem.
- **Competitive collaboration with partners** – Work with traditional competitors to build a marketplace
    that increases access and reduces costs across the web3 infrastructure ecosystem.
- **Scalability and resilience** – Meet growing demand via distributed nodes and partnerships with
    domain experts in blockchain infrastructure.

## How do I participate in DIN?

See the following documentation to onboard and participate as various DIN roles:

<CardList
  items={[
    {
      href: "node-providers",
      title: "Node providers",
      description: "Node providers provide services to the network (and access to the nodes).",
    },
    {
      href: "watchers",
      title: "Watchers",
      description: "Watchers publish insightful reports about the performance of nodes.",
    },
    {
      href: "web3-gateways",
      title: "Web3 gateways",
      description: "Web3 gateways buy resources from the network and sell it to real-world users.",
    }
  ]}
/>
