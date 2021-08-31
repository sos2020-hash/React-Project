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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/todolist.csv")
    const data = await res.json()

    return data;
  }

  // const tasks = [
  //   {
  //     id: 1,
  //     name: 'working',
  //     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim voluptatem vitae laboriosam atque praesentium, corrupti saepe eligendi quos, itaque provident sunt modi excepturi dolor culpa quis magni expedita. Dolorum?',
  //     assignto: 'to do',
  //     Duedate: '2021-09-01',
  //     Status: 'clear',
  //   },
  //   {
  //     id:2,
  //     name: 'playing',
  //     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim voluptatem vitae laboriosam atque praesentium, corrupti saepe eligendi quos, itaque provident sunt modi excepturi dolor culpa quis magni expedita. Dolorum?',
  //     assignto: 'to do',
  //     Duedate: '2021-09-01',
  //     Status: 'clear',
  //   },
  //   {
  //     id:3,
  //     name: 'resting',
  //     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim voluptatem vitae laboriosam atque praesentium, corrupti saepe eligendi quos, itaque provident sunt modi excepturi dolor culpa quis magni expedita. Dolorum?',
  //     assignto: 'to do',
  //     Duedate: '2021-09-01',
  //     Status: 'clear',
  //   },
  // ]
  return (
    <div className="App">
      <Header showSidebar={()=> setSideBar(!sideBar)}/>
      <Navbar sideBar={sideBar}/>
      <div className="area">
      <Calendar
        // onChange={onChange}
        // value={value}
      />
      <UpdateForm />
      <div className="lists">
      <Tasks tasks={tasks}/>
      </div>
      </div>
    </div>
  );
}

export default App;
