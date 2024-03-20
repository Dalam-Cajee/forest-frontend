import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Notifications from '../pages/Notification/Notifications'
import ForestDepartment from '../pages/AboutUs/ForestDepartment'
import Mandate from '../pages/AboutUs/Mandate'
import Rti from '../pages/AboutUs/Rti'
import Forest from '../pages/Forest/Forest'
import ForestCover from '../pages/Forest/ForestCover'
import Overview from '../pages/Forest/Overview'
import ReservedForest from '../pages/Forest/ReservedForest'
import ForestTypes from '../pages/Forest/ForestTypes'
import ForestFire from '../pages/Forest/ForestFire'
import WorkingPlans from '../pages/Forest/WorkingPlans'
import SacredGroves from '../pages/Forest/SacredGroves'
import Wildlife from '../pages/Wildlife/Wildlife'
import WildlifeMeg from '../pages/Wildlife/WildlifeMeg'
import Activities from '../pages/Wildlife/Activities'
import ParksSanctuaries from '../pages/Wildlife/ParksSanctuaries'
import Reserves from '../pages/Wildlife/Reserves'
import AnimalRescueCentres from '../pages/Wildlife/AnimalRescueCentres'
import ElephantCensus from '../pages/Wildlife/ElephantCensus'
import ManAnimalConflict from '../pages/Wildlife/ManAnimalConflict'
import ManagementPlans from '../pages/Wildlife/ManagementPlans'
import EcoSensitiveZones from '../pages/Wildlife/EcoSensitiveZones'
import MiniZoosParks from '../pages/Wildlife/MiniZoosParks'
import SocialForestry from '../pages/SocialForestry/SocialForestry'
import ActivitiesSF from '../pages/SocialForestry/ActivitiesSF'
import JointForestManagement from '../pages/SocialForestry/JointForestManagement'
import GreenIndiaMission from '../pages/SocialForestry/GreenIndiaMission'
import EcoFriendlyCrematorium from '../pages/SocialForestry/EcoFriendlyCrematorium'
import ParksGardens from '../pages/SocialForestry/ParksGardens'
import CherryBlossomFestival from '../pages/SocialForestry/CherryBlossomFestival'
import ResearchTraining from '../pages/ResearchTraining/ResearchTraining'
import ActivitiesRT from '../pages/ResearchTraining/ActivitiesRT'
import Silviculture from '../pages/ResearchTraining/Silviculture'
import WorkingPlan from '../pages/ResearchTraining/WorkingPlan'
import FRS from '../pages/ResearchTraining/FRS'
import Training from '../pages/ResearchTraining/Training'
import REDD from '../pages/ResearchTraining/REDD'
import ClimateChange from '../pages/ResearchTraining/ClimateChange'
import PublicInterface from '../pages/PublicInterface/PublicInterface'
import MTPA from '../pages/PublicInterface/MTPA'
import TreeFelling from '../pages/PublicInterface/TreeFelling'
import NOC from '../pages/PublicInterface/NOC'
import Quarry from '../pages/PublicInterface/Quarry'
import Seedlings from '../pages/PublicInterface/Seedlings'
import StoneCrushers from '../pages/PublicInterface/StoneCrushers'
import SawMills from '../pages/PublicInterface/SawMills'
import TimberDept from '../pages/PublicInterface/TimberDept'
import ConflictCompensation from '../pages/PublicInterface/ConflictCompensation'
import BoardsAuthorities from '../pages/BoardsAuthorities/BoardsAuthorities'
import MSMPB from '../pages/BoardsAuthorities/MSMPB'
import FDCM from '../pages/BoardsAuthorities/FDCM'
import EcoSociety from '../pages/BoardsAuthorities/EcoSociety'
import EcoTourism from '../pages/EcoTourism'
import ErrorPage from '../pages/ErrorPage'
import PublicDashboard from '../pages/Dashboard/PublicDashboard'
import NotificationsAdmin from '../pages/Notification/NotificationsAdmin'
import AddNotification from '../pages/Notification/AddNotification'
import Publications from '../pages/Publications/Publications'
import PublicationsAdmin from '../pages/Publications/PublicationsAdmin'
import AddDocument from '../pages/Publications/AddDocument'
import Gallery from '../pages/Gallery/Gallery'
import GalleryAdmin from '../pages/Gallery/GalleryAdmin'
import AddGalleryPhotos from '../pages/Gallery/AddGalleryPhotos'
import Archive from '../pages/Notification/Archive'
import WhoIsWho from '../pages/AboutUs/WhoIsWho'
import TermsOfUse from '../pages/TermsOfUse'
import Accessibility from '../pages/Accessibility'
import NGT from '../pages/NGT Committee/NGT'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {/* Dashboard */}
      <Route path='dashboard' element={<PublicDashboard />} />

      {/* Notifications */}
      <Route path='notifications' element={<Notifications />} />
      <Route path='notifications/admin' element={<NotificationsAdmin />} />
      <Route path='notifications/admin/create' element={<AddNotification />} />
      {/* Archive */}
      <Route path='archive' element={<Archive />} />

      {/* Publications */}
      <Route path='publications' element={<Publications />} />
      <Route path='publications/admin' element={<PublicationsAdmin />} />
      <Route path='publications/admin/create' element={<AddDocument />} />

      {/* Gallery */}
      <Route path='gallery' element={<Gallery />} />
      <Route path='gallery/admin' element={<GalleryAdmin />} />
      <Route path='gallery/admin/create' element={<AddGalleryPhotos />} />

      {/* NGT */}
      <Route path='ngt' element={<NGT />} />

      {/* AboutUs */}
      <Route path='about-us' element={<AboutUs />}>
        <Route path='forest-dept' element={<ForestDepartment />} />
        <Route path='mandate' element={<Mandate />} />
        <Route path='rti' element={<Rti />} />
      </Route>
      <Route path="who'swho" element={<WhoIsWho />} />

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

      {/* Public Interface */}
      <Route path='public-interface' element={<PublicInterface />}>
        <Route path='mtpa' element={<MTPA />} />
        <Route path='tree-felling' element={<TreeFelling />} />
        <Route path='noc' element={<NOC />} />
        <Route path='quarry' element={<Quarry />} />
        <Route path='seedlings' element={<Seedlings />} />
        <Route path='stone-crushers' element={<StoneCrushers />} />
        <Route path='saw-mills' element={<SawMills />} />
        <Route path='timber-dept' element={<TimberDept />} />
        <Route
          path='conflict-compensation'
          element={<ConflictCompensation />}
        />
      </Route>

      {/* Boards Authorities */}
      <Route path='boards-authorities' element={<BoardsAuthorities />}>
        <Route path='msmpb' element={<MSMPB />} />
        <Route path='fdcm' element={<FDCM />} />
        <Route path='society' element={<EcoSociety />} />
      </Route>

      {/* Eco Tourism */}
      <Route path='eco-tourism' element={<EcoTourism />} />

      {/* Terms of Use */}
      <Route path='terms' element={<TermsOfUse />} />

      {/* Accessibility */}
      <Route path='accessibility' element={<Accessibility />} />

      {/* Error Page */}
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRoutes
