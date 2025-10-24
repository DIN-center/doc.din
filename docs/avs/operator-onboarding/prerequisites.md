---
descripion: Prerequisites for onboarding using the DIN app.
---

# Prerequisites

Before starting the [onboarding process](./onboard/) using the [DIN app](https://app.din.build), ensure you have the following ready:

## Wallet requirements

Compatible wallets include MetaMask and WalletConnect. DIN supports
[multiple wallet setup options](./mainnet-preparation.md#wallet-setup-options).

### Mainnet

- Ensure you have a **brand new externally owned account (EOA) wallet**, never used with any other EigenLayer AVS.
- Ensure your wallet is **dedicated to DIN only**.
  It cannot be shared with other EigenLayer AVS operations.

:::danger Critical for Mainnet
Your wallet MUST be dedicated exclusively to DIN AVS. Using a wallet associated with another AVS will cause operational failures.
:::

:::warning Mainnet Launch - November 14th, 2025
DIN AVS is launching on mainnet soon! Operators must begin onboarding with their wallets **immediately**
due to a 17-day operator allocation delay. October 27, 2025 is the latest date to create your wallet
and onboard in time for mainnet launch.
:::

### Testnet

- Any wallet works for testing.

## Financial requirements

- Ensure you have **minimum 1 ETH** in your wallet (EigenLayer recommendation).
- Stake amounts will be calculated during [Step 2](./onboard/stake-tokens.md) based on your operator sets.

### Current strategies

- stETH (Lido Staked ETH)
- WETH (Wrapped ETH)

:::note
Additional strategies will be available after launch.
:::

## Technical requirements

Ensure you have:

- A compatible **browser** - Chrome, Firefox, or Brave (latest version).
- **Stable internet** for transaction signing.
- **Pop-ups enabled** for `app.din.build`.

## Account access

Ensure you have:

- An account on the [DIN app](https://app.din.build).
- Completed the email verification.
- Access to DIN's TXTX onboarding (automatic during onboarding).

## Operator requirements

Before proceeding, understand:

- What [operator sets](../operator-sets.md) you'll be serving.
- The [slashing conditions](../slashing-and-rewards.md) for the AVS.
- Performance requirements (≥ 99.9% uptime).
- There's a 17-day wait for your registered wallet ([step 1](./onboard/register-operator.md)) to become
    eligible for rewards and slashing on EigenLayer.

## Ready to start?

If all prerequisites are met, review the [mainnet launch](./mainnet-preparation.md) instructions,
then begin with [Step 1: Register as Operator](./onboard/register-operator.md).
