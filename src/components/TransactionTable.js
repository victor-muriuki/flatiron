import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
