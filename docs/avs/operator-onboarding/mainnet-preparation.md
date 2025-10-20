# Mainnet Preparation Guide

:::danger URGENT - Time Sensitive
**DIN AVS Mainnet Launch: November 14th, 2025**

Your wallet must have existed for at least 17 days to access EigenLayer on mainnet. You must begin onboarding **IMMEDIATELY** to be ready for launch. Starting after October 27th means missing the mainnet launch.
:::

## Critical Timeline

| Date | Event | Action Required |
|------|-------|-----------------|
| **NOW** | Preparation Window | Start onboarding immediately |
| **Oct 27** | Latest Start Date | Absolute deadline to begin |
| **Nov 14** | Mainnet Launch | DIN AVS goes live |

### Why October 27th?

```
November 14 (Launch)
    ↑
17 days wallet age requirement
    ↑
October 27 (Absolute latest wallet creation)
    ↑
Time for onboarding steps
    ↑
October 24-26 (Realistic latest start)

RECOMMENDATION: START TODAY
```

## Immediate Action Items

### Today (Priority Order)

1. **Create New Wallet**
   - Generate brand new EOA
   - Never used with any AVS
   - Secure private keys
   - Document wallet address

2. **Start Fireblocks Setup** (If using)
   - Contact Fireblocks for account
   - Begin KYC/verification process
   - [Fireblocks Documentation](https://docs.eigencloud.xyz/products/eigenlayer/operators/howto/registeroperators/register-operator-with-fireblocks)

3. **Secure ETH**
   - Minimum 1 ETH (EigenLayer recommendation)
   - Transfer to operator wallet

4. **Begin Registration**
   - Access [app.din.build](https://app.din.build)
   - Start Step 1 immediately

## The Golden Rule: One Wallet, One AVS

:::danger Critical Requirement
Your mainnet operator wallet must be:
- **Brand new** - Never used before
- **Dedicated** - Only for DIN AVS
- **Isolated** - No other AVS associations
- **Permanent** - Cannot be changed later

Using a wallet associated with other AVSs will cause operational failures.
:::

## Wallet Setup Options

### Option 1: Hardware Wallet (Recommended)
- Use Ledger or Trezor
- Create new derivation path
- Document recovery phrase securely

### Option 2: Fireblocks MPC (Enterprise)
- Superior security for institutions
- Multi-party computation
- No single point of failure

### Option 3: Software Wallet (Not Recommended)
- Higher risk profile
- Use only if hardware unavailable

## ETH Requirements

- **Minimum**: 1 ETH in wallet (EigenLayer recommendation)
- **Timing**: Have ETH ready before starting

Specific stake amounts will be calculated during Step 2.

## Infrastructure Preparation

While completing onboarding:
- Set up RPC nodes for chosen networks
- Configure high availability
- Implement monitoring
- Prepare team for operations

### Operator Set Selection

:::info Initial Period Guidance
For the first period of the DIN AVS, the DIN admins will guide you on which operator sets to participate in based on your DIN router traffic history. This ensures optimal network coverage and performance based on proven traffic patterns.
:::

## Mainnet vs Testnet Differences

| Aspect | Testnet | Mainnet |
|--------|---------|---------|
| **Wallet** | Any wallet | Fresh, dedicated wallet |
| **Wallet Age Requirement** | None | Must exist for 17 days to access EigenLayer |
| **ETH** | Test ETH | Real ETH |
| **Allocation Delay** | Customizable (0 default) | Customizable (0 default) |
| **Slashing** | No real loss | Real economic risk |
| **Performance** | Relaxed SLAs | Strict SLAs |

## Common Mainnet Pitfalls

### Fatal Mistakes
❌ Using wallet from another AVS
❌ Starting after October 27th
❌ Insufficient ETH for gas
❌ Wrong network configuration

### Costly Errors
⚠️ Not using hardware wallet
⚠️ Delayed Fireblocks setup
⚠️ Underestimating gas costs
⚠️ Poor allocation strategy

## Getting Help

**For Immediate Issues:**
- DIN Slack: #din-general

**For Technical Questions:**
- DIN documentation (you're here!)
- Video tutorials (linked in each step)

## Final Reminders

:::warning Critical Success Factors
1. **Start TODAY** - Every day counts
2. **New wallet only** - No exceptions
3. **17-day requirement** - For wallet age, not allocation delay
4. **November 14 launch** - Fixed date
5. **No second chances** - Get it right first time
:::

## Ready to Start?

If you haven't already:

1. **RIGHT NOW**: Create your mainnet operator wallet
2. **NEXT**: Check all [Prerequisites](./prerequisites.md)
3. **THEN**: Begin [Step 1: Register as Operator](./step-1-register-operator.md)
4. **URGENT**: Complete all steps before October 27th

Time is running out. Start your mainnet onboarding immediately!

---

*Questions? Join #din-general Slack for immediate assistance. Time is critical - don't delay!*