---
description: Instructions for onboarding to mainnet
---

# Onboard to mainnet

DIN launched its mainnet AVS on November 17, 2025. Follow this guide to onboard as a mainnet operator.

:::warning 17-day activation period
Onboarding an operator on mainnet involves a 17-day activation period.
Create and register TWO wallets (primary + backup) with EigenLayer.
If your primary wallet encounters issues during onboarding, the backup wallet prevents wasting the 17-day period.
:::

:::info Video tutorial
[Watch the mainnet onboarding tutorial.](https://www.loom.com/share/db796cf0b89b40b0961595f961cb1672?sid=daf8a0db-1325-444e-95b1-aeb166f1c635)
:::

## Initial action items

Complete the following steps to begin onboarding:

1. **Create TWO new wallets (primary + backup):**
    - Generate **two** new externally owned account wallets. Refer to the
[wallet setup options](#wallet-setup-options).
    - Each wallet must not be used with any other EigenLayer Autonomous Verifiable Service (AVS).
    - Secure your private keys for both wallets.
    - Document both wallet addresses.
    - **Why two wallets?** EigenLayer requires a 17-day activation period for each new wallet.
      If your primary wallet encounters issues during onboarding, having a backup wallet decreases the risk of wasting the 17-day period.

2. **Secure ETH for both wallets:**
   - Minimum 1 ETH per wallet (EigenLayer recommendation).
   - Transfer to both operator wallets.

   Specific stake amounts are calculated during [Step 2](./onboard/stake-tokens.md).

3. **Register BOTH wallets with EigenLayer:**
   - Access the [DIN app](https://app.din.build).
   - Complete [Step 1](./onboard/register-operator.md) with your **primary wallet**.
   - Complete [Step 1](./onboard/register-operator.md) again with your **backup wallet**.
   - This ensures both wallets are ready for activation.

   :::note
   Begin with Step 1 (EigenLayer registration) to start the 17-day activation period. Complete Steps 2-5 while waiting for activation.
   :::

## Configuration steps

Before starting Step 1 registration, configure the DIN app for mainnet:

1. **Switch MetaMask to Ethereum Mainnet:**
   - Open MetaMask and switch from Sepolia to Ethereum Mainnet network.

2. **Select DIN Mainnet configuration:**
   - In the DIN app, go to AVS settings.
   - Select **DIN Mainnet** from the AVS configuration dropdown.

3. **Verify network settings before registration:**
   - When you open the TXTX page for Step 1, confirm **Mainnet** is displayed.
   - Ensure your wallet shows the correct mainnet address and ETH balance.

## Wallet setup options

:::warning MetaMask Required for TXTX Onboarding
**You must use MetaMask wallet when connecting to the DIN app for AVS onboarding.** TXTX is only proven to work reliably with MetaMask, and we strongly recommend
operators use MetaMask for their onboarding TXTX wallet interface. While you can store your keys in a hardware wallet, you must access them through MetaMask
during the onboarding process. Onboarding will fail if you use other wallet connection methods (WalletConnect, Coinbase Wallet, etc.).
:::

Use one of the following wallet options:

- **Option 1: Hardware wallet (recommended)**

  - Use Ledger or Trezor
  - Create new derivation path
  - Document recovery phrase securely

- **Option 2: Software wallet**

  - Higher risk profile
  - Use only if hardware unavailable

## Prepare infrastructure

While completing onboarding, ensure your infrastructure is ready:

- Set up RPC nodes for chosen networks (operator sets).
- Configure high availability.
- Implement monitoring.

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

    _Fix_: Always connect through MetaMask when onboarding in the DIN app. You can use hardware wallets for key storage, but connect
    them through MetaMask. Other wallet providers (WalletConnect, Coinbase Wallet, etc.) will cause onboarding to fail.

- **Reusing a wallet from another AVS**

    _Fix_: Use a fresh, DIN-dedicated EOA for mainnet. Do not reuse keys/accounts tied to any other AVS.

- **Wrong network selected during registration**

    _Fix_: Before starting Step 1, switch MetaMask from Sepolia to Ethereum Mainnet AND select **DIN Mainnet** in the app's AVS configuration.
    Verify **Mainnet** is displayed in the TXTX page before proceeding. Registering on the wrong network wastes the 17-day activation period.

### Costly errors

- **Not creating a backup wallet**

    _Fix_: Create and register **two** wallets with EigenLayer. If your primary wallet encounters issues during onboarding (for example, transaction
    failures, wrong configuration), having a backup wallet decreases the risk of wasting the 17-day activation period.

- **Insufficient ETH for gas**

    _Fix_: Pre-fund your operator wallet with buffered ETH (gas + safety margin). Monitor fees; top
    up before critical steps.

- **Not using hardware wallet**

   _Fix_: Prefer Ledger/Trezor or MPC, enforce approvals/policies, and restrict who can sign mainnet
   transactions.

- **Poor allocation strategy**

    _Fix_: Set the default allocation delay to `0` (see [Step 3](./onboard/allocation-delay.md)) unless you
    need an operations buffer; size and place stake where you can meet SLAs, and avoid over-concentration
    or thin coverage.
