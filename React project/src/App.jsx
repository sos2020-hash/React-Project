import React, {useState, useEffect} from 'react';
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
    const res = await fetch(`http://localhost:8080/${id}`,{
      method: "DELETE"
    })
    if (res.ok) {
      setTasks(tasks.filter((task)=> task.id !== id))
    } else {
      alert("Error : Can not delete this task")
    }
  } 


  return (
    <div className="App">
      <Header 
      showSidebar={()=> setSideBar(!sideBar)}
      />
      <Navbar 
      sideBar={sideBar} 
      setShowForm={()=> {setShowForm(!showForm)}}
      />
      <div className="area">
      <Calendar
        // onChange={onChange}
        // value={value}
      />
      <UpdateForm  showForm={showForm} setTasks={setTasks}/>
      <div className="lists">
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      </div>
      </div>
    </div>
  );
}

export default App;
