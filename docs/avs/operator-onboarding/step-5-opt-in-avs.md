# Step 5: Allocate stake to operator sets

Final step to associate your stake with operator sets and begin serving traffic.

:::tip Video Walkthrough
Watch the [Step 5 onboarding video](https://www.loom.com/share/ff00347005a445e8ba8dc125714ce869) for a complete walkthrough.
:::

## What step 5 does

Step 5 takes the stake you allocated in Step 2 and associates it with the specific operator sets you've been allowlisted for.
This registration enables you to start receiving and serving RPC requests.

## Before you start

- [ ] Completed Steps 1-4
- [ ] Allocation delay period has passed (if set)
- [ ] Messaged DIN team that you reached Step 5 in #din-general Slack

## Waiting for configuration

When you reach Step 5, you'll see "Step 5: Configuration Required" in the app.

**What this means:** The DIN team needs to configure your custom operator image on the backend.
Most operators have already notified us, but if you haven't, message in #din-general Slack that you've reached Step 5.

Once configured by the DIN team, the status will change to "Step 5 Ready" and you can proceed.

## Running step 5

### 1. Start the workflow

1. Go to [app.din.build](https://app.din.build) → Onboarding
2. Click **Step 5**
3. Enter your operator name (this is how you'll appear in the web app)
   - Example: "Rivet", "SimplyStaking", your company name
4. Click **Continue to Step 5**

### 2. Open TXTX

The TXTX workflow will open in a secure environment. This automates the complex EigenLayer CLI commands for you.

### 3. Execute transactions

The workflow executes two main transactions:

#### Transaction 1: Modify allocations

- Associates your stake with your assigned operator sets
- Uses the `modifyAllocations` contract function

#### Transaction 2: Register for operator sets

- Registers your BLS public key
- Adds you to each operator set
- Uses the `registerForOperatorSets` contract function

Follow the prompts in TXTX to sign each transaction.

### 4. Complete

When you see confetti and "Runbook Complete":

1. Review the output data (optional: download for your records)
2. Click **End Session**
3. Close TXTX

## Verify registration

Go to the **Operators** page in the app to see your newly created operator(s).

You'll see one operator entry for each operator set you were assigned:

- Operator set ID (for example: 5, 35)
- Network name (for example: blast-testnet, base-mainnet)
- Your operator name
- Status: Active

## What you just did

Step 5 essentially:

1. **Took your stake** from Step 2
2. **Associated it** with your assigned operator sets (for example: sets 5 and 35)
3. **Registered your BLS key** for secure validation
4. **Made you discoverable** in the DIN network

This would normally require running complex EigenLayer CLI commands, but the TXTX workflow abstracts all of that for you.

## Output data

The step 5 output includes:

- **Operator name**: How you're identified in the app
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

```text
Service Manager:     0xC3dFB1C6cd1Ef8487Fd0f777e26B80d999b941d6
Allocation Manager:  0x42583067658071247ec8ce0a516a58f682002d07
Chain ID:            11155111
RPC:                 https://sepolia.infura.io/v3/...
```

### Mainnet

Addresses will be provided before launch.

## Common issues

#### "Step 5: Configuration Required"

Contact the DIN team in #din-general Slack. They need to set up your custom operator image on the backend.

#### Transaction failed

- Ensure your allocation delay period has passed
- Check you have enough ETH for gas on Sepolia
- Try increasing gas limit

#### Can't see my operator

- Refresh the Operators page
- Check you're looking at the correct network
- Verify transaction completed successfully (check tx hash on Etherscan)

## Next steps

You're now an active DIN AVS operator! 🎉

Continue to the next section to learn about:

- Running your operator infrastructure
- Monitoring performance
- Maintaining service level agreements
- Getting support

---

Questions? Join #din-general on Slack
