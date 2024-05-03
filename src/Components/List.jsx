import React, { useState } from "react";

export default function List({ tasks, onDelete }) {
  const deleteHandler = (i) => {
    onDelete();
  };

  let renderTask;

  if (tasks.length > 0) {
    renderTask = (
      <table class="w-[70%] ml-[15%]  bg-white">
        <thead class="bg-gray-800  text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              Title
            </th>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              DEscription
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Date
            </th>
            <th class="text-left py-3 px-4 mb-9 uppercase font-semibold text-sm">
              Action
            </th>
          </tr>
        </thead>

        <tbody class="text-gray-700">
          {tasks.map((task, i) => (
            <tr
              key={i}
              class="bg-white border-b text-bold text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="w-1/3 text-left text-xl text-bold py-3 px-4">
                {task.title}
              </td>
              <td class="w-1/3 text-left py-3 px-4">{task.dec}</td>
              <td class="text-left py-3 px-4">{task.date}</td>
              <button
                onClick={() => {
                  deleteHandler(i);
                }}
                class="inline-flex items-center mt-1 px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
              >
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    renderTask = (
      <table class="w-[70%] ml-[15%]  bg-white">
        <thead class="bg-gray-800  text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              Title
            </th>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              DEscription
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Date
            </th>
            <th class="text-left py-3 px-4 mb-9 uppercase font-semibold text-sm">
              Action
            </th>
          </tr>
        </thead>
        <h1>No Task Availible</h1>
      </table>
    );
  }

  return (
    <>
      <div className="w-[80%] flex justify-center items-center px-4 py-6  text-black">
        {renderTask}
      </div>
    </>
  );
}
