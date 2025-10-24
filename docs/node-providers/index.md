---
description: Overview of node providers
---

# Node providers

A node provider runs blockchain nodes and exposes API endpoints that DIN can route traffic to.
Node providers are incentivized for providing high-quality, reliable, and secure services to DIN users
via [web3 gateways](../web3-gateways/index.md).

Node providers earn fiat, stablecoins, or other tokens for hosting nodes in DIN.
They are added to a Network-Services list so the DIN Router can effectively direct traffic and keep track of all relays.

To participate in DIN, a node operator must [onboard as an AVS operator](../avs/operator-onboarding/index.md).

Node providers join the DIN AVS through EigenLayer restaking (or staking tokens in the staking contract).
Upon registration, providers declare the blockchain protocols they support, such as Ethereum, Layer 2 networks, or additional Layer 1s, and detail their API capabilities in the Node Registry.
Node providers are then available to service requests from users, governed by SLA requirements and monitored by [watchers](../watchers/index.md).
