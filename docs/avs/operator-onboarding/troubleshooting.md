# Troubleshooting Guide

Quick solutions to common issues during DIN AVS onboarding.

## Login Issues

### Turnkey Code Not Received

- Wait 2-3 minutes
- Check spam folder
- Request code resend
- Try different browser

### Dashboard Won't Load

- Disable ad blockers
- Allow pop-ups for app.din.build
- Try incognito mode

## Wallet Issues

### MetaMask Won't Connect

- Unlock MetaMask first
- Check correct network
- Clear MetaMask activity data

### Wrong Network

- Testnet: Switch to Sepolia (Chain ID: 11155111)
- Mainnet: Switch to Ethereum Mainnet

## Step-Specific Issues

### Step 1: Registration

#### Already Registered Error

- Use "Check if registered" first
- If registered, skip to Step 2

#### TXTX Won't Load

- Allow pop-ups
- Disable extensions
- Clear cache

### Step 2: Staking

#### Not Allowlisted

- Check request status
- Contact #din-general if waiting over 24 hours

#### Token Conversion Failed

- Check gas fees included
- Try smaller amounts
- Verify contract addresses

#### Approval Stuck

- Check on Etherscan
- Speed up with higher gas
- Cancel and retry if needed

### Step 3: Allocation Delay

#### Wrong Delay Set

:::danger Critical
Cannot be changed once set! Must use new operator address if incorrect.
:::

#### Contract Not Found

- Verify correct network
- Sepolia: `0x42583067658071247ec8ce0a516a58f682002d07`

### Step 5: Allocate Stake

#### Custom Image Not Ready

- Contact DIN team in Slack
- Provide operator address and readiness confirmation

#### BLS Key Failed

- Restart workflow
- Clear browser cache
- Try different browser

#### Registration Failed

- Check allocation delay expired
- Verify gas sufficient
- Confirm previous steps complete

## Transaction Issues

### General Transaction Failures

- Increase gas limit
- Check ETH balance
- Wait for lower gas prices
- Verify network selection

### Session Timeout

- Click "Extend +30" before expiry
- If expired, restart the step
- Complete in one sitting

## Post-Onboarding

### Not Receiving Traffic

- Verify all steps completed
- Check allocation delay expired
- Test infrastructure connectivity
- Contact support team

## Getting Help

### When Contacting Support

Always provide:

1. Operator address
2. Step where issue occurred
3. Error messages (exact text)
4. Transaction hashes
5. Screenshots if applicable

### Support Channels

- **Primary**: #din-general on Slack
- **Documentation**: doc.din.app

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

---

If your issue isn't covered here, reach out in #din-general Slack.
