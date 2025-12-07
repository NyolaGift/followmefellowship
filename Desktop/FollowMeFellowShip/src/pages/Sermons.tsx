import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import SermonCard from '../components/SermonCard'

export default function Sermons() {
  const [sermons, setSermons] = useState<any[]>([])

  useEffect(() => {
    supabase.from('sermons')
      .select('*')
      .eq('published', true)
      .order('sermon_date', { ascending: false })
      .then(({ data }) => setSermons(data || []))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sermons</h1>
      {sermons.map(s => <SermonCard key={s.id} title={s.title} speaker={s.speaker} description={s.description} />)}
    </div>
  )
}
