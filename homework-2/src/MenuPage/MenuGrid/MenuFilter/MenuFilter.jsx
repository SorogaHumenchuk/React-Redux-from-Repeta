import React from 'react';

const MenuFilter = ({ onFilterChange, filter }) => (
  <input
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder="search"
  />
);

export default MenuFilter;
