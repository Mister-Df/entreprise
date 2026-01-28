import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../component/home/Home'
import NavBar from '../component/navBar/NavBar'

export default function Router() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}
