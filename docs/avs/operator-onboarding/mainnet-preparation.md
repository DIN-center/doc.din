---
description: Instructions for preparing for mainnet launch
---

# Prepare for mainnet launch

:::danger Time Sensitive - DIN AVS Mainnet Launch: November 14th, 2025

Operators must begin onboarding with their wallets immediately due to a 17-day operator allocation delay. October 27, 2025 is the absolute latest
to create your wallets and onboard in time for mainnet launch.

**Critical: Create and register TWO wallets (primary + backup) with EigenLayer.** If your primary wallet encounters issues during onboarding, you won't have time to activate a new wallet before the deadline.
:::

## Immediate action items

Perform the following steps before the October 27, 2025 cut-off for mainnet launch:

1. **Create TWO new wallets (primary + backup)**
    - Generate **two** new externally owned account wallets. Refer to the
[wallet setup options](#wallet-setup-options)
    - Each wallet must not be used with any other EigenLayer Autonomous Verifiable Service (AVS).
    - Secure your private keys for both wallets.
    - Document both wallet addresses.
    - **Why two wallets?** Due to the 17-day EigenLayer activation delay, having a backup wallet ensures you can still meet the mainnet launch
      deadline if any issues occur with your primary wallet during onboarding.

2. **Start Fireblocks setup** (optional)
   - Contact [Fireblocks](https://www.fireblocks.com/) for an account
   - Begin the KYC/verification process
   - [Install and register on EigenLayer using Fireblocks](https://docs.eigencloud.xyz/products/eigenlayer/operators/howto/registeroperators/register-operator-with-fireblocks)

3. **Secure ETH for both wallets**
   - Minimum 1 ETH per wallet (EigenLayer recommendation)
   - Transfer to both operator wallets

   Specific stake amounts will be calculated during [Step 2](./onboard/stake-tokens.md).

4. **Register BOTH wallets with EigenLayer**
   - Access the [DIN app](https://app.din.build)
   - Complete [Step 1](./onboard/register-operator.md) with your **primary wallet**
   - Complete [Step 1](./onboard/register-operator.md) again with your **backup wallet**
   - This ensures both wallets will be ready by mainnet launch in case you need to switch

## Wallet setup options

:::warning MetaMask Required for Onboarding
**You must use MetaMask wallet when connecting to the DIN app for AVS onboarding.** While you can store your keys in a hardware wallet or
Fireblocks, you must access them through MetaMask during the onboarding process. Onboarding may fail if you use other wallet connection methods
(WalletConnect, Coinbase Wallet, etc.).
:::

Use one of the following wallet options:

- **Option 1: Hardware wallet (recommended)**

  - Use Ledger or Trezor
  - Create new derivation path
  - Document recovery phrase securely

- **Option 2: [Fireblocks MPC]((https://docs.eigencloud.xyz/products/eigenlayer/operators/howto/registeroperators/register-operator-with-fireblocks)) (enterprise)**

  - Superior security for institutions
  - Multi-party computation
  - No single point of failure

- **Option 3: Software wallet (not recommended)**

  - Higher risk profile
  - Use only if hardware unavailable

## Prepare infrastructure

While completing onboarding, ensure your infrastructure is ready:

- Set up RPC nodes for chosen networks (operator sets)
- Configure high availability
- Implement monitoring

:::info Initial period guidance
During the initial period of the DIN AVS, DIN admins will recommend which operator sets you should
join based on your DIN Router traffic history. This helps ensure optimal network coverage and performance using observed traffic patterns.
:::

## Mainnet and testnet differences

Testnet and mainnet have different risk, funding, and activation profiles. Use Sepolia testnet to
validate your setup end to end with test funds, then move to mainnet when you are ready to stake real
assets and accept slashing risk.

|  | Testnet | Mainnet |
|--------|---------|---------|
| **Wallet** | Any EOA wallet (MetaMask recommended) | Two new EOA wallets (primary + backup), dedicated to DIN AVS |
| **Wallet connection** | MetaMask required for onboarding | MetaMask required for onboarding |
| **Wallet age requirement** | None | Both wallets must be registered on EigenLayer for 17 days before activation |
| **Funding** | Testnet ETH | ETH |
| **Allocation delay** | Customizable (0 default) | Customizable (0 default) |
| **Slashing** | No real loss | Real economic risk |
| **Performance** | Relaxed service level agreements | Strict service level agreements |

## Common mainnet pitfalls

### Fatal mistakes

- **Using a non-MetaMask wallet connection**

    _Fix_: Always connect through MetaMask when onboarding in the DIN app. You can use hardware wallets or Fireblocks for key storage, but connect
    them through MetaMask. Other wallet providers (WalletConnect, Coinbase Wallet, etc.) may cause onboarding to fail.

- **Reusing a wallet from another AVS**

    _Fix_: Use a fresh, DIN-dedicated EOA for mainnet. Do not reuse keys/accounts tied to any other AVS.

- **Wrong network configuration**

    _Fix_:  Double check your network configurations when selecting your operator set.

### Costly errors

- **Not creating a backup wallet**

    _Fix_: Create and register **two** wallets with EigenLayer. If your primary wallet encounters issues during onboarding (e.g., transaction
    failures, wrong configuration), you won't have time to create and activate a new wallet before the November 14th deadline due to the 17-day
    activation period.

- **Starting after October 27th, 2025**

    _Fix_: Plan for EigenLayer's protocol activation delay (~17 days). Start by Oct 27, 2025 to be
    active by Nov 14, 2025.

- **Insufficient ETH for gas**

    _Fix_: Pre-fund your operator wallet with buffered ETH (gas + safety margin). Monitor fees; top
    up before critical steps.

- **Not using hardware wallet**

   _Fix_: Prefer Ledger/Trezor or MPC, enforce approvals/policies, and restrict who can sign mainnet
   transactions.

- **Delayed Fireblocks setup**

    _Fix_: Start KYC and workspace setup early; test a full registration flow before deadline.

- **Poor allocation strategy**

    _Fix_: Set the default allocation delay to `0` (see [Step 3](./onboard/allocation-delay.md)) unless you
    need an operations buffer; size and place stake where you can meet SLAs, and avoid over-concentration
    or thin coverage.
