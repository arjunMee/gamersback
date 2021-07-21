import React from 'react'
import Header from './routeparts/Header'
import Main from './routeparts/Main'

function Dashboard() {
  const [search, setSearch] = React.useState('')

  return (
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      {console.log(search)}
      <Header search={setSearch} />
      <Main />
    </div>
  )
}

export default Dashboard
