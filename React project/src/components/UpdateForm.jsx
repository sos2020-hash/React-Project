import React from 'react'
import styles from "./styles/UpdateForm.module.css"
import { useForm } from 'react-hook-form';


const UpdateForm = ({showForm}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form 
    style={showForm ? showStyle : closeShowStyle}
    onSubmit={handleSubmit(onSubmit)}
    >
      <input type="text" placeholder="Name" {...register("Name", {required: true, min: 3, maxLength: 80})} />
      <textarea {...register("Description", {required: true})} placeholder="Description"/>
      <select {...register("Assigned To", { required: true })}>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <input type="datetime" placeholder="Duedate" {...register("Duedate", {})} />
      <select {...register("Status", { required: true })}>
        <option value="todo">TO DO</option>
        <option value="inporgress">IN PORGRESS</option>
        <option value="clear">CLEAR</option>
      </select>
      <input type="submit" />
    </form>
  );
}

const description = {
    height : "60px"
}

const showStyle = {
  display: "flex"
}

const closeShowStyle = {
  display: "none"
}

export default UpdateForm
