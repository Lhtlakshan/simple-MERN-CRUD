import { Grid2,Input, Typography } from "@mui/material";
import { useState,useEffect } from "react";

const UserForm = ({ addUser,updateUser, submitted ,data , isEdit}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName('');
    }
  },[submitted]);

  useEffect(()=>{
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  },[data]);

  return (
    <>
      <div className="flex justify-center p-5 m-5 rounded-lg bg-slate-300">
        <div className="w-[50%] text-left m-5 ">
          <Grid2
            container
            spacing={2}
            sx={{
              marginBotton: "30px",
              display: "block",
              fontSize: "30px",
              fontStyle: "Bold",
              textAlign: "center",
            }}
          >
            User Login form
          </Grid2>

          <Grid2 container xs={12} sm={6} sx={{ display: "flex" }}>
            <Typography
              component={"label"}
              htmlFor="id"
              sx={{
                color: "black",
                fontSize: "16px",
                width: "100px",
                display: "block",
              }}
            >
              ID
            </Typography>
            <Input
              type="number"
              id="id"
              name="id"
              sx={{
                width: "400px",
              }}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Grid2>

          <Grid2 container xs={12} sm={6} sx={{ display: "flex" }}>
            <Typography
              component={"label"}
              htmlFor="id"
              sx={{
                color: "black",
                fontSize: "16px",
                width: "100px",
                display: "block",
              }}
            >
              Name
            </Typography>
            <Input
              type="text"
              id="name"
              name="name"
              sx={{
                width: "400px",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid2>

          <button
            type="button"
            className="text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-center mt-2"
            onClick={() => {
              isEdit ? updateUser({ id, name }) : addUser({ id, name });
            }}
          >
            {
              isEdit ? 'Update' : 'Add'
            }
          </button>
        </div>
      </div>
    </>
  );
};

export default UserForm;