import { useState } from "react";
import { deleteAll } from "./services/deleteAll";
import { viewAllTasks } from "./services/viewAllTasks";
import { viewOne } from "./services/viewone";
import { useEffect } from "react";
import { Button } from "./common/Buttons";
import { Table } from "./common/Table";
import { Header } from "./common/Header";
import { LinkButton } from "./common/Buttons";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleViewAll = async () => {
    try {
      const result = await viewAllTasks();
      setTasks(result);
    } catch (error) {
      console.log("Error while fetching tasks: ", error);
    }
  };

  const handleViewOne = async () => {
    try {
      const result = await viewOne(input);
      setTasks([result]);
    } catch (error) {
      console.log("Error while fetching tasks: ", error);
    }
  };
  const handleDeleteAll = async () => {
    try {
      deleteAll();
      const result = await viewAllTasks();
      setTasks(result);
    } catch (error) {
      console.log("Error while fetching tasks: ", error);
    }
  };

  useEffect(() => {
    handleViewAll();
  }, []);

  return (
    <>
      <Header />
      <LinkButton link="/add" name="ADD" />
      <Button
        nameButton={"view all"}
        onClick={() => {
          handleViewAll();
        }}
      />
      <Button
        nameButton={"view one"}
        onClick={() => {
          handleViewOne();
        }}
      />
      <Button
        nameButton={"delete all"}
        onClick={() => {
          handleDeleteAll();
        }}
      />
      <input
        type="text"
        placeholder="write id or title"
        onChange={(e) => setInput(e.target.value)}
      />
      <Table tasks={tasks} input={input} />
    </>
  );
};
