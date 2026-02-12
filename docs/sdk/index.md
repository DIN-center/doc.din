---
title: SDK overview
sidebar_position: 0
---

# DIN TypeScript SDK

The DIN TypeScript SDK (`@din-center/din-sdk-ts`) provides a client for interacting
with DIN network services, featuring integrated
[x402](https://www.x402.org/) payment protocol for automatic token purchasing and
authentication.

## Features

- **JSON-RPC and REST support** - make requests to any DIN-supported blockchain service.
- **Automatic token management** - purchase and renew authentication tokens via x402 payments.
- **Manual and auto-renewal modes** - choose between explicit token control or set-and-forget convenience.
- **Graceful degradation** - fall back to Discovery Mode (rate-limited, no auth) when token operations fail.
- **Retry logic** - configurable automatic retries for transient failures (5xx, timeouts, network errors).
- **File-based token caching** - share tokens between SDK and CLI usage.

## Install

```bash
npm install @din-center/din-sdk-ts
```

## Quick example

```typescript
import { DinClient } from "@din-center/din-sdk-ts";

const client = new DinClient({
  privateKey: process.env.PRIVATE_KEY,
  autoRenewToken: true,
});

const response = await client.request("ethereum-mainnet", {
  body: { jsonrpc: "2.0", method: "eth_blockNumber", params: [], id: 1 },
});

console.log(response.data);
```

## Next steps

- [Getting started](./how-to/getting-started.md) - installation, configuration modes, and first requests.
- [SDK documentation](./how-to/documentation.md) - complete configuration reference, retry logic, and token management.
- [Error handling](./how-to/error-handling.md) - error classes, status codes, and debugging patterns.
- [API reference](api/index.md) - auto-generated TypeScript API documentation.
