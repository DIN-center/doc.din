import CardList from "@site/src/components/CardList"

# DIN documentation

DIN (the Decentralized Infrastructure Network) is a B2B service discovery marketplace, enhancing the performance, reliability, and cost-effectiveness of dapp development through a network of web3 infrastructure providers.

Today, DIN is a live, decentralized RPC-as-a-Service marketplace that allows centralized RPC providers (like Infura) to offer developers API access to highly-available, reliable endpoints and performant blockchain infrastructure for 14+ blockchain networks deemed valuable by the users they serve.

DIN is building with the EigenLayer ecosystem to integrate the onboarding and incentive structures behind DIN participants: [node providers](node-providers/index.md), [watchers](watchers/index.md), and [web3 gateways](web3-gateways/index.md).
[DIN as an AVS](avs/index.md) is the missing decentralized administration piece to manage DIN router identities, reputation, and network endpoints.

:::note
For more background information, read the DIN [litepaper](https://drive.google.com/file/d/17t7tLbpyafvVv8UPSrjtaO68zgxOzXXa/view) and [whitepaper](https://drive.google.com/file/d/1hCHmcXMN6YpmGQkdxSTuZb6Ne_EaehJt/view).
:::

## DIN values

DIN's foundational values are:

- **Decentralization** – Removing reliance on a single authority for infrastructure provisioning.
  Improving reliability and access for self-sovereign values across MetaMask.
- **Competitive collaboration with partners** – Actively working with considered traditional competitors to Infura in order to build a marketplace that increases access and decreases costs across the Web3 Infrastructure ecosystem.
- **Scalability and resilience** – DIN is designed to handle growing demand via distributed nodes and partnerships with lesser known experts in the blockchain infrastructure space.

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
