export const viewOne = (input) => {
  var requestOptions = {
    method: "GET",
    Headers: { "Content-Type": "application/json" },
  };
  return fetch(`http://localhost:5000/api/v1/tasks/${input}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));
};
