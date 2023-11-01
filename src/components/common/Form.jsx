import { useState } from "react";
import { addTask } from "../services/addTasks";

export const Form = () => {
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
        alert("tarea agregada con exito");
      }}
    >
      <label htmlFor="task_title">WRITE A NEW TASK TITLE .</label>
      <input
        id="task_title"
        type="text"
        name="task_title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};
