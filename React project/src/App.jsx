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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'working',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim voluptatem vitae laboriosam atque praesentium, corrupti saepe eligendi quos, itaque provident sunt modi excepturi dolor culpa quis magni expedita. Dolorum?',
      assignto: 'to do',
      Duedate: '2021-09-01',
      Status: 'clear',
    },
    {
      id:2,
      name: 'playing',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim voluptatem vitae laboriosam atque praesentium, corrupti saepe eligendi quos, itaque provident sunt modi excepturi dolor culpa quis magni expedita. Dolorum?',
      assignto: 'to do',
      Duedate: '2021-09-01',
      Status: 'clear',
    },
    {
      id:3,
      name: 'resting',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim voluptatem vitae laboriosam atque praesentium, corrupti saepe eligendi quos, itaque provident sunt modi excepturi dolor culpa quis magni expedita. Dolorum?',
      assignto: 'to do',
      Duedate: '2021-09-01',
      Status: 'clear',
    },
  ]);

  // useEffect(() => {
  //   fetchTasks()
  // }, [])


  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/todolist")
    const data = await res.json()

    console.log(data)
  }

  fetchTasks();

  return (
    <div className="App">
      <Header 
      showSidebar={()=> setSideBar(!sideBar)}
      />
      <Navbar 
      sideBar={sideBar} 
      setShowForm={()=> {
        setShowForm(!showForm)
        console.log(showForm);
      }}
      />
      <div className="area">
      <Calendar
        // onChange={onChange}
        // value={value}
      />
      <UpdateForm  showForm={showForm}/>
      <div className="lists">
      <Tasks tasks={tasks}/>
      </div>
      </div>
    </div>
  );
}

export default App;
