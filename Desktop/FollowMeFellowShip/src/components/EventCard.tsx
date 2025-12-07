import React from 'react'

interface Props {
  title: string
  description: string
  date: string
  location?: string
}

export default function EventCard({ title, description, date, location }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      {location && <p><strong>Location:</strong> {location}</p>}
    </div>
  )
}
