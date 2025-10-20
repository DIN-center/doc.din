# Operator Onboarding Guide

Welcome to the DIN AVS Operator Onboarding Guide. This comprehensive documentation will walk you through the process of becoming a DIN AVS operator and staking with one or more operator sets.

:::warning Mainnet Launch - Urgent Action Required
**DIN AVS Mainnet launches on November 14th, 2025.** Due to EigenLayer's 17-day allocation delay period, operators must begin registration **immediately** to be ready for mainnet launch.
:::

## Overview

The DIN AVS (Actively Validated Service) leverages EigenLayer's restaking infrastructure to provide decentralized RPC services across multiple blockchain networks. As an operator, you'll be responsible for running infrastructure that serves RPC requests while maintaining high availability and performance standards.

## Quick Links

- **Onboarding Portal**: [app.din.build](https://app.din.build)
- **Video Tutorials**: Available for each step of the process
- **Support**: Join our #din-general Slack channel

## Onboarding Process

The complete onboarding process consists of five steps:

### Step 1: [Register as EigenLayer Operator](./step-1-register-operator.md)
Register your operator address with EigenLayer's delegation manager contract. This establishes your identity as an operator on the EigenLayer protocol.

### Step 2: [Stake Tokens](./step-2-stake-tokens.md)
Stake the required tokens (stETH, WETH, etc.) into EigenLayer strategies. This provides the economic security backing for your operator services.

### Step 3: [Set Allocation Delay](./step-3-allocation-delay.md)
Configure the allocation delay for your staked assets. This determines when your stake becomes active for slashing conditions.

### Step 4: [Watcher Setup](./step-4-watchers.md) (Coming Soon)
Configure watcher services to monitor your operator performance. Currently in development.

### Step 5: [Allocate Stake to Operator Sets](./step-5-opt-in-avs.md)
Final registration step to join the DIN AVS and begin serving traffic.

## Environment Differences

### Testnet (Current - v0.3)
- **Network**: Sepolia testnet
- **Requirements**: Test ETH for gas fees
- **Allocation Delay**: 0 blocks (immediate)
- **Wallet**: Any EOA can be used

### Mainnet (Launching November 14th)
- **Network**: Ethereum mainnet
- **Requirements**: Real ETH for gas and staking
- **Allocation Delay**: 17 days
- **Wallet**: **MUST use a fresh wallet dedicated only to DIN AVS**
- **Recommended**: [Fireblocks integration](https://docs.eigencloud.xyz/products/eigenlayer/operators/howto/registeroperators/register-operator-with-fireblocks) for enhanced security

## Prerequisites

Before beginning the onboarding process, ensure you have:

1. **A dedicated wallet** (EOA) for operator functions
   - For mainnet: MUST be a brand new wallet never used with other AVSs
   - For testnet: Any wallet can be used
2. **Sufficient ETH** for gas fees
3. **Access to [app.din.build](https://app.din.build)**
4. **Understanding of operator responsibilities** and slashing conditions

## Supported Networks (Operator Sets)

DIN AVS supports multiple blockchain networks through operator sets including:

- Ethereum, Base, Optimism, Arbitrum
- Polygon, Avalanche, BSC, Mantle
- zkSync, Starknet, Scroll, Solana
- Blast, Sei, Swellchain, Unichain
- And more (see full list in [Step 2](./step-2-stake-tokens.md))

You'll select which operator sets to join during the onboarding process.

## Important Considerations

:::info Key Points
- **Mainnet wallet isolation**: Using a wallet that's been used with other AVSs will significantly complicate your operations
- **Wallet age requirement**: Mainnet requires wallet to exist for 17 days before EigenLayer access
- **Slashing conditions**: Understand the [slashing](../slashing-and-rewards.md) mechanisms
- **Performance requirements**: Maintain high availability and low latency for RPC services
:::

## Getting Started

Ready to begin? Start with our [Prerequisites Guide](./prerequisites.md) to ensure you have everything needed for a smooth onboarding experience.

## Need Help?

- **Documentation**: You're in the right place!
- **Video Guides**: Each step includes a detailed video walkthrough
- **Technical Support**: Reach out in our Slack channel
- **Contract Addresses**: Available in each step's documentation

---

*Last updated: October 2024 | Mainnet launch: November 14th, 2025*
