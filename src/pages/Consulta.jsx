import React from 'react';
import './Search.css';

function Consulta({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="Search"
      placeholder="Buscar Por Numero"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { Consulta };