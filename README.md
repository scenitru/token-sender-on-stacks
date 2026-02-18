# Stacks Token Sender DApp

Simple on-chain token sending DApp on Stacks blockchain.

## Repository Structure


## Contract

- `token-sender.clar` — token deposit and send contract
- Public functions:
  - `deposit(amount)` → deposit tokens
  - `send-tokens(to, amount)` → send tokens to another user
  - `get-balance(user)` → check balance

## Frontend

- Uses `@stacks/connect` for wallet connection
- Uses `@stacks/transactions` to call contract functions
- UI allows deposit and sending of tokens

## Running Locally

1. Go to frontend folder:
2. Install dependencies:
3. Start the project:
> Browser opens localhost with the Token Sender DApp
2026-02-14 20:58:54 - added log
2026-02-14 20:59:14 - refined validation
2026-02-14 20:59:23 - updated sender function
2026-02-14 20:59:48 - added log
2026-02-14 20:59:58 - updated sender function
2026-02-14 21:00:18 - added log
2026-02-14 21:46:11 - refined validation
2026-02-14 21:46:21 - updated sender function
2026-02-14 21:46:27 - refined validation
2026-02-15 00:14:54 - added log
2026-02-15 00:15:05 - refined validation
2026-02-15 00:15:23 - refined validation
2026-02-15 07:33:22 - updated sender function
2026-02-15 07:33:27 - updated sender function
2026-02-15 07:33:33 - updated sender function
2026-02-15 07:33:44 - added log
2026-02-15 07:34:11 - added log
2026-02-15 08:29:25 - refined validation
2026-02-15 13:59:25 - refined validation
2026-02-15 13:59:30 - updated sender function
2026-02-15 13:59:52 - refined validation
2026-02-15 14:00:15 - added log
2026-02-15 14:00:23 - updated sender function
2026-02-15 15:09:44 - added log
2026-02-15 15:10:04 - added log
2026-02-15 15:10:14 - refined validation
2026-02-15 16:05:35 - updated sender function
2026-02-15 16:05:48 - refined validation
2026-02-15 16:06:10 - refined validation
2026-02-15 16:06:18 - added log
2026-02-15 16:06:29 - updated sender function
2026-02-15 16:06:36 - refined validation
2026-02-15 17:02:18 - added log
2026-02-15 17:02:23 - added log
2026-02-15 17:02:59 - added log
2026-02-15 17:03:06 - refined validation
2026-02-15 18:01:19 - refined validation
2026-02-15 18:01:26 - added log
2026-02-15 18:01:40 - updated sender function
2026-02-15 18:02:17 - updated sender function
2026-02-15 18:02:23 - updated sender function
2026-02-15 18:02:37 - updated sender function
2026-02-15 18:02:43 - added log
2026-02-15 20:20:10 - updated sender function
2026-02-15 20:20:21 - added log
2026-02-15 20:21:32 - updated sender function
2026-02-15 20:22:10 - added log
2026-02-15 20:22:26 - updated sender function
2026-02-15 20:24:25 - updated sender function
2026-02-15 20:24:48 - refined validation
2026-02-15 20:25:36 - updated sender function
2026-02-15 20:26:39 - refined validation
2026-02-15 20:27:18 - updated sender function
2026-02-15 20:27:25 - refined validation
2026-02-16 10:02:58 - refined validation
2026-02-16 10:03:39 - refined validation
2026-02-16 10:03:46 - refined validation
2026-02-16 10:03:53 - added log
2026-02-16 10:04:55 - added log
2026-02-16 10:05:15 - updated sender function
2026-02-16 10:06:14 - added log
2026-02-16 10:06:28 - added log
2026-02-16 10:08:14 - added log
2026-02-16 10:09:03 - added log
2026-02-16 10:09:14 - added log
2026-02-16 10:09:38 - refined validation
2026-02-16 10:09:52 - updated sender function
2026-02-16 14:09:23 - updated sender function
2026-02-16 14:09:49 - updated sender function
2026-02-16 14:10:12 - updated sender function
2026-02-16 14:10:28 - refined validation
2026-02-16 14:10:48 - updated sender function
2026-02-16 14:11:23 - refined validation
2026-02-16 14:11:31 - refined validation
2026-02-16 14:12:31 - added log
2026-02-16 14:12:51 - updated sender function
2026-02-16 14:13:04 - refined validation
2026-02-16 14:14:02 - added log
2026-02-16 14:14:32 - added log
2026-02-16 14:16:20 - added log
2026-02-16 14:16:44 - added log
2026-02-16 14:17:31 - updated sender function
2026-02-16 14:17:46 - updated sender function
2026-02-16 14:18:03 - added log
2026-02-16 14:18:14 - added log
2026-02-16 14:18:23 - updated sender function
2026-02-16 20:26:08 - added log
2026-02-16 20:26:19 - updated sender function
2026-02-16 20:26:32 - added log
2026-02-16 20:26:56 - added log
2026-02-16 20:27:11 - refined validation
2026-02-16 20:27:19 - added log
2026-02-16 20:27:42 - updated sender function
2026-02-16 20:28:07 - refined validation
2026-02-16 20:28:33 - updated sender function
2026-02-16 20:28:41 - added log
2026-02-16 20:28:57 - refined validation
2026-02-16 20:30:30 - added log
2026-02-16 20:31:08 - updated sender function
2026-02-17 10:18:11 - updated sender function
2026-02-17 10:18:31 - added log
2026-02-17 10:18:42 - added log
2026-02-17 10:19:32 - refined validation
2026-02-17 10:19:41 - updated sender function
2026-02-17 10:19:52 - updated sender function
2026-02-17 10:19:59 - added log
2026-02-17 10:20:28 - added log
2026-02-17 10:20:44 - refined validation
2026-02-17 10:20:55 - updated sender function
2026-02-17 10:21:12 - refined validation
2026-02-17 10:21:46 - added log
2026-02-17 10:22:09 - updated sender function
2026-02-17 10:22:47 - refined validation
2026-02-17 10:23:11 - refined validation
2026-02-17 10:23:32 - refined validation
2026-02-17 10:24:07 - refined validation
2026-02-17 10:24:16 - updated sender function
2026-02-17 10:24:54 - updated sender function
2026-02-17 10:25:47 - added log
2026-02-17 10:26:56 - added log
2026-02-17 10:28:29 - refined validation
2026-02-17 10:29:45 - refined validation
2026-02-17 10:30:17 - updated sender function
2026-02-17 10:30:27 - refined validation
2026-02-17 10:30:38 - refined validation
2026-02-17 10:31:18 - updated sender function
2026-02-17 10:31:29 - refined validation
2026-02-17 10:31:37 - updated sender function
2026-02-17 10:31:44 - refined validation
2026-02-17 10:31:52 - added log
2026-02-17 10:32:09 - added log
2026-02-18 12:53:40 - refined validation
2026-02-18 12:54:24 - updated sender function
2026-02-18 12:54:33 - updated sender function
2026-02-18 12:55:41 - refined validation
2026-02-18 12:56:06 - refined validation
2026-02-18 12:57:07 - refined validation
2026-02-18 12:57:17 - refined validation
2026-02-18 12:58:08 - added log
