import EventList from './components/EventList'
import events from './contents/events.json'

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "0 auto", width: "100%", maxWidth: "800px" }}>
        <EventList events={events} />
      </div>
    </div>
  )
}

export default App
