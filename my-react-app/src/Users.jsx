import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import axios from "axios";

// const users = [
//   {
//     id: 1,
//     name: "Thilina",
//   },
//   {
//     id: 2,
//     name: "Lakshan",
//   },
//   {
//     id: 3,
//     name: "Hewage",
//   },
// ];

const Users = ()=>{

  const [users,setUsers] = useState([]);
  const [submitted , setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers=()=> {
    axios.get('http://localhost:3001/api/users')
    .then(res=>{
      console.log(res.data.response);
      setUsers(res.data.response);
      setIsEdit(false);
    })
    .catch(err=>{
      console.log(err);  
    })
  }

  const addUser =(data)=>{
    setSubmitted(true);

    axios.post("http://localhost:3001/api/add-user",{
      id: data.id,
      name:data.name,
    })
    .then(()=>{
      getUsers();
      setSubmitted(false);
      setIsEdit(false);
    })
  }

  const updateUser = (data)=>{
    setSubmitted(true);

    axios
      .put("http://localhost:3001/api/update-user", {
        id: data.id,
        name: data.name,
      })
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

const deleteUser = (data)=>{
  axios
    .delete("http://localhost:3001/api/delete-user", { params: { id: data.id } })
    .then(() => {
      console.log(data.id);
      getUsers();
    })
    .catch((err) => {
      console.log(err);
    });
}

  useEffect(() => {
    getUsers();
  }, []);
  
    return (
      <>
        <UserForm
          addUser={addUser}
          updateUser={updateUser}
          submitted={submitted}
          data={selectedUser}
          isEdit={isEdit}
        />
        <UserTable
          user={users}
          selectedUser={(data) => {
            setSelectedUser(data);
            setIsEdit(true);
          }}
          deleteUser={(data)=>{
            window.confirm("Are you sure to delete the user?") &&
              deleteUser(data);
          }}
        />
      </>
    );
}

export default Users;