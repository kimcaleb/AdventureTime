import React from 'react'
import Header from './Header'

export default({ children, currentUser }) => (
  <div>
    <Header currentUser={currentUser} />
    <main className='container'>
      { children }
    </main>
  </div>
)
