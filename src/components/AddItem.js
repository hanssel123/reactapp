import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(itemName);
    setItemName('');
  };

  return (
    <div className="container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
