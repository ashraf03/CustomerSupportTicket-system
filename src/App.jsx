import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'
import TaskStatus from './components/MainSection/TaskStatus/TaskStatus'
import Navbar from './components/Navbar/Navbar'
import { useState } from "react";


const tiketsData = fetch('/public/tickets.json')
                  .then(res => res.json())
                  console.log(tiketsData)

function App() {

   const [tasks, setTasks] = useState([]);

  const handleTicket = (tiket) => {
    console.log(tiket);
    setTasks([...tasks, tiket]);
  };

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <MainSection tiketsData={tiketsData} handleTicket={handleTicket} tiket={tasks}></MainSection>
     <Footer></Footer>
    </>
  )
}

export default App
