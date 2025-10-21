# x402 payments

DIN implements [x402](https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works), which is an internet-native payment protocol that was developed by Coinbase for fast, cheap, and AI-friendly payments.

DIN's implementation focuses on the AI agent's access to web3 API calls across multiple blockchain networks.
This creates a "headless gateway" implementation so the AI agent can access multiple RPC networks.

The main user stories covered include:

- As an AI agent, I can call a DIN endpoint (Ethereum, Base, Blast), pay with a token (USDC), and receive relevant JSON-RPC information for my response.
- As an AI agent, I can receive additional information on my DIN usage (transaction receipts, calls with the endpoint).
  This can be a redirect of the user to a DIN app for monitoring.
- As an AI agent, I can share additional information (website, code, docs). This can be a terminal-like response function.

![DIN x402](/img/x402.png)

This interaction shows how the AI agent can interact with multiple APIs in order to gather sufficient information to complete its requests.

## Web3 API marketplace with micro-payments

Web3 infrastructure still runs on traditional financial rails.
DIN node providers still need to pay for their bare metal electric bills or AWS bills with fiat invoices.
They still need to pay their DevOps teams with paychecks into their bank accounts.
A majority of SaaS still uses Stripe or some credit card service to pay for their web3 gateway monthly plans.
Utilities and resources prefer fiat.

DIN's mission is to reduce the cost of web3.
We want more companies to see the advantages of becoming web3 native end-to-end.
Building with x402 means that DIN can also convert some of the transactions between gateways and node providers to use more native web3 payments and keep track of better web3 treasuries.

## B2AI (Business to AI) market

AI agents are getting smarter and more resilient.
Just as trading bots quickly saturated the crypto market with native API calls, we will see more AI agents interact with more web3 resources across multiple networks.

Your AI agent orchestrator will be tasked with decisions that give it options for spending money to achieve results.
Instead of creating web2 accounts and storing passwords, it makes more sense for authentication to happen in a more headless way between decentralized services while paying the hosts of these services.
This is a recreation of the economic gas transaction fees for the dapps and services built on top of blockchains.
