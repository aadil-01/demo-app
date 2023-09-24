import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Notes from './components/notes/Notes'
import Home from './components/home/Home'
import History from './components/history/History'
import Screen from './components/screen/Screen'
import './App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='*' element={<Navigate to='/home' />} />
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route exact path='/home' element={<Screen component={<Home />} />} />
        <Route exact path='/app' element={<Screen component={<Notes />} />} />
        <Route exact path='/history' element={<Screen component={<History />} />} />
      </Routes>
    </Router>
  )
}

export default App
