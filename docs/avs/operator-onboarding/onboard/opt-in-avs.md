---
description: How to complete Step 5 (allocate stake to operator sets) in the DIN app during the onboarding process
---

# Step 5: Allocate stake to operator sets

This is the final step to complete your operator registration and begin serving traffic. It takes
the stake you allocated in Step 2 and associates it with the specific operator sets you've been
allowlisted for. This registration enables you to start receiving and serving RPC requests.

:::info Video tutorial
[Watch the Step 5 tutorial for the complete walkthrough](https://www.loom.com/share/ff00347005a445e8ba8dc125714ce869). (5 minutes)
:::

## Prerequisites

- Completed Steps 1-4
- Allocation delay period has passed (if set)
- Messaged DIN team ( `din@consensys.net`) that you reached Step 5

## Steps

:::info Important - coordination required
When you reach Step 5, you'll see **Step 5: Configuration Required** in the app.

The DIN team needs to configure your custom operator image on the backend. Contact the team at
`din@consensys.net` when ready to proceed with this step.

Once configured by the DIN team, the status will change to **Step 5 Ready** and you can proceed.
:::

### 1. Access Step 5

1. Open the [DIN app](https://app.din.build)
1. Select **Step 5**
1. Enter your operator name. This name determines how you'll appear in the DIN app (for example, `Rivet`, `SimplyStaking`)
1. Select **Continue to Step 5**
1. Select **Open TXTX** to open a secure environment. This step automates the complex EigenLayer CLI
    commands for you.

### 2. Execute transactions

The workflow executes two main transactions:

- Transaction 1: Modify allocations

  - Associates your stake with your assigned operator sets
  - Uses the `modifyAllocations` contract function

- Transaction 2: Register for operator sets

  - Registers your BLS public key
  - Adds you to each operator set
  - Uses the `registerForOperatorSets` contract function

Follow the prompts in TXTX to sign each transaction.

### 3. Completion

The step is complete when you see confetti and **Runbook Complete**, next:

1. Review the output data (optional: download for your records)
2. Select **End Session**
3. Close TXTX

### 4. Verify your registration

Go to the **Operators** page in the DIN app to view your newly created operator.

You'll see one operator entry for each operator set you were assigned:

- Operator set ID (for example: `5`, `35`)
- Network name (for example: `blast-testnet`, `base-mainnet`)
- Your operator name
- Status: `Active`

Step 5 has performed the following:

- Taken your stake from Step 2 and associated it with your assigned operator sets
    (for example: sets `5` and `35`)
- Registered your BLS key for secure validation.
- Made you discoverable in the DIN network.

## Output data example

The step 5 output includes:

- **Operator name**: How you're identified in the DIN app
- **Operator sets**: Which sets you're registered for (for example: [5, 35])
- **Service manager**: DIN AVS contract address
- **Allocation manager**: EigenLayer allocation contract address
- **Transaction hashes**: Both modify allocations and register for operator sets
- **Registration logs**: Confirmation events for each operator set

Example output:

```json
{
  "operator_name": "Rivet",
  "operator_sets": [5, 35],
  "modify_allocations_tx_hash": "0xa851e0...",
  "register_for_operator_sets_tx_hash": "0x73ac44...",
  "register_for_operator_sets_logs": [
    {
      "event_name": "OperatorAddedToOperatorSet",
      "data": {
        "operator": {
          "OperatorSet": {
            "id": 5
          }
        }
      }
    }
  ]
}
```

## Contract addresses

### Testnet (Sepolia)

Service Manager:     `0xC3dFB1C6cd1Ef8487Fd0f777e26B80d999b941d6`
Allocation Manager:  `0x42583067658071247ec8ce0a516a58f682002d07`

### Mainnet

Addresses will be provided before launch.
