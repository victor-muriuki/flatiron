import React from 'react';
// fucntion to handle record deletion
function TransactionRow({ transaction, onDelete }) {
  const handleDelete = () => {
    onDelete(transaction.id);
  };

  return (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TransactionRow;
