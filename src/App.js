import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const initialTransactions = require('./db.json').transactions;
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ date: '', description: '', category: '', amount: 0 });
  };

  const handleInputChange = (field, value) => {
    setNewTransaction({ ...newTransaction, [field]: value });
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Transaction App</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TransactionTable transactions={filteredTransactions} onDelete={handleDelete} />
      <AddTransactionForm
        newTransaction={newTransaction}
        onInputChange={handleInputChange}
        onAddTransaction={addTransaction}
      />
    </div>
  );
}

export default App;
