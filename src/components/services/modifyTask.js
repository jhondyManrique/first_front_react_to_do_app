export const modifyTask = (task_id, input) => {
  const data = { task_title: input };
  var requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(`http://localhost:5000/api/v1/tasks/${task_id}`, requestOptions).catch(
    (error) => console.log("error: ", error)
  );
};
