
import './App.css'
import { Banner } from './components/Banner'
import { EventCard } from './components/EventCard'
import { EventForm } from './components/EventForm'
import { ThemeSection } from './components/Theme'
import { useState } from 'react';

function App() {

  const themes = [
    { themeId: 1, name: 'front-end'},
    { themeId: 2, name: 'back-end'},
    { themeId: 3, name: 'inteligencia artificial'},
    { themeId: 4, name: 'devops'},
    { themeId: 5, name: 'data-science'},
    { themeId: 6, name: 'cloud'},
  ]

  const [events, setEvents] = useState([
    { 
      cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png', 
      theme: themes[0], 
      date: new Date(), 
      title: 'React Basics', 
      description: 'Learn the basics of React.js in this introductory course.' 
    },
  ]);
  console.log('events fora => ', events);

  function addEvent(event) {
    setEvents(prev => [...prev, event]);
    console.log('events => ', events);
  }

  return (
   <main> 
      <header>
        <img src="/logo.png" alt="Vite logo" />
      </header>
      <Banner/>
      <EventForm
       themes={themes} 
       toSubmit={addEvent} />
      {themes.map(item => (
        <section key={item.themeId}>
          <ThemeSection theme={item} />
          {events.map(event => {
            <EventCard event={event} />
          })}
          
        </section>
      ))}
      
   </main>
  )
}

export default App
