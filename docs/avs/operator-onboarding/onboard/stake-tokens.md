---
description: How to complete Step 2 (stake tokens) in the DIN app during the onboarding process
---

# Step 2: Stake tokens

Deposit tokens into EigenLayer strategies to back your operator with economic security.

:::info Video tutorials

- [Allowlisting and allocations](https://www.loom.com/share/39a6e731504749eca9b5dff11db9a038?sid=b0b0942c-e3ee-4635-87cf-61f785a9933f)
- [Staking process](https://www.loom.com/share/871e1f969e664f73ae64f033d434ffce?sid=09ba1cf4-726b-4a44-8fd0-49f064edb364)

:::

## Prerequisites

- Completed Step 1
- Enough ETH for staking (amounts calculated in app)
- Ready to convert to stETH/WETH

## Steps

### Part A: Request allowlisting

1. Open the [DIN app](https://app.din.build)
2. Select **"Request access to participate in DIN"**
3. Select the operator sets from available networks (see table below)
4. Configure allocation percentages (must total 100%)
5. Submit request
6. Wait for approval (usually within 24 hours)

:::info Operator set selection
DIN admins will guide you on which operator sets to participate in based on your DIN router traffic history during the initial period.
:::

#### Available operator sets

| Set ID | Network Name |
|--------|-------------|
| 2 | Ethereum |
| 3 | Ethereum-holesky |
| 4 | blast-mainnet |
| 5 | blast-testnet |
| 6 | polygon |
| 7 | polygon-testnet |
| 8 | optimism-mainnet |
| 9 | optimism-sepolia |
| 10 | arbitrum-mainnet |
| 11 | arbitrum-mainnet-archive |
| 12 | arbitrum-sepolia-archive |
| 13 | avalanche-mainnet |
| 14 | mantle-mainnet |
| 15 | mantle-sepolia |
| 16 | zksync-mainnet |
| 17 | zksync-sepolia |
| 18 | bsc-mainnet |
| 19 | bsc-testnet |
| 20 | starknet-mainnet |
| 21 | starknet-sepolia |
| 22 | opbnb-mainnet |
| 23 | opbnb-testnet |
| 24 | base-mainnet |
| 25 | base-sepolia |
| 26 | scroll-mainnet |
| 27 | scroll-sepolia |
| 28 | solana-mainnet |
| 29 | solana-devnet |
| 30 | unichain-mainnet |
| 31 | unichain-sepolia |
| 32 | Swellchain-mainnet |
| 33 | Swellchain-testnet |
| 34 | Sei-mainnet |
| 35 | Sei-mainnet-archive |
| 36 | Hoodi |

### Part B: Prepare tokens

Based on your approved allocations, convert ETH to:

- **WETH**: Use any DEX or wrap directly
- **stETH**: Use Lido for mainnet, test contracts for testnet

The dashboard shows exact amounts needed.

### Part C: Stake tokens

1. Select **"Start Step 2"** in the DIN app.
2. Select **Open TXTX** to open the runbook.
3. For each strategy (WETH, stETH):
   1. Connect your wallet
   1. Approve the token spending
   1. Sign the transaction
   1. Deposit funds into the strategy
   1. Sign the transaction
4. Wait for confirmations

### 4. Completion

When successful:

- All strategies show **Complete**
- Download output file
- Step 2 shows ✓

## Output file example

Your output contains deposit details for each strategy:

```json
{
  "WETH Stable Token": {
    "deposit_amount": 1000000000000,
    "deposit_into_strategy_tx_hash": "0x...",
    "approved_amount": 1000000000000
  },
  "stETH Stable Token": {
    "deposit_amount": 1000000000000,
    "deposit_into_strategy_tx_hash": "0x...",
    "approved_amount": 1000000000000
  }
}
```

## Next step

Continue to [Step 3: Set allocation delay](./allocation-delay.md)
