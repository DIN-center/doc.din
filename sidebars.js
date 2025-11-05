// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "index" },
      collapsed: false,
      items: [
        "architecture",
        "roadmap",
        "x402-payments",
        "llms-txt"
      ]
    },
    {
      type: "category",
      label: "DIN as an AVS",
      link: { type: "doc", id: "avs/index" },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Onboard as an operator",
          link: { type: "doc", id: "avs/operator-onboarding/index" },
          items: [
            "avs/operator-onboarding/prerequisites",
            "avs/operator-onboarding/mainnet-preparation",
            {
              type: "category",
              label: "Onboard with the DIN app",
              link: { type: "doc", id: "avs/operator-onboarding/onboard/index" },
              collapsed: false,
              items: [
                "avs/operator-onboarding/onboard/register-operator",
                "avs/operator-onboarding/onboard/stake-tokens",
                "avs/operator-onboarding/onboard/allocation-delay",
                "avs/operator-onboarding/onboard/watchers",
                "avs/operator-onboarding/onboard/opt-in-avs"
              ]
            },
            "avs/operator-onboarding/troubleshoot"
          ]
        },
        "avs/slashing-and-rewards",
        "avs/operator-sets",
        "avs/veto-committee"
      ]
    },
    {
      type: "category",
      label: "Node providers",
      link: { type: "doc", id: "node-providers/index" },
      collapsed: true,
      items: []
    },
    {
      type: "category",
      label: "Watchers",
      link: { type: "doc", id: "watchers/index" },
      collapsed: true,
      items: [

      ]
    },
    {
      type: "category",
      label: "Web3 gateways",
      link: { type: "doc", id: "web3-gateways/index" },
      collapsed: true,
      items: [
        "web3-gateways/onboard",
        "web3-gateways/monitor-usage"
      ]
    }
  ]
};

module.exports = sidebars;
