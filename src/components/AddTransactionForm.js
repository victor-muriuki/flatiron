import React from 'react';

function AddTransactionForm({ newTransaction, onInputChange, onAddTransaction }) {
  return (
    <div>
      <h2>Add New Transaction</h2>
      <div>
        {/* //input tags for the date,description,category,amount */}
        <label>Date:</label>
        <input type="date" value={newTransaction.date} onChange={(e) => onInputChange('date', e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={newTransaction.description} onChange={(e) => onInputChange('description', e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={newTransaction.category} onChange={(e) => onInputChange('category', e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={newTransaction.amount} onChange={(e) => onInputChange('amount', e.target.value)} />
      </div>
      <button onClick={onAddTransaction}>Add Transaction</button>
    </div>
  );
}

export default AddTransactionForm;
