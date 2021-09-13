import React from "react";
import "./styles/UpdateForm.css";
import { useForm } from "react-hook-form";

const UpdateForm = ({ showForm, setTasks }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const formObj = {
      id: data.id,
      name: data.name,
      description: data.description,
      assignedto: data.assignedto,
      duedate: data.duedate,
      status: data.status,
    };
    const res = await fetch("http://localhost:8080/todolist", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formObj),
    });
    if (res.status === 200) {
      setTasks((tasks) => [...tasks, formObj]);
    } else {
      console.log(errors);
    }
  };

  return (
    <form
      id="form"
      style={showForm ? showStyle : closeShowStyle}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="form-label" for="name" class="">
        Name:
      </label>
      <input
        className="form-input"
        type="text"
        name="name"
        {...register("name", { required: true, min: 3, maxLength: 80 })}
      />
      <label className="form-label" for="description" class="">
        Description:
      </label>
      <textarea
        className="form-textarea"
        name="description"
        {...register("description", { required: true })}
      />
      <label className="form-label" for="assignedto" class="">
        Assigned To:
      </label>
      <select
        className="form-select"
        name="assignedto"
        {...register("assignedto", { required: true })}
      >
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <label className="form-label" for="date" class="">
        Date:
      </label>
      <input
        className="form-input"
        name="date"
        type="datetime-local"
        placeholder="duedate"
        {...register("duedate", {})}
      />
      <label className="form-label" for="status" class="">
        Status:
      </label>
      <select
        className="form-select"
        name="status"
        {...register("status", { required: true })}
      >
        <option value="todo">TO DO</option>
        <option value="inporgress">IN PORGRESS</option>
        <option value="clear">CLEAR</option>
      </select>
      <input className="form-input" type="submit" className="submit-btn" />
    </form>
  );
};

const showStyle = {
  display: "flex",
};

const closeShowStyle = {
  display: "none",
};

export default UpdateForm;
