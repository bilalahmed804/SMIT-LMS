
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/admin/Admin'
import Teacher from './pages/teacher/Teacher'
import Students from './pages/students/Students'

function App() {

  return (
    <div className="w-full">
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/student/dashboard' element={<Students/>}/>
        <Route path='/student/:select' element={<Students/>}/>
      </Routes>
    </div>  
  )
}

export default App
