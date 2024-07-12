---
title: "Schedule Key Swap"
---

# Schedule Key Swap

This guide describes how to use the schedule coldkey swap feature. If you have a reason to believe that your wallet is at-risk as a result of the July 2nd attack, as described in [Bittensor Community Update — July 3, 2024](https://blog.bittensor.com/bittnesor-community-update-july-3-2024-45661b1d542d), we strongly recommend that you use this feature to transfer your funds to a secure wallet. This feature schedules your funds transfer from an at-risk wallet to a new secure wallet.

## Description

The schedule coldkey swap feature works as follows:

- The schedule coldkey swap feature enables you to schedule the swapping of old, potentially compromised, coldkey to a new coldkey.
- When you use this feature, it will not actually swap your TAO funds from the old coldkey to the new coldkey. It will only schedule the swap event. 
- All scheduled coldkey swaps will be executed on-chain. Your scheduled coldkey swap will execute on the mainnet exactly `7200 * 3` blocks (72 hours) after you successfully ran the `btcli wallet schedule_coldkey_swap` command.
- The old coldkey you used in the `btcli wallet schedule_coldkey_swap` will be locked when you schedule the swap. After the 72-hour period is elapsed your original coldkey will be unlocked entirely.
- This is a free transaction. **However, you need a balance of at least 0.1 TAO in your old coldkey, or one TAO staked, to initiate a coldkey swap to your new coldkey.**
- **For subnet owners**: You do not need any balance in your old coldkey to initiate a coldkey swap to your new coldkey. 
- **For validators**: If you have 500 TAO or more delegated then you do not need any balance in your old coldkey to initiate a coldkey swap to your new coldkey. 
- **For subnet owners**: Any subnet ownership from your old coldkey will move to the new coldkey.
- The delegated stake will be transferred from your old coldkey to the new coldkey.
- For those who were staking to a validator from their old coldkey, their staking TAO will transfer to the new coldkey. 

:::danger Do not run this command more than once using the same coldkey
:::


## Do not use this feature if

Do not use this feature if any of the following are true for you:

- If you have never used `btcli`, regardless of the Bittensor version, then do not use this feature. Your funds are safe.
- If you have never used Bittensor version 6.12.2, then do not use this feature. Your funds are safe.
- If you only used any wallet browser extension or only a wallet application such as below, then your funds are safe:
  - The Bittensor Wallet (for Chrome or iOS)
  - SafeWallet, Talisman, Polkadot Vault, Tensor Wallet, Nova Wallet, polkadot.js
  - Websites that utilize polkadot.js, such as Taostats.io, for staking unstaking
- If you hold your TAO only on exchanges, then your funds are safe. 
- If you installed Bittensor 6.12.2 not via PyPi package but directly from GitHub source, then do not use this feature. **Only the PyPi package of Bittensor 6.12.2 is malicious.**

### Use this feature only if 

Use this feature only if you downloaded the Bittensor PyPi package for the Bittensor version 6.12.2 and then performed any of the below operations.

  **Impacted btcli 6.12.2 operations**

  ```bash
  btcli stake add
  btcli stake remove
  btcli wallet transfer
  btcli root delegate
  btcli root undelegate
  btcli root set_take
  btcli subnet register
  ```

:::important reminder
If you installed Bittensor 6.12.2 not via PyPi package but directly from GitHub source, then do not use this feature. Only the PyPi package of Bittensor 6.12.2 is malicious.
:::

## Verifying if you have schedule coldkey swap feature

The schedule coldkey swap feature is available by default in the **Bittensor 7.3.0 and later versions**. See [Install Bittensor](../getting-started/installation.md) for upgrading Bittensor to the latest version.

To test if you have the schedule coldkey swap feature, run the below command:

```bash
btcli wallet --help
```

You should see `schedule_coldkey_swap` and `check_coldkey_swap` listed in the positional arguments. **This confirms that you can use the schedule coldkey swap feature.** If you do not see these options, then you do not have Bittensor **7.3.0** version, and you must install it.

---

## Using the feature

### Syntax

**This is syntax only. See the [Example](#example) below.**

```bash
btcli wallet schedule_coldkey_swap [--new_coldkey <new_coldkey_ss58_address>]
```
This command is used to **schedule** a swap of your coldkey to a new coldkey. You must specify the new coldkey address. You must first separately create a new coldkey before using it in this command.

- To create a new coldkey, see [Creating a coldkey using `btcli`](../getting-started/wallets.md#creating-a-coldkey-using-btcli).
- To see your coldkey's SS58 address, see [Listing all the local wallets](../getting-started/wallets#listing-all-the-local-wallets).

The command checks for the validity of the new coldkey and prompts for confirmation before proceeding with the scheduling process.

### Example

**On mainnet**:

```bash
btcli wallet schedule_coldkey_swap
```

**On testnet**:

```bash
btcli wallet schedule_coldkey_swap --subtensor.network=test
```

Sample output:

```bash
btcli wallet schedule_coldkey_swap
Enter wallet name (default): 
Enter new coldkey SS58 address: 5HM...Srw
⚠If you call this on the same key multiple times, the key will enter arbitration.
Enter password to unlock key: 
Good news. There has been no previous key swap initiated for your coldkey swap.
Do you want to schedule a coldkey swap to: 5HM..Srw? [y/n]: y
Successfully scheduled coldkey swap.
```

### For help

For help description, run:
```bash
btcli wallet schedule_coldkey_swap --help
```

## Checking your scheduled swap status

To check if your coldkey has been scheduled for swap or placed in arbitration, run the below command. Make sure you have pulled the latest from the `feat/arbitrage-coldkeys` branch to use the below `check_coldkey_swap` command:

```bash
btcli wallet check_coldkey_swap
```

## Arbitration

When multiple coldkey swaps involving the same coldkey are scheduled, the swap will not be performed when the mainnet opens. Instead, the swap will enter an arbitration stage, where the Senate votes to determine which coldkey swap should occur.