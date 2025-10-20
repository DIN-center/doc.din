# Step 5: Allocate Stake to Operator Sets

Final step to complete your operator registration and begin serving traffic.

:::info Coordination Required
Step 5 requires coordination with the DIN team to configure a custom operator image. Contact the team in #din-general Slack when ready.
:::

## Prerequisites

- [ ] Completed Steps 1-3
- [ ] Allocation delay period has passed (if set)
- [ ] Infrastructure ready
- [ ] Coordinated with DIN team

## Pre-Step 5: Team Coordination

### Request Setup

1. Join #din-general Slack
2. Provide:

   ```text
   Operator Address: 0x...
   Operator Sets: [10, 20, 30]
   Allocation Complete: Yes
   Infrastructure Ready: Yes
   ```
3. Wait for custom image configuration
4. Receive specific instructions

## Process

:::note
Specific details will be provided by the DIN team when your custom image is ready.
:::

### 1. Access Step 5

1. Go to [app.din.build](https://app.din.build)
2. Step 5 enabled by DIN team
3. Click **"Start Step 5"**
4. Custom TXTX runbook opens

### 2. BLS Key Registration

The runbook will:

- Generate BLS key pair
- Register public key
- Store private key securely

### 3. AVS Contract Registration

Execute registration with:

- AVS Service Manager
- Operator set IDs
- Socket configuration

### 4. Operator Set Activation

For each selected set:

- Register with set
- Verify activation
- Begin serving requests

### 5. Complete

When successful:

- BLS key registered ✓
- AVS registration confirmed ✓
- All operator sets active ✓
- Dashboard shows "Active" ✓
- Receiving RPC requests ✓

## Contract Addresses

**Testnet (Sepolia V3)**

```text
AVS Service Manager: 0x42583067658071247ec8ce0a516a58f682002d07
Registry Coordinator: 0xC3dFB1C6cd1Ef8487Fd0f777e26B80d999b941d6
Chain ID: 11155111
```

**Mainnet**: Addresses will be provided before launch

## Monitoring Your Operator

Monitor these KPIs:

- Request volume
- Response time
- Success rate
- Uptime percentage

Maintain SLAs:

- **Uptime**: Greater than 99.9%
- **Latency**: Less than 100ms p50
- **Accuracy**: 100%

## Common Issues

**Custom Image Not Ready?**
- Contact DIN team in Slack

**BLS Key Generation Failed?**
- Restart runbook
- Clear browser cache

**Registration Failed?**
- Check allocation delay expired
- Verify network selection
- Increase gas

## Support Channels

- **During Step 5**: #din-general with @din-team
- **Post-Activation**:
  - Technical: #din-support
  - Performance: #din-operators
  - General: #din-general

## Success! 🎉

You're now an active DIN AVS operator. Welcome to the network!

---

*Questions? Join #din-general Slack*
