import React, { useState } from 'react';
import { connectWallet } from './connect';
import { depositTokens, sendTokens } from './contract';

function App() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [sendAmount, setSendAmount] = useState(0);
  const [recipient, setRecipient] = useState('');

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Stacks Token Sender DApp</h1>
      <button onClick={connectWallet} style={{ margin: "5px" }}>Connect Wallet</button>

      <div style={{ marginTop: "10px" }}>
        <input type="number" placeholder="Deposit Amount" onChange={e => setDepositAmount(Number(e.target.value))} />
        <button onClick={() => depositTokens(depositAmount)}>Deposit</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input type="text" placeholder="Recipient Address" onChange={e => setRecipient(e.target.value)} />
        <input type="number" placeholder="Send Amount" onChange={e => setSendAmount(Number(e.target.value))} />
        <button onClick={() => sendTokens(recipient, sendAmount)}>Send Tokens</button>
      </div>
    </div>
  );
}

export default App;
