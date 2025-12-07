import React from 'react'

interface Props {
  title: string
  content: string
}

export default function DevotionalCard({ title, content }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
