---
description: How to complete Step 1 (register as an operator) in the DIN app during the onboarding process
---

# Step 1: Register as operator

Register your operator on EigenLayer. This step **must** be performed at least 17 days before you intend
to start serving traffic because EigenLayer has 17-day operator allocation delay.

:::info Video tutorial
[Watch the Step 1 tutorial](https://www.loom.com/share/fa59256208a942a7acf14c20ddd2b77f?sid=36b11ad4-2e9c-4563-b6b1-83da6ca5812c) (5 minutes)
:::

## Prerequisites

Ensure you've completed all the [prerequisites](../prerequisites.md) before starting this process.

:::warning MetaMask Required
**You must use MetaMask wallet for AVS onboarding.** Onboarding may fail if you use other wallet providers (TrustWallet, Coinbase Wallet, etc.).
Connect your operator wallet through MetaMask to ensure a successful registration.
:::

## Steps

### 1. Start registration

1. Open the [DIN app](https://app.din.build)
1. Select the **AVS** section
1. Select the **Onboarding** tab
1. Step 1 opens in the **Onboarding Steps** section.

### 2. Check the registration status

1. Connect your DIN AVS wallet **using MetaMask**
1. Select **Check if registered**
1. If already registered → Skip to [Step 2](./stake-tokens.md)
1. If not registered → Continue below

### 3. Register as an operator

1. Select **Start Step 1 Registration**
1. Select **Open TXTX** to open the runbook
1. Confirm the environment and wallet address and select **Start Runbook**
1. Sign the transaction in your wallet
1. Wait for confirmation (~2 minutes)

### 4. Completion

When successful:

- Your transaction will be confirmed onchain
- Download the output file for your records
- In the DIN app, Step 1 shows ✓

## Output file example

Your output file contains:

```json
{
  "registered_operator_address": "0x...",
  "register_as_operator_tx_hash": "0x...",
  "registered_metadata_uri": "https://..."
}
```

Save this file for your records.

## Next step

Continue to [Step 2: Stake Tokens](./stake-tokens.md)
