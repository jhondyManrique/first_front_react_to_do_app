import { deleteTask } from "../services/deleteOneTask";
import { doneTask } from "../services/doneTask";
import { modifyTask } from "../services/modifyTask";
import { Button } from "./Buttons";

export const TableBody = ({ tasks, input }) => {
  const handleDone = (task_id) => {
    try {
      doneTask(task_id);
    } catch (error) {
      console.log("Error while fetching tasks: ", error);
    }
  };

  const handleModifyTask = (id, title) => {
    try {
      modifyTask(id, title);
    } catch (error) {
      console.log("Error while fetching tasks: ", error);
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
  return (
    <tbody>
      {tasks.map((task) => {
        const { task_id, task_title, task_status } = task;
        return (
          <tr key={task_id}>
            <td>{task_id}</td>
            <td>{task_title}</td>
            <td>{task_status}</td>
            <td>
              <Button
                nameButton={"DONE"}
                onClick={() => {
                  handleDone(task_id);
                }}
              />
            </td>
            <td>
              <Button
                nameButton={"MODIFY"}
                onClick={() => {
                  handleModifyTask(task_id, input);
                }}
              />
            </td>
            <td>
              <Button
                nameButton={"DELETE"}
                onClick={() => {
                  handleDeleteTask(task_id);
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
