import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function PrayerRequests() {
  const [prayers, setPrayers] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  useEffect(() => {
    supabase.from('prayer_requests')
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => setPrayers(data || []))
  }, [])

  async function submitPrayer() {
    if (!title || !details) return
    await supabase.from('prayer_requests').insert({ title, details, is_public: true })
    setTitle('')
    setDetails('')
    const { data } = await supabase.from('prayer_requests').select('*').eq('is_public', true)
    setPrayers(data || [])
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Prayer Requests</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br />
      <textarea placeholder="Details" value={details} onChange={e => setDetails(e.target.value)} /><br />
      <button onClick={submitPrayer}>Submit Prayer</button>
      <h2>Public Prayers</h2>
      {prayers.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{p.title}</h3>
          <p>{p.details}</p>
        </div>
      ))}
    </div>
  )
}
