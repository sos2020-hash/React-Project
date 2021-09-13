import React, { useState, useEffect } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import UpdateForm from "./components/UpdateForm";
import UpdateTask from "./components/UpdateTask";
import Tasks from "./components/Tasks";
import SelectedTasks from "./components/SelectedTasks";
import LoginForm from "./components/LoginForm";
import Signin from "./components/Signin";
import "./App.css";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [taskEditId, setTaskEditId] = useState(null);

  useEffect(async () => {
    const data = await fetchTasks();
    setTasks(data);
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/todolist");
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:8080/todolist/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setTasks(tasks.filter((task) => task.id !== id));
    } else {
      alert("Error : Can not delete this task");
    }
  };

  const handleUpdate = (id) => {
    setShowEditForm(!showEditForm);
    setTaskEditId(id);
  };

  const handleSumit = (task) => {
    setTask(task);
    tasks.map((currentTask) => {
      if (currentTask.id === task.id) {
        currentTask = { ...task };
      }
    });
    setTask({});
    window.alert("Update Success!");
    window.location.href = "/";
  };

  return (
    <div className="App">
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/siginin">
        <Signin />
      </Route>
      <Header showSidebar={() => setSideBar(!sideBar)} />
      <Navbar
        sideBar={sideBar}
        setShowForm={() => {
          setShowForm(!showForm);
        }}
      />
      {localStorage.getItem("login") ? (
        <div className="area">
          <UpdateForm showForm={showForm} setTasks={setTasks} />
          <UpdateTask
            onEdit={handleSumit}
            showEditForm={showEditForm}
            taskEditId={taskEditId}
            setTask={setTask}
            setTasks={setTasks}
          />
          <div className="lists">
            <Route exact path="/">
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onUpdate={handleUpdate}
              />
            </Route>
            <Route path="/home">
              <SelectedTasks
                tasks={tasks}
                onDelete={deleteTask}
                onUpdate={handleUpdate}
                onSelect="Home"
              />
            </Route>
            <Route path="/work">
              <SelectedTasks
                tasks={tasks}
                onDelete={deleteTask}
                onUpdate={handleUpdate}
                onSelect="Work"
              />
            </Route>
            <Route path="/school">
              <SelectedTasks
                tasks={tasks}
                onDelete={deleteTask}
                onUpdate={handleUpdate}
                onSelect="School"
              />
            </Route>
          </div>
        </div>
      ) : (
        <h1
          className="area"
          style={{
            position: "relative",
            top: "13rem",
            justifyContent: "center",
          }}
        >
          Please login to assess the tasks
        </h1>
      )}
    </div>
  );
}

export default App;
