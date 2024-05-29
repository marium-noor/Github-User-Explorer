import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username) {
      onSearch(username);
    }
    setUsername('')
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="GitHub Username"
        className="border rounded-md p-2 w-1/2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-500 text-white p-2 rounded ml-2"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
