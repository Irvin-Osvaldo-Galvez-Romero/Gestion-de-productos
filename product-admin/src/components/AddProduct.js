import React, { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar la lógica para agregar un producto
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;