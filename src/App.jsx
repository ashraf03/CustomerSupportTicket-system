import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import { useState, useEffect } from "react";

function App() {
  
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleTicket = (ticket) => {

    setInProgress([...inProgress, ticket]);

    setTickets(
      tickets.filter(t => t.id !== ticket.id)
    );
  }

  const handleComplete = (task) => {

    setResolved([...resolved, task]);

    setInProgress(
      inProgress.filter(t => t.id !== task.id)
    );
  }

  return (
    <>
      <Navbar />

      <Banner
        count={inProgress.length}
        countDec={resolved.length}
      />

      <MainSection
        tiketsData={tickets}
        handleTicket={handleTicket}
        tiket={inProgress}
        resolved={resolved}
        decCount={handleComplete}
      />

      <Footer />
    </>
  )
}

export default App