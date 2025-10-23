---
description: How to complete Step 5 (allocate stake to operator sets) in the DIN app during the onboarding process
---

# Step 5: Allocate stake to operator sets

This is the final step to complete your operator registration and begin serving traffic.

:::info Important - coordination required
Step 5 requires coordination with the DIN team to configure a custom operator image. Contact the team at `din@consensys.net` when ready.
:::

:::info Video tutorial
[Watch the Step 5 tutorial](https://www.loom.com/share/ff00347005a445e8ba8dc125714ce869?sid=90d073fd-5e8b-4563-a58a-401261e6fc07) (5 minutes)
:::

## Prerequisites

- Completed Steps 1-3
- Allocation delay period has passed (if set)
- Infrastructure ready to receive traffic
- Coordinated with DIN team

To coordinate with the DIN team

1. Email the team at `din@consensys.net` and provide the following:

   ```text
   Operator Address: 0x...
   Operator Sets: [10, 20, 30]
   Allocation Complete: Yes
   Infrastructure Ready: Yes
   ```

1. Wait for custom image configuration
1. Receive specific instructions

## Steps

:::note
Specific details will be provided by the DIN team when your custom image is ready.
:::

### 1. Access Step 5

1. Open the [DIN app](https://app.din.build)
2. Step 5 will be enabled by DIN team
3. Select **Start Step 5**
4. Select **Open TXTX**

### 2. BLS key registration

The workflow will:

- Generate a BLS key pair
- Register the public key
- Store the private key securely

### 3. AVS contract registration

Execute your registration with:

- The AVS service manager
- Operator set IDs
- Socket configuration

### 4. Operator set activation

For each selected set the runbook:

- Registers you with the set
- Verifies activation
- Begins serving requests

### 5. Complete

When successful:

- BLS key registered ✓
- AVS registration confirmed ✓
- All operator sets active ✓
- Dashboard shows "Active" ✓
- Start receiving RPC requests ✓

## Contract addresses

### Testnet (Sepolia V3)

AVS Service Manager: `0x42583067658071247ec8ce0a516a58f682002d07`
Registry Coordinator: `0xC3dFB1C6cd1Ef8487Fd0f777e26B80d999b941d6`
Chain ID: `11155111`

### Mainnet

_Addresses will be provided before launch_

## Next: Monitor your operator

Monitor these key performance indicators:

- Request volume
- Response time
- Success rate
- Uptime percentage

Maintain service level agreements:

- **Uptime**: Greater than 99.9%
- **Latency**: Less than 100ms p50
- **Accuracy**: 100%
