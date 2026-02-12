// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: "category",
      label: "Classes",
      items: [
        {
          type: "doc",
          id: "sdk/classes/DinClient",
          label: "DinClient"
        },
        {
          type: "doc",
          id: "sdk/classes/DinError",
          label: "DinError"
        },
        {
          type: "doc",
          id: "sdk/classes/DinConfigError",
          label: "DinConfigError"
        },
        {
          type: "doc",
          id: "sdk/classes/TokenManager",
          label: "TokenManager"
        }
      ]
    },
    {
      type: "category",
      label: "Interfaces",
      items: [
        {
          type: "doc",
          id: "sdk/interfaces/DinTokenInfo",
          label: "DinTokenInfo"
        },
        {
          type: "doc",
          id: "sdk/interfaces/Logger",
          label: "Logger"
        },
        {
          type: "doc",
          id: "sdk/interfaces/DinConfig",
          label: "DinConfig"
        },
        {
          type: "doc",
          id: "sdk/interfaces/DinRequestOptions",
          label: "DinRequestOptions"
        },
        {
          type: "doc",
          id: "sdk/interfaces/DinResponse",
          label: "DinResponse"
        }
      ]
    },
    {
      type: "category",
      label: "Variables",
      items: [
        {
          type: "doc",
          id: "sdk/variables/DEFAULT_GATEWAY_URL",
          label: "DEFAULT_GATEWAY_URL"
        },
        {
          type: "doc",
          id: "sdk/variables/DEFAULT_TIMEOUT",
          label: "DEFAULT_TIMEOUT"
        },
        {
          type: "doc",
          id: "sdk/variables/TOKEN_VALIDITY_BUFFER_SECONDS",
          label: "TOKEN_VALIDITY_BUFFER_SECONDS"
        },
        {
          type: "doc",
          id: "sdk/variables/TOKEN_TERMS",
          label: "TOKEN_TERMS"
        },
        {
          type: "doc",
          id: "sdk/variables/DEFAULT_TOKEN_TERM",
          label: "DEFAULT_TOKEN_TERM"
        },
        {
          type: "doc",
          id: "sdk/variables/DISCOVERY_MODE_RPS_LIMIT",
          label: "DISCOVERY_MODE_RPS_LIMIT"
        },
        {
          type: "doc",
          id: "sdk/variables/CACHE_VERSION",
          label: "CACHE_VERSION"
        },
        {
          type: "doc",
          id: "sdk/variables/VERSION",
          label: "VERSION"
        }
      ]
    }
  ]
};
module.exports = typedocSidebar.items;