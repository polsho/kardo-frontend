import { useParams } from 'react-router-dom'
import { events } from '../events/events'
import { Preloader } from '../../components/preloader/preloader'
import { EventCard } from '../../components/eventCard/eventCard'


export const EventById: React.FC = () => {

  const param = useParams();

  const eventId = param.id;
  const eventData = events.find((e => {return e.id === eventId}))

  if (!eventData || !eventId) {
    return <Preloader/>
  }

  return (
      <EventCard eventData={eventData} eventId={eventId} isDetailed={true}/>
  )
}
