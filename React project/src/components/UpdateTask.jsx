import React, { useState } from "react";
import "./styles/UpdateForm.css";
import { useForm } from "react-hook-form";

const UpdateTask = ({
  showEditForm,
  setTask,
  setTasks,
  taskEditId,
  onEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmit, setSubmit] = useState(false);
  const onSubmit = async (data) => {
    const formObj = {
      id: taskEditId,
      name: data.name,
      description: data.description,
      assignedto: data.assignedto,
      duedate: data.duedate,
      status: data.status,
    };
    const res = await fetch(`http://localhost:8080/todolist/${taskEditId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObj),
    });
    if (res.ok) {
      onEdit(formObj);
      setSubmit(true);
    } else {
      console.log(errors);
    }
  };

  return (
    <form
      id='form-task'
      style={showEditForm ? showStyle : closeShowStyle}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label for="name" class="">
        Name:
      </label>
      <input
        type="text"
        name="name"
        {...register("name", { required: true, min: 3, maxLength: 80 })}
      />
      <label for="description" class="">
        Description:
      </label>
      <textarea
        name="description"
        {...register("description", { required: true })}
      />
      <label for="assignedto" class="">
        Assigned To:
      </label>
      <select name="assignedto" {...register("assignedto", { required: true })}>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <label for="date" class="">
        Date:
      </label>
      <input
        name="date"
        type="datetime-local"
        placeholder="duedate"
        {...register("duedate", {})}
      />
      <label for="status" class="">
        Status:
      </label>
      <select name="status" {...register("status", { required: true })}>
        <option value="todo">TO DO</option>
        <option value="inporgress">IN PORGRESS</option>
        <option value="clear">CLEAR</option>
      </select>
      <input type="submit" className="submit-btn" />
    </form>
  );
};

const showStyle = {
  display: "flex",
};

const closeShowStyle = {
  display: "none",
};

export default UpdateTask;
