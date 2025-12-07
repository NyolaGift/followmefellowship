import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/devotionals">Devotionals</Link> |{" "}
      <Link to="/sermons">Sermons</Link> |{" "}
      <Link to="/events">Events</Link> |{" "}
      <Link to="/gallery">Gallery</Link> |{" "}
      <Link to="/testimonials">Testimonials</Link> |{" "}
      <Link to="/join">Join</Link> |{" "}
      <Link to="/prayer-requests">Prayer Requests</Link>
    </nav>
  )
}
