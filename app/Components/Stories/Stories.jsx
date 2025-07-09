"use client";
import { useGlobalContext } from "@/app/Contex";
import React from "react";

const Stories = () => {
const { hits, isLoading } = useGlobalContext(); // no need for .state

  if (isLoading) {
    return <p className="text-center text-xl font-semibold py-10">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-1 gap-6">
      {hits.map((curr, id) => {
        const { title, author, created_at, url } = curr;

        // Skip empty titles
        if (!title) return null;

        return (
          <div
            key={id}
            className="border border-gray-300 rounded-xl p-5 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-bold mb-2 text-indigo-600">{title}</h2>
            <p className="text-sm text-gray-700 mb-1">By: <span className="font-medium">{author}</span></p>
            <p className="text-sm text-gray-500 mb-3">
              Published: {new Date(created_at).toLocaleDateString()}
            </p>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                Read Full Article
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
