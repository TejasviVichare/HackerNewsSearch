'use client';
import { useGlobalContext } from '@/app/Contex';
import React from 'react';

const Pagination = () => {
  const { page, nbPages, dispatch } = useGlobalContext();

  return (
    <div className="flex items-center justify-center mt-6 space-x-4">
      <button
        onClick={() => dispatch({ type: 'PREV_PAGE' })}
        disabled={page === 0}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        ◀ Prev
      </button>

      <span className="text-sm font-medium text-gray-700">
        Page <span className="font-semibold">{page + 1}</span> of {nbPages}
      </span>

      <button
        onClick={() => dispatch({ type: 'NEXT_PAGE' })}
        disabled={page >= nbPages - 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next ▶
      </button>
    </div>
  );
};

export default Pagination;
