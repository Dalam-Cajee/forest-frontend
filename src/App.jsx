import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './components/AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-vh-100 d-flex flex-column justify-content-between'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
