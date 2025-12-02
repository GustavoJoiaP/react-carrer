import "./event-card.style.css"

export function EventCard({event}) {
  console.log('event card => ', event);
  return (
    <div className="event-card">
      <img className="event-cover" src={event.cover} alt="Event Cover" />
      <div className="event-details">
        <p className="event-theme">Theme: {event.theme.name}</p>
        <p className="event-date">{event.date.toLocaleDateString('pt-BR')}</p>
        <h4 className="event-title">{event.title}</h4>
        <p className="event-description">{event.description}</p>
      </div>
    </div>
  )
}