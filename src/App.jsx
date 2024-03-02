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
import Activities from './pages/Wildlife/Activities'
import ParksSanctuaries from './pages/Wildlife/ParksSanctuaries'
import Reserves from './pages/Wildlife/Reserves'
import AnimalRescueCentres from './pages/Wildlife/AnimalRescueCentres'
import ElephantCensus from './pages/Wildlife/ElephantCensus'
import ManAnimalConflict from './pages/Wildlife/ManAnimalConflict'
import ManagementPlans from './pages/Wildlife/ManagementPlans'
import EcoSensitiveZones from './pages/Wildlife/EcoSensitiveZones'
import MiniZoosParks from './pages/Wildlife/MiniZoosParks'
import SocialForestry from './pages/SocialForestry/SocialForestry'
import ActivitiesSF from './pages/SocialForestry/ActivitiesSF'
import JointForestManagement from './pages/SocialForestry/JointForestManagement'
import GreenIndiaMission from './pages/SocialForestry/GreenIndiaMission'
import EcoFriendlyCrematorium from './pages/SocialForestry/EcoFriendlyCrematorium'
import ParksGardens from './pages/SocialForestry/ParksGardens'
import CherryBlossomFestival from './pages/SocialForestry/CherryBlossomFestival'
import ResearchTraining from './pages/ResearchTraining/ResearchTraining'
import ActivitiesRT from './pages/ResearchTraining/ActivitiesRT'
import Silviculture from './pages/ResearchTraining/Silviculture'
import WorkingPlan from './pages/ResearchTraining/WorkingPlan'
import FRS from './pages/ResearchTraining/FRS'
import Training from './pages/ResearchTraining/Training'
import REDD from './pages/ResearchTraining/REDD'
import ClimateChange from './pages/ResearchTraining/ClimateChange'

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
          <Route path='activities' element={<Activities />} />
          <Route path='parks' element={<ParksSanctuaries />} />
          <Route path='reserves' element={<Reserves />} />
          <Route path='rescue' element={<AnimalRescueCentres />} />
          <Route path='elephant-census' element={<ElephantCensus />} />
          <Route path='conflict' element={<ManAnimalConflict />} />
          <Route path='plans' element={<ManagementPlans />} />
          <Route path='zones' element={<EcoSensitiveZones />} />
          <Route path='minizoos' element={<MiniZoosParks />} />
        </Route>
        {/* Social Forestry */}
        <Route path='social-forestry' element={<SocialForestry />}>
          <Route path='activities' element={<ActivitiesSF />} />
          <Route path='joint-forest' element={<JointForestManagement />} />
          <Route path='green-india' element={<GreenIndiaMission />} />
          <Route path='crematorium' element={<EcoFriendlyCrematorium />} />
          <Route path='parks' element={<ParksGardens />} />
          <Route path='cherry-blossom' element={<CherryBlossomFestival />} />
        </Route>
        {/* Research & Training */}
        <Route path='research-training' element={<ResearchTraining />}>
          <Route path='activities' element={<ActivitiesRT />} />
          <Route path='silviculture' element={<Silviculture />} />
          <Route path='plans' element={<WorkingPlan />} />
          <Route path='frs' element={<FRS />} />
          <Route path='training' element={<Training />} />
          <Route path='redd' element={<REDD />} />
          <Route path='climate' element={<ClimateChange />} />
        </Route>

        {/* Notifications */}
        <Route path='notifications' element={<Notifications />} />
        {/* <Route path="notifications/update" element={<Notifications />} /> */}
      </Routes>
    </div>
  )
}

export default App
