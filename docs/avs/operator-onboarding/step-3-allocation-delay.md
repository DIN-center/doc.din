# Step 3: Set allocation delay

Configure the allocation delay that determines when your stake becomes active for slashing.

:::info Video Tutorial
[Watch Step 2 & 3 Combined Tutorial](https://www.loom.com/share/871e1f969e664f73ae64f033d434ffce?sid=09ba1cf4-726b-4a44-8fd0-49f064edb364) (Step 3 begins at 14:00)
:::

## What is allocation delay

The time between staking tokens and when they become slashable. This is **customizable** on both testnet and mainnet.

:::info Important
This is different from the 17-day wallet age requirement for mainnet. The allocation delay is your choice for operational safety.
:::

## Prerequisites

- [ ] Completed Steps 1 and 2
- [ ] ETH for gas fees

## Process

### 1. Start step 3

1. Go to [app.din.build](https://app.din.build)
2. Click **"Start Step 3"**
3. TXTX platform opens

### 2. Set delay value

In TXTX:

1. Connect wallet
2. Review pre-filled delay value (default: 0)
3. Customize if desired
4. Click **Validate**

:::danger Cannot Be Changed
Once set, the allocation delay is permanent for your operator address.
:::

### 3. Execute transaction

1. Click **"Send Transaction"**
2. Sign in wallet
3. Wait for confirmation

### 4. Complete

When successful:

- Transaction confirmed
- Download output file
- Step 3 shows ✓

## Output file

Your output contains:

```json
{
  "allocation_delay_out": 0,
  "set_allocation_delay_tx_hash": "0x...",
  "effectBlock": 9329006
}
```

## Common questions

**What delay should I set?**

Most operators use 0 (immediate) for flexibility.

**Can I change it later?**

No, it's permanent once set.

**Is this the 17-day requirement?**

No, that's for wallet age on mainnet EigenLayer access.

## Next step

- **Step 4**: Watcher Setup (Not yet available)
- **Step 5**: [Allocate Stake to Operator Sets](./step-5-opt-in-avs.md) (Requires DIN team coordination)

---

Need help? Join #din-general on Slack
