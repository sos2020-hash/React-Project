import React from 'react'
import styles from "./styles/UpdateForm.module.css"

const UpdateForm = () => {
    return (
        <form id="data-form">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="description" id="description" placeholder="Description" />
            <label for="assignedto">Assigned to:</label>
            <select name="assignedto" id="assignedto">
                <option value="home">Home</option>
                <option value="school">School</option>
                <option value="work">Work</option>
                <option value="important">Important</option>
            </select>
            <label for="duedate">Duedate:</label>
            <input type="date" name="duedate" id="duedate" />
            <label for="status">Status:</label>
            <select name="status" id="status">
                <option value="todo">TO DO</option>
                <option value="in progress">IN PORGRESS</option>
                <option value="clear">CLEAR</option>
            </select>
            <button type="submit" id="add-btn">ADD</button>
        </form>
    )
}

export default UpdateForm
