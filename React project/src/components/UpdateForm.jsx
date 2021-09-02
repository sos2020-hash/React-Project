import React from 'react'
import styles from "./styles/UpdateForm.module.css"
import { useForm } from 'react-hook-form';


const UpdateForm = ({showForm ,setTasks}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const formObj = {
      id: data.id,
      name:data.Name,
      description: data.Description,
      assignedto: data.AssignedTo,
      duedate: data.Duedate,
      status: data.Status,
    }
    const res = await fetch('http://localhost:8080/todolist',{
      method:'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formObj),
    });
    const message = await res.json()
    if (res.status === 200) {
      setTasks((tasks)=> {
        tasks.concat([{
          id: data.id,
          name:data.Name,
          description: data.Description,
          assignedto: data.AssignedTo,
          duedate: data.Duedate,
          status: data.Status
        }])
      })
    } else {
      console.log(message);
    }
  }

  return (
    <form 
    style={showForm ? showStyle : closeShowStyle}
    onSubmit={handleSubmit(onSubmit)}
    >
      <input type="text" placeholder="Name" {...register("Name", {required: true, min: 3, maxLength: 80})} />
      <textarea {...register("Description", {required: true})} placeholder="Description"/>
      <select {...register("AssignedTo", { required: true })}>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <input type="datetime-local" placeholder="Duedate" {...register("Duedate", {})} />
      <select {...register("Status", { required: true })}>
        <option value="todo">TO DO</option>
        <option value="inporgress">IN PORGRESS</option>
        <option value="clear">CLEAR</option>
      </select>
      <input  type="submit" />
    </form>
  );
}

const showStyle = {
  display: "flex"
}

const closeShowStyle = {
  display: "none"
}

export default UpdateForm
