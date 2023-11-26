import React, { useState } from 'react';


function App() {
  const initialTransactions = require('./db.json').transactions;
  //useState to load table
  const [transactions, setTransactions] = useState(initialTransactions);
  //usestate  to update transactions
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });


//spread the table and update with new transaction
  const addTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ date: '', description: '', category: '', amount: 0 });
  };

    
// useSatefor the searchbar
const [searchTerm, setSearchTerm] = useState('');

//filter description key using seaech input
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div>
      <h1>Transaction App</h1>

      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Transaction</h2>
      <div>
        <label>Date:</label>
        <input
          type="text"
          value={newTransaction.date}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, date: e.target.value })
          }
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={newTransaction.description}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, description: e.target.value })
          }
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={newTransaction.category}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, category: e.target.value })
          }
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
        />
      </div>
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );
}

export default App;
