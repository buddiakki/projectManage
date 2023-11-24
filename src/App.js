import Dashboard from './components/dashboard'
import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Projects from './components/Projects'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'
import Employee from './components/Employee'

export default function App() {
  return (
    <div>
      
      <Routes>
        {/* <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route exact path='/Tasks' element={<Tasks/>}/> */}
        <Route exact path='/' element={<AddTasks/>}/>
        <Route exact path='/Employee' element={<Employee/>}/>
      </Routes>
      
    </div>
  )
}
