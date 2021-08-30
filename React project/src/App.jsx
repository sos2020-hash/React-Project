import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UpdateForm from './components/UpdateForm';
import './App.css';

function App() {
  const [sideBar, setSideBar] = useState(false)
  return (
    <div className="App">
      <Header />
      <Navbar />
      <UpdateForm />
    </div>
  );
}

export default App;
