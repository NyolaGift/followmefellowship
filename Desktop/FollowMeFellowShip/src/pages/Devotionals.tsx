import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import DevotionalCard from '../components/DevotionalCard'

export default function Devotionals() {
  const [devotionals, setDevotionals] = useState<any[]>([])

  useEffect(() => {
    supabase.from('devotionals')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => setDevotionals(data || []))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Devotionals</h1>
      {devotionals.map(d => <DevotionalCard key={d.id} title={d.title} content={d.content} />)}
    </div>
  )
}
