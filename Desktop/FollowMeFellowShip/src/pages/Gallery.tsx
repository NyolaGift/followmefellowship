import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Gallery() {
  const [photos, setPhotos] = useState<any[]>([])

  useEffect(() => {
    supabase.from('photos')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => setPhotos(data || []))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gallery</h1>
      {photos.length === 0 && <p>No photos yet.</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.map(p => (
          <img key={p.id} src={p.file_path} alt={p.caption} style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }} />
        ))}
      </div>
    </div>
  )
}
