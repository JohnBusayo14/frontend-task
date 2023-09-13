// src/components/Search.js
import React, { useState } from 'react';
import Card from './Card';


const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filteredResults = data?.filter((item) =>
      item.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);

    if (filteredResults?.length === 0) {
      setError('No matching results found.');
    } else {
      setError('');
    }
  };

  return (
    <div className="p-4 w-full flex flex-col">
      <input
        type="text"
        placeholder="Search by teacher's name..."
        value={searchTerm}
        onChange={handleSearch}
        className=" input p-2 my-5 border rounded-md w-[30%] outline-none"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults?.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Search;
