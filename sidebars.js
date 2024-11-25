/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  bittensorSidebar: [
    // 	{
    // 	type: 'link',
    // 	href: 'https://docs.bittensor.com',
    // 	label: "Search",
    // 	className: 'sidebarSearch', //  based on Class name it will add search component
    // },
    "index",
    "chain-rel-notes",
    "bittensor-rel-notes",
    "whats-new-in-docs",
    "questions-and-answers",
    {
      type: "category",
      label: "Learn Bittensor Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "learn/introduction",
        "learn/bittensor-building-blocks",
        "learn/anatomy-of-incentive-mechanism",
      ],
    },
    "errors-and-troubleshooting",
    {
      type: "category",
      label: "Get Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/installation",
        "getting-started/install-btcli",
        "getting-started/install-wallet-sdk",
        "getting-started/wallets",
      ],
    },
    {
      type: "category",
      label: "Subtensor Nodes",
      link: {type: "doc", id: "subtensor-nodes/index",},
      collapsible: true,
      collapsed: false,
      items: [
        "subtensor-nodes/subtensor-node-requirements",
        "subtensor-nodes/using-source",
        "subtensor-nodes/using-docker",
        "subtensor-nodes/subtensor-rate-limits",
        "subtensor-nodes/subtensor-storage-query-examples",
        "subtensor-nodes/subtensor-error-messages",
      ],
    },
  "bittensor-networks",
    {
      type: "category",
      label: "Validating and Mining",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/checklist-for-validating-mining",
        "subnets/register-validate-mine",
        "subnets/recycled-tao",
        "subnets/working-with-keys",
        "subnets/child-hotkeys",
        "subnets/asyncio",
        "subnets/commit-reveal",
        "subnets/consensus-based-weights",
        "subnets/schedule-coldkey-swap",
      ],
    },
    {
      type: "category",
      label: "Staking and Delegation",
      collapsible: true,
      collapsed: false,
      link: {type: "doc", id: "staking-and-delegation/index",},
      items: ["staking-and-delegation/staking-polkadot-js", "staking-and-delegation/delegation", "staking-and-delegation/using-ledger-hw-wallet"],
    },
    {
      type: "category",
      label: "Subnet Tutorials",
      collapsible: true,
      collapsed: false,
      items: [
        "tutorials/basic-subnet-tutorials",
        "tutorials/ocr-subnet-tutorial",
      ],
    },
    {
      type: "category",
      label: "Subnets",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/create-a-subnet", 
        "subnets/dissolve-a-subnet",
        "subnets/subnet-hyperparameters",
        "subnets/working-with-subnets",
        "subnets/walkthrough-prompting",
      ],
    },
    {
      type: "category",
      label: "EVM Tutorials",
      link: {type: "doc", id: "evm-tutorials/index",},
      collapsible: true,
      collapsed: false,
      items: [
        "evm-tutorials/evm-on-subtensor",
        "evm-tutorials/install",
        "evm-tutorials/evm-testnet-with-metamask-wallet",
        "evm-tutorials/evm-localnet-with-metamask-wallet",
        "evm-tutorials/transfer-from-metamask-to-ss58",
        "evm-tutorials/transfer-between-two-h160-accounts",
        "evm-tutorials/hardhat-config-for-subtensor-evm",
        "evm-tutorials/staking-precompile",
        "evm-tutorials/ed25519-verify-precompile",
      ],
    },
    "btcli",
    "bt-api-ref",
    "emissions",
    "root-network",
    // "reference/bittensor-api-ref",
    "yuma-consensus",
    "governance",
    "senate",
    "utilities",
    "glossary",
  ],
};

module.exports = sidebars;
