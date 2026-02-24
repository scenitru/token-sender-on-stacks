import { describe, it, expect, beforeEach } from "vitest";
import { Clarinet, Tx, Chain, Account, types } from "@hirosystems/clarinet-sdk";

describe("Simple Token Sender Contract", () => {
  let chain: Chain;
  let accounts: Map<string, Account>;
  let wallet1: Account;
  let wallet2: Account;

  beforeEach(() => {
    chain = new Chain();
    accounts = chain.accounts;
    wallet1 = accounts.get("wallet_1")!;
    wallet2 = accounts.get("wallet_2")!;
  });

  it("initial balance should be zero", () => {
    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "get-balance",
        [types.principal(wallet1.address)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectUint(0);
  });

  it("allows user to deposit tokens", () => {
    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "deposit",
        [types.uint(100)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectOk().expectAscii("Deposited");
  });

  it("updates balance after deposit", () => {
    chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "deposit",
        [types.uint(200)],
        wallet1.address
      ),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "get-balance",
        [types.principal(wallet1.address)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectUint(200);
  });

  it("allows sending tokens between users", () => {
    chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "deposit",
        [types.uint(500)],
        wallet1.address
      ),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "send-tokens",
        [types.principal(wallet2.address), types.uint(200)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectOk().expectAscii("Tokens sent");
  });

  it("deducts sender balance correctly", () => {
    chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "deposit",
        [types.uint(500)],
        wallet1.address
      ),
      Tx.contractCall(
        "simple-token-sender",
        "send-tokens",
        [types.principal(wallet2.address), types.uint(200)],
        wallet1.address
      ),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "get-balance",
        [types.principal(wallet1.address)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectUint(300);
  });

  it("adds to recipient balance correctly", () => {
    chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "deposit",
        [types.uint(500)],
        wallet1.address
      ),
      Tx.contractCall(
        "simple-token-sender",
        "send-tokens",
        [types.principal(wallet2.address), types.uint(200)],
        wallet1.address
      ),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "get-balance",
        [types.principal(wallet2.address)],
        wallet2.address
      ),
    ]);

    block.receipts[0].result.expectUint(200);
  });

  it("prevents sending more than balance", () => {
    chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "deposit",
        [types.uint(100)],
        wallet1.address
      ),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall(
        "simple-token-sender",
        "send-tokens",
        [types.principal(wallet2.address), types.uint(200)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectErr().expectUint(101);
  });
});
