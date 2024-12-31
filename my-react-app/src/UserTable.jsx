import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";
import React from "react";

const UserTable = ({ user, selectedUser, deleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.length > 0 ? (
            user.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <button
                    type="button"
                    className="text-white bg-gray-400 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-center mt-2"
                    onClick={() => {
                      selectedUser({ id: row.id, name: row.name });
                    }}
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    type="button"
                    className="text-white bg-gray-400 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-center mt-2"
                    onClick={() => {
                      deleteUser({ id: row.id, name: row.name });
                    }}
                  >
                    delete
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>User not available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
