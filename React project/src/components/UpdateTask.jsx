import React,{useState} from 'react'
import styles from "./styles/UpdateForm.module.css"
import { useForm } from 'react-hook-form';

const UpdateTask = ({showEditForm , setTask , setTasks, taskEditId, onEdit}) => {
console.log({taskEditId});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmit, setSubmit] = useState(false)
  const onSubmit = async (data) => {
    console.log(data);
    const formObj = {
      id: taskEditId,
      name:data.Name,
      description: data.Description,
      assignedto: data.AssignedTo,
      duedate: data.Duedate,
      status: data.Status,
    }
    console.log(formObj);
    const res = await fetch(`http://localhost:8080/todolist/${taskEditId}`,{
        method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formObj)
    })
    if(res.ok) {
        onEdit(formObj);
    }
  }

  return (
    <form 
    style={showEditForm ? showStyle : closeShowStyle}
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

export default UpdateTask
