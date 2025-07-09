'use client';
import React from 'react';
import { useGlobalContext } from '@/app/Contex';

const Search = () => {
  const { query,hits, dispatch } = useGlobalContext();

  const handleChange = (e) => {
    dispatch({ type: 'SEARCH_QUERY', payload: e.target.value });
  };


  const filterval =
  query.trim() == "" ? [] :
  hits.filter((item) => item.title?.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search stories..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul>
        {filterval.map((currElm, item) =>(
          <li key={item}>{currElm.title}</li>
       ))

        }
      </ul>
    </div>
  );
};

export default Search;
