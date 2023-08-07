export const addTask = (input) => {
  let data = { task_title: input };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:5000/api/v1/tasks", requestOptions).catch(
    (error) => console.log("error", error)
  );
};
