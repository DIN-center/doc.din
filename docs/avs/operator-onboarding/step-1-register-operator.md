# Step 1: Register as Operator

Register your operator on EigenLayer.

:::info Video Tutorial
[Watch the Step 1 Tutorial](https://www.loom.com/share/a0709feb88a940cf865b62bb81e973ba?sid=e3177e3f-9e4c-4e19-8e6b-e7e8e5c86c2f) (8 minutes)
:::

## Prerequisites

:::warning Mainnet Wallet Requirement
For mainnet, your wallet must have existed for at least 17 days to access EigenLayer.
:::

- [ ] For mainnet: Fresh wallet that has existed for 17+ days
- [ ] For testnet: Any wallet
- [ ] ETH for gas fees
- [ ] Account at [app.din.build](https://app.din.build)

## Process

### 1. Start Registration

1. Go to [app.din.build](https://app.din.build)
2. Navigate to AVS section
3. Click **"Start Step 1"**
4. TXTX platform opens in new tab

### 2. Check Registration Status

In TXTX:
1. Connect your wallet
2. Click **"Check if registered"**
3. If already registered → Skip to Step 2
4. If not registered → Continue below

### 3. Register Operator

1. Click **"Register as Operator"**
2. Sign transaction in wallet
3. Wait for confirmation (~2 minutes)

### 4. Complete

When successful:
- Transaction confirmed on-chain
- Download output file for records
- Return to app.din.build
- Step 1 shows ✓

## Output File

Your output file contains:
```json
{
  "registered_operator_address": "0x...",
  "register_as_operator_tx_hash": "0x...",
  "registered_metadata_uri": "https://..."
}
```

Save this file for your records.

## Common Issues

**Already Registered?**
- Skip to [Step 2](./step-2-stake-tokens.md)

**Transaction Failed?**
- Increase gas limit
- Check ETH balance

**TXTX Not Loading?**
- Allow pop-ups for app.din.build
- Try different browser

## Next Step

Continue to [Step 2: Stake Tokens](./step-2-stake-tokens.md)

---

*Need help? Join #din-general on Slack*