import React, { useState } from "react";

function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const [date, setdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, dec, date);
    console.log(title);
    console.log(dec);
    console.log(date);
    setTitle("");
    setDec("");
    setdate("");
  };

  return (
    <>
      <h1 className="text-3xl bg-black text-white  text-center py-5 font-bold ">
        My Todo List
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 border-zinc-800 text-2xl m-8 px-4 py-2"
          placeholder="Enter the Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="border-2 border-zinc-800 text-2xl m-8 px-4 py-2"
          placeholder="Enter the Description"
          value={dec}
          onChange={(e) => setDec(e.target.value)}
        />

        <input
          type="date"
          className="border-2 border-zinc-800 text-2xl m-8 px-4 py-2"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
        <button class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          Add Task!
        </button>
      </form>
    </>
  );
}

export default Form;
