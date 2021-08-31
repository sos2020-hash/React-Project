import React from 'react'
import styles from "./styles/UpdateForm.module.css"
import { useForm } from 'react-hook-form';


const UpdateForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, min: 3, maxLength: 80})} />
      <textarea {...register("Description", {required: true})} placeholder="Description"/>
      <select {...register("Assigned To", { required: true })}>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <input type="datetime" placeholder="Duedate" {...register("Duedate", {})} />
      <select {...register("Status", { required: true })}>
        <option value="TO DO">TO DO</option>
        <option value="IN PORGRESS">IN PORGRESS</option>
        <option value="CLEAR">CLEAR</option>
      </select>
      <input type="submit" />
    </form>
  );
}

const description = {
    height : "60px"
}

export default UpdateForm
