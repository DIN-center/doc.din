---
description: Troubleshoot issues during DIN AVS onboarding
---

# Troubleshoot

This page provides solutions to common issues encountered during DIN AVS onboarding.

## Login issues

### Turnkey code not received

- Wait 2-3 minutes.
- Check your spam folder.
- Request code resend.
- Try a different browser.

### Dashboard won't load

- Disable ad blockers.
- Allow pop-ups for `https://app.din.build`.
- Try incognito mode.

## Wallet issues

### MetaMask won't connect

- Unlock MetaMask first.
- Check that you're on the correct network.
- Clear MetaMask activity data.

### Wrong network

- Testnet: Switch to Sepolia (chain ID: `11155111`).
- Mainnet: Switch to Ethereum Mainnet.

## Step-specific issues

### Step 1: Registration

#### Already registered error

- Select **Check if registered** first.
- If registered, skip to Step 2.

#### TXTX won't load

- Allow pop-ups.
- Disable extensions.
- Clear your cache.

### Step 2: Staking

#### Not allowlisted

- Check the request status.
- Contact `din@consensys.net` if you've waited over 24 hours.

#### Token conversion failed

- Check that the gas fees are included.
- Try smaller amounts.
- Verify contract addresses.

#### Approval stuck

- Check on Etherscan.
- Speed up with higher gas.
- Cancel and retry if needed.

### Step 3: Allocation Delay

#### Wrong delay set

:::danger Critical
You cannot change this once set. You must use a new operator address if incorrect.
:::

#### Contract not found

- Verify the correct network.
- Sepolia: `0x42583067658071247ec8ce0a516a58f682002d07`

### Step 5: Allocate stake

#### Configuration required

The message **Step 5: Configuration Required** means you must contact the DIN team at `din@consensys.net`. They need to set up your custom operator image on the backend.

#### Can't see my operator

- Refresh the **Operators** page.
- Check that you're looking at the correct network.
- Verify the transaction completed successfully (check the transaction hash on Etherscan).

#### Custom image not ready

- Contact the DIN team at `din@consensys.net`.
- Provide the operator address and readiness confirmation.

#### BLS key failed

- Restart the workflow.
- Clear your browser cache.
- Try a different browser.

#### Registration failed

- Confirm if the allocation delay has expired.
- Verify whether the gas is sufficient.
- Confirm that you've completed previous steps.

## Transaction issues

### General transaction failures

- Increase the gas limit.
- Check your ETH balance.
- Wait for lower gas prices.
- Verify the network selection.

### Session timeout

- Select **Extend +30** before expiry.
- If expired, restart the step.
- Complete in one sitting.

## Post-onboarding

### Not receiving traffic

- Verify that you've completed all steps.
- Check if the allocation delay has expired.
- Test infrastructure connectivity.
- Contact the DIN team at `din@consensys.net`.

## Get help

When contacting support always provide:

1. Your operator address.
2. The step where the issue occurred.
3. Error messages (exact text).
4. Transaction hashes.
5. Screenshots if applicable.

## FAQ

**Can I change my operator address?**

No, you must start over with new address.

**Can I modify allocation delay?**

No, it is permanent once set.

**Can I add operator sets later?**

Yes, additional sets can be added.

**What if I miss mainnet launch?**

You can still join after launch, but you will miss initial traffic.

**Can I withdraw my stake?**

Yes, but it is subject to withdrawal delays.
