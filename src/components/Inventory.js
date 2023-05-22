import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [editedItemId, setEditedItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState('');

  const addItem = (itemName) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    setEditedItemId(null);
  };

  const startEditItem = (itemId, itemName) => {
    setEditedItemId(itemId);
    setEditedItemName(itemName);
  };

  const cancelEditItem = () => {
    setEditedItemId(null);
    setEditedItemName('');
  };

  const saveEditedItem = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: editedItemName };
      }
      return item;
    });
    setItems(updatedItems);
    setEditedItemId(null);
    setEditedItemName('');
  };

  return (
    <div className="container">
      <h2>Inventory</h2>
      <button onClick={() => addItem('New Item')}>Add Item</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                {editedItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemName}
                    onChange={(e) => setEditedItemName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editedItemId === item.id ? (
                  <>
                    <button onClick={() => saveEditedItem(item.id)}>Save</button>
                    <button onClick={cancelEditItem}>Cancel</button>
                  </>
                ) : (
                  <>
                    <MdEdit
                      className="edit-icon"
                      onClick={() => startEditItem(item.id, item.name)}
                    />
                    <MdDelete
                      className="delete-icon"
                      onClick={() => deleteItem(item.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
