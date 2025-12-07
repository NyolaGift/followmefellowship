import React from 'react'

export default function Footer() {
  return (
    <footer style={{ padding: '10px', textAlign: 'center', marginTop: '20px', backgroundColor: '#eee' }}>
      © {new Date().getFullYear()} FollowMeFellowShip Church
    </footer>
  )
}
