---
description: Overview of the steps to register as a DIN AVS operator.
---

# Operator onboarding

A DIN Autonomous Verifiable Service (AVS) operator runs infrastructure that serves RPC requests on the
DIN network while staking funds with one or more [operator sets](../operator-sets.md).

:::warning Mainnet Launch - November 14th, 2025
DIN AVS is launching on mainnet soon! Operators must begin onboarding **immediately**
due to a 17-day operator allocation delay.
:::

## Onboarding process

The complete onboarding process consists of the following steps:

1. [**Review the prerequisite checklist**](./prerequisites.md) - The checklist provides information about
    all the requirements (wallet, financial, account) you must meet to begin onboarding through the DIN app.

1. [**Prepare for mainnet launch**](./mainnet-preparation.md) - View the time-sensitive instructions to be
    ready for the mainnet launch on November 14, 2025.

1. [**Onboard using the DIN app**](onboard/index.md):

    1. [**Register as an EigenLayer operator**](./onboard/register-operator.md) - Register your operator address
        with EigenLayer's delegation manager contract. This establishes your identity as an operator on
        the EigenLayer protocol.

    1. [**Stake tokens**](./onboard/stake-tokens.md) - Stake the required tokens (stETH, WETH, etc.) into
        EigenLayer strategies. This provides the economic security backing for your operator services.

    1. [**Set the allocation delay**](./onboard/allocation-delay.md) - Configure the allocation delay for your
        staked assets. This determines when your stake becomes active for slashing conditions.

    1. [**Watcher setup**](./onboard/watchers.md) (Coming soon) - Configure watcher services to monitor your
        operator performance. Currently in development.

    1. [**Allocate stake to operator sets**](./onboard/opt-in-avs.md) - Final registration step to join the
        DIN AVS and begin serving traffic.

## Environment differences

Testnet and mainnet have different risk, funding, and activation profiles. Use Sepolia testnet to
validate your setup end to end with test funds, then move to mainnet when you are ready to stake real
assets and accept slashing risk.

View the [environment differences](./mainnet-preparation.md#mainnet-and-testnet-differences)
for more information about the differences between running as a DIN operator on mainnet and testnet.

## Supported operator sets

[Operator sets](../operator-sets.md) in DIN represent different blockchain networks that operators can serve. For example: Ethereum, Base, Optimism, Arbitrum, and so on.

You'll select which operator sets to join during the onboarding process.

You can view the most up-to-date list of supported operator sets in the [DIN app](https://app.din.build).

## Get started

To begin, start with the [prerequisites](./prerequisites.md) to ensure you have everything needed
for a smooth onboarding experience.

Additional resources include video guides for each step in the DIN onboarding process.
