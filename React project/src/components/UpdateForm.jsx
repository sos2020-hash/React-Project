import React,{useState} from 'react'
import styles from "./styles/UpdateForm.module.css"
import { useForm } from 'react-hook-form';

const UpdateForm = ({showForm , setTasks }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmit, setSubmit] = useState(false)
  const onSubmit = async (data) => {
    console.log(data);
    const formObj = {
      id: data.id,
      name:data.name,
      description: data.description,
      assignedto: data.assignedto,
      duedate: data.duedate,
      status: data.status,
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
      setTasks((tasks) => [...tasks, formObj])
    } else {
      console.log(message);
    }
    setSubmit(true)
  }

  return (
    <form 
    style={showForm ? showStyle : closeShowStyle}
    onSubmit={handleSubmit(onSubmit)}
    >
      <input type="text" placeholder="name" {...register("name", {required: true, min: 3, maxLength: 80})} />
      <textarea {...register("description", {required: true})} placeholder="description"/>
      <select {...register("assignedto", { required: true })}>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <input type="datetime-local" placeholder="duedate" {...register("duedate", {})} />
      <select {...register("status", { required: true })}>
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
