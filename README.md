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
