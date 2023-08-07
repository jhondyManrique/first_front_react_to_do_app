export const viewAllTasks = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch("http://localhost:5000/api/v1/tasks", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
