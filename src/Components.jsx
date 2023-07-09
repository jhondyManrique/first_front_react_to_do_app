import { Title, SubTitle } from "./HeaderComponents";
import { TopArticle } from "./ArticleComponents";
import { useState } from "react";

export const Header = () => (
  <header>
    <Title />
    <SubTitle />
  </header>
);

export const Article = () => (
  <article>
    <TopArticle />
  </article>
);

export const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          let data = { task_title: input };
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
          fetch("http://localhost:5000/api/v1/tasks", requestOptions).catch(
            (error) => console.log("error", error)
          );
        }}
      >
        add
      </button>
      <button
        type="submit"
        onClick={() => {
          var requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };
          fetch("http://localhost:5000/api/v1/tasks", requestOptions)
            .then((response) => response.json())
            .then((result) => setTasks(result))
            .catch((error) => console.log("error: ", error));
        }}
      >
        view all
      </button>
      <button
        onClick={() => {
          var requestOptions = {
            method: "GET",
            Headers: { "Content-Type": "application/json" },
          };
          fetch(`http://localhost:5000/api/v1/tasks/${input}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              setTasks([result]);
            })
            .catch((error) => console.log("error:", error));
        }}
      >
        view one
      </button>
      <button
        type="submit"
        onClick={() => {
          const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          };
          fetch("http://localhost:5000/api/v1/tasks", requestOptions).catch(
            (error) => {
              console.log("error: ", error);
            }
          );
        }}
      >
        delete all
      </button>
      <input
        type="text"
        placeholder="write id or title"
        onChange={(e) => setInput(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col" colSpan="3">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const { task_id, task_title, task_status } = task;
            return (
              <tr key={task_id}>
                <td>{task_id}</td>
                <td>{task_title}</td>
                <td>{task_status}</td>
                <td>
                  <button
                    onClick={() => {
                      var requestOptions = {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                      };
                      fetch(
                        `http://localhost:5000/api/v1/tasks/${task_id}`,
                        requestOptions
                      ).catch((error) => console.log("error: ", error));
                    }}
                  >
                    DONE
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      const data = { task_title: input };
                      var requestOptions = {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      };
                      fetch(
                        `http://localhost:5000/api/v1/tasks/${task_id}`,
                        requestOptions
                      ).catch((error) => console.log("error: ", error));
                    }}
                  >
                    MODIFY
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      var requestOptions = {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                      };
                      fetch(
                        `http://localhost:5000/api/v1/tasks/${task_id}`,
                        requestOptions
                      ).catch((error) => console.log("error", error));
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const Span = () => (
  <span>
    <a href="contact.html ">Contact with us</a>
    <a href="aboutApp.html">about app v2</a>
  </span>
);
