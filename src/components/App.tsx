import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  return (
    <main className='bg-green-500 h-screen flex flex-col items-center'>
      <Header />
      <Sidebar />
      <Footer />
    </main>
  )
}

export default App