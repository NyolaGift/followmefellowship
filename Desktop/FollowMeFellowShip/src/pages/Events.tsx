import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import EventCard from '../components/EventCard'

export default function Events() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    supabase.from('events')
      .select('*')
      .eq('published', true)
      .order('start_time', { ascending: true })
      .then(({ data }) => setEvents(data || []))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upcoming Events</h1>
      {events.map(e => <EventCard key={e.id} title={e.title} description={e.description} date={e.start_time} location={e.location} />)}
    </div>
  )
}
