import React, { useState } from 'react';

const ProductList = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Product List</h2>
      <input type="text" value={search} onChange={handleSearch} placeholder="Search Products" />
      {/* Implementar la lógica para mostrar y eliminar productos */}
    </div>
  );
};

export default ProductList;