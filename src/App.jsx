import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Notifications from './pages/Notification/Notifications'
import ForestDepartment from './pages/AboutUs/ForestDepartment'
import Mandate from './pages/AboutUs/Mandate'
import Rti from './pages/AboutUs/Rti'
import Forest from './pages/Forest/Forest'
import ForestCover from './pages/Forest/ForestCover'
import Overview from './pages/Forest/Overview'
import ReservedForest from './pages/Forest/ReservedForest'
import ForestTypes from './pages/Forest/ForestTypes'
import ForestFire from './pages/Forest/ForestFire'
import WorkingPlans from './pages/Forest/WorkingPlans'
import SacredGroves from './pages/Forest/SacredGroves'
import Wildlife from './pages/Wildlife/Wildlife'
import WildlifeMeg from './pages/Wildlife/WildlifeMeg'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* AboutUs */}
        <Route path='about-us' element={<AboutUs />}>
          <Route path='forest-dept' element={<ForestDepartment />} />
          <Route path='mandate' element={<Mandate />} />
          <Route path='rti' element={<Rti />} />
        </Route>
        {/* Forest */}
        <Route path='forest' element={<Forest />}>
          <Route path='overview' element={<Overview />} />
          <Route path='cover' element={<ForestCover />} />
          <Route path='reserved-forest' element={<ReservedForest />} />
          <Route path='types' element={<ForestTypes />} />
          <Route path='fire' element={<ForestFire />} />
          <Route path='working-plans' element={<WorkingPlans />} />
          <Route path='sacred-groves' element={<SacredGroves />} />
        </Route>
        {/* Wildlife */}
        <Route path='wildlife' element={<Wildlife />}>
          <Route path='wildlife-meg' element={<WildlifeMeg />} />
          <Route path='activities' element={<WildlifeMeg />} />
          <Route path='parks' element={<WildlifeMeg />} />
          <Route path='reserves' element={<WildlifeMeg />} />
          <Route path='rescue' element={<WildlifeMeg />} />
          <Route path='elephant-census' element={<WildlifeMeg />} />
          <Route path='conflict' element={<WildlifeMeg />} />
          <Route path='plans' element={<WildlifeMeg />} />
          <Route path='zones' element={<WildlifeMeg />} />
          <Route path='minizoos' element={<WildlifeMeg />} />
        </Route>
        <Route path='notifications' element={<Notifications />} />
        {/* <Route path="notifications/update" element={<Notifications />} /> */}
      </Routes>
    </div>
  )
}

export default App
