export const deleteAll = () => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch("http://localhost:5000/api/v1/tasks", requestOptions).catch((error) => {
    console.log("error: ", error);
  });
};
