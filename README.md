# DIN documentation

This repository contains the documentation for the Decentralized Infrastructure Network (DIN), a protocol designed to provide decentralized, reliable, and economically secure blockchain API services.

## What's in this repository

- **DIN documentation**: Comprehensive guides covering DIN's architecture, gateway operations, AVS integration, and protocol specifications.
- **API reference**: Complete API documentation for supported blockchain networks.


## Running locally

You will need to have Node.js installed to run the live previews of the docs locally.


It is highly recommended that you use a tool like [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)
to manage Node.js versions on your machine.

### Installing recommended Node.js version with `nvm`

1. Follow the above instructions to install `nvm` on your machine, or visit the [nvm installation guide](https://github.com/nvm-sh/nvm#installing-and-updating).
2. Go to the root folder of this project in your terminal.
3. Run `nvm install` followed by `nvm use`. This will install the version specified by this project in the `.nvmrc` file.

### Running this project

1. Navigate to root folder of the project after installing Node.js
2. Run the following in sequence, which only needs to be done once:

   ```bash
   npm install
   ```

3. To preview and for every time afterward:

   ```bash
   npm run start
   ```

### Build

   ```bash
   npm run build
   ```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To run the local build you created, run:

   ```bash
   npm run serve
   ```

## Contributing

We welcome contributions to improve the DIN documentation. Please ensure you follow the
[style guidelines](https://docs-template.consensys.io/contribute/style-guide) before
submitting your changes.

## Built with

This documentation site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
