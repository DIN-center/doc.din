---
description: Troubleshoot issue during DIN AVS onboarding
---

# Troubleshooting

Solutions to common issues during DIN AVS onboarding.

## Login issues

### Turnkey code not received

- Wait 2-3 minutes
- Check your spam folder
- Request code resend
- Try a different browser

### Dashboard won't load

- Disable ad blockers
- Allow pop-ups for `https://app.din.build`
- Try incognito mode

## Wallet issues

### MetaMask won't connect

- Unlock MetaMask first
- Check correct network
- Clear MetaMask activity data

### Wrong network

- Testnet: Switch to Sepolia (chain ID: `11155111`)
- Mainnet: Switch to Ethereum Mainnet

## Step-specific issues

### Step 1: Registration

#### Already registered error

- Select **Check if registered** first
- If registered, skip to Step 2

#### TXTX won't load

- Allow pop-ups
- Disable extensions
- Clear cache

### Step 2: Staking

#### Not allowlisted

- Check request status
- Contact `din@consensys.net` if waiting over 24 hours

#### Token conversion failed

- Check the gas fees included
- Try smaller amounts
- Verify contract addresses

#### Approval stuck

- Check on Etherscan
- Speed up with higher gas
- Cancel and retry if needed

### Step 3: Allocation Delay

#### Wrong delay set

:::danger Critical
Cannot be changed once set! Must use new operator address if incorrect.
:::

#### Contract not found

- Verify correct network
- Sepolia: `0x42583067658071247ec8ce0a516a58f682002d07`

### Step 5: Allocate stake

#### Custom image not ready

- Contact DIN team at `din@consensys.net`
- Provide operator address and readiness confirmation

#### BLS key failed

- Restart workflow
- Clear browser cache
- Try different browser

#### Registration failed

- Confirm if allocation delay has expired
- Verify whether the gas is sufficient
- Confirm previous steps complete

## Transaction Issues

### General transaction failures

- Increase gas limit
- Check ETH balance
- Wait for lower gas prices
- Verify network selection

### Session timeout

- Select **Extend +30** before expiry
- If expired, restart the step
- Complete in one sitting

## Post-Onboarding

### Not receiving traffic

- Verify all steps completed
- Check allocation delay expired
- Test infrastructure connectivity
- Contact support team

## Getting help

When contacting support always provide:

1. Your operator address
2. Step where issue occurred
3. Error messages (exact text)
4. Transaction hashes
5. Screenshots if applicable

## FAQ

**Can I change my operator address?**

No, must start over with new address.

**Can I modify allocation delay?**

No, permanent once set.

**Can I add operator sets later?**

Yes, additional sets can be added.

**What if I miss mainnet launch?**

Can still join after launch but will miss initial traffic.

**Can I withdraw my stake?**

Yes, but subject to withdrawal delays.
