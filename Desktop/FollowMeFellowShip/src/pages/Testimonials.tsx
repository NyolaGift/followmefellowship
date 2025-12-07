import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([])

  useEffect(() => {
    supabase.from('testimonies')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => setTestimonials(data || []))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Testimonials</h1>
      {testimonials.map(t => (
        <div key={t.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{t.title}</h3>
          <p>{t.body}</p>
        </div>
      ))}
    </div>
  )
}
