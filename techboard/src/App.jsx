
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
      name: 'React Basics', 
      description: 'Learn the basics of React.js in this introductory course.' 
    },
  ]);

  function addEvent(event) {
    console.log(event);
    setEvents([...events, event]);
  }

  const themesWithEvents = themes.filter(theme =>
    events.some(event => event.theme.themeId === theme.themeId)
  );

  return (
   <main> 
      <header>
        <img src="/logo.png" alt="Vite logo" />
      </header>
      <Banner/>
      <EventForm
       themes={themes} 
       toSubmit={addEvent} />
       <section className='container'>
        {themesWithEvents.map(theme => (
          <section key={theme.themeId}>
            <ThemeSection theme={theme} />
            <div className='events'>
              {events
                .filter(event => event.theme.themeId === theme.themeId)
                .map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
            </div>
          </section>
        ))}
       </section>
      
      
   </main>
  )
}

export default App
