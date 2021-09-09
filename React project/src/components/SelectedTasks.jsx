import React from "react";
import Task from "./Task";

const SelectedTasks = ({ tasks, onDelete, onUpdate, onSelect }) => {
  return (
    <>
      {tasks.map((task) => {
        if (task.assignedto === onSelect) {
          return (<Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />)
        }
      })}
    </>
  );
};

export default SelectedTasks;
