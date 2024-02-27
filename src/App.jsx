import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Notifications from "./pages/Notification/Notifications"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="notifications" element={<Notifications />} />
        {/* <Route path="notifications/update" element={<Notifications />} /> */}
      </Routes>
    </div>
  )
}

export default App
