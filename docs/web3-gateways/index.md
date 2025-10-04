# Web3 gateways

TO DO: Add more information about web3 gateways and routers.

---

Web3 gateways can:

- Authenticate with the DIN Router using the DIN Authentication Protocol.
- Request and receive access to services available on the DIN Router.
- Consume the OpenTelemetry Collector from the DIN Router for only the services the gateway is accessing and only for the requests that are coming from that specific gateway.
- Receive data from the [watcher](../watchers/index.md) in order to serve as an additional verification on the requests served by the DIN Router to the gateway.
- Implement session ID to ensure consistency of responses.
- Access the DIN Observability Dashboard (includes the OpenTelemetry Collector data).
- Use open channels to raise any technical issues.

### DIN touchpoints

![Web3 gateways](/img/web3-gateways.png)

From a component perspective, DIN aims to make the experience of running a Router as seamless and configurable as possible.

- Offer a Node Kit to run your own router with your own identity, payment mechanisms, and routing configuration.
- Offer the ability to run on an existing router with the customization offered by another gateway (e.g. Infura or Rivet) - this is the beta program.
- Dynamically choose RPC network endpoints with dynamic pricing.
- Monitor usage through a localhost or external app.
- Manage payments through your localhost or external app.
- Engage with the marketplace for payments and credit commitments.
- Work with our team across different support services.
