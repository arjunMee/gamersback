import './App.css'
import SideMenu from './components/SideMenu'
// import { menuItems } from './components/SideMenu'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

// routes
import Dashboard from './components/route/Dashboard'

const Content = () => <h1>Content</h1>
const Courses = () => <h1>Content/Courses</h1>
const Videos = () => <h1>Content/Videos</h1>
const Design = () => <h1>Design</h1>
const Content2 = () => <h1>Content2</h1>
const Courses2 = () => <h1>Content/Courses 2</h1>
const Videos2 = () => <h1>Content/Videos 2</h1>
const Design2 = () => <h1>Design 2</h1>

function App() {
  const [inactive, setInactive] = useState(false)

  return (
    <div className='App'>
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive)
            setInactive(inactive)
          }}
        />

        <div className={`container ${inactive ? 'inactive' : ''}`}>
          <Switch>
            <Route exact path={'/'}>
              <Dashboard />
            </Route>
            <Route exact path={'/content'}>
              <Content />
            </Route>
            <Route path={'/content/courses'}>
              <Courses />
            </Route>
            <Route path={'/content/videos'}>
              <Videos />
            </Route>
            <Route path={'/design'}>
              <Design />
            </Route>
            <Route exact path={'/content-2'}>
              <Content2 />
            </Route>
            <Route path={'/content-2/courses'}>
              <Courses2 />
            </Route>
            <Route path={'/content-2/videos'}>
              <Videos2 />
            </Route>
            <Route path={'/design-2'}>
              <Design2 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
