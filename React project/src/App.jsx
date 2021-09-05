import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UpdateForm from './components/UpdateForm';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [sideBar, setSideBar] = useState(false)
  const [showForm , setShowForm] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(async () => {
    const data = await fetchTasks()
    console.log(data);
    setTasks(data)
  }, [])


  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/todolist")
    const data = await res.json()
    return data
  }

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:8080/todolist/${id}`,{
      method: "DELETE"
    })
    if (res.ok) {
      setTasks(tasks.filter((task)=> task.id !== id))
    } else {
      alert("Error : Can not delete this task")
    }
  } 

  // const updateTask = async (id) => {
  //   const res = await fetch(`http://localhost:8080/todolist/${id}`,{
  //     method="PUT"
  //   })
  //   if (res.ok) {
  //     setTask((task) => )
  //   }
  // }

  return (
    <Router>
    <div className="App">
      <Header 
      showSidebar={()=> setSideBar(!sideBar)}
      />
      <Navbar 
      sideBar={sideBar} 
      setShowForm={()=> {setShowForm(!showForm)}}
      />
      <div className="area">
        <Route path="/calendar" component={Calendar}/>
      <UpdateForm  
      showForm={showForm} 
      setTasks={setTasks} 
        setShowForm={setShowForm}
      />
      <Route path="/" exact />
      <div className="lists">
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
