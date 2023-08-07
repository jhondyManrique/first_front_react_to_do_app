export const doneTask = (task_id) => {
  var requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  };
  fetch(`http://localhost:5000/api/v1/tasks/${task_id}`, requestOptions).catch(
    (error) => console.log("error: ", error)
  );
};
