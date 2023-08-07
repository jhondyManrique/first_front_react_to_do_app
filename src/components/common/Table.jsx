import { TableBody } from "./TableBody";

export const Table = ({ tasks, input }) => {
  return (
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
      <TableBody tasks={tasks} input={input} />
    </table>
  );
};
