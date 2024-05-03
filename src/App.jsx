import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (title, dec, date) => {
    if (title && dec && date) {
      setMainTask([...mainTask, { title, dec, date }]);
    }
  };

  useEffect(() => {
    console.log("Component re-rendered due to mainTask change:");
  }, [mainTask]);

  const deleteHandler = (i) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(i, 1);
    setMainTask(updatedTasks);
  };

  return (
    <>
      <Form onSubmit={submitHandler} />
      <List tasks={mainTask} onDelete={deleteHandler} />
    </>
  );
}

export default App;
