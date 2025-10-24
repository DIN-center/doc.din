---
description: How to complete Step 3 (set allocation delay) in the DIN app during the onboarding process
---

# Step 3: Set allocation delay

Configure the allocation delay that determines when your stake becomes active for slashing.

Allocation delay is the time between staking tokens and when they become slashable. This is customizable
on both testnet and mainnet.

:::warning Important
This is different to the 17-day wait period for your wallet to become active on EigenLayer, for mainnet.
The allocation delay is your choice for operational safety and is in addition to the 17-day wait period.
:::

:::info Video tutorial
[Watch the step 2 and 3 combined tutorial.](https://www.loom.com/share/871e1f969e664f73ae64f033d434ffce?sid=09ba1cf4-726b-4a44-8fd0-49f064edb364) (Step 3 begins at 14:00)
:::

## Prerequisites

Ensure you have:

- Completed Steps [1](register-operator.md) and [2](stake-tokens.md).
- Enough ETH for gas fees.

## Steps

### 1. Start step 3

1. Open the [DIN app](https://app.din.build).
2. Select **Start Step 3**.
3. Select **Open TXTX** to open the runbook.

### 2. Set the delay value

In TXTX:

1. Connect your wallet.
2. Review the pre-filled delay value (the default is `0`).
3. Customize if desired.
4. Select **Validate**.

:::warning Cannot be changed
Once set, the allocation delay is permanent for your operator address.
:::

### 3. Execute the transaction

1. Select **Send Transaction**.
2. Sign in your wallet.
3. Wait for the confirmation.

### 4. Completion

When successful:

- The transaction is confirmed.
- Download the output file.
- Step 3 shows **✓**.

## Output file example

Your output contains:

```json
{
  "allocation_delay_out": 0,
  "set_allocation_delay_tx_hash": "0x...",
  "effectBlock": 9329006
}
```

## Next steps

- Step 4: Watcher setup (Not yet available)
- [Step 5: Allocate stake to operator sets](./opt-in-avs.md) (Requires DIN team coordination)
