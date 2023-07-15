/** @format */

"use client";

import React from "react";

function TextInput({ name, change, value, placeholder, type }) {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
        Video {name}
      </label>
      <input
        onChange={change}
        value={value}
        type={type}
        id={name}
        name={name}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default TextInput;
