 
 
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from './Pages/BlogDetail'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DetailsPage from './Pages/detailsPage'

function App() {
  

  return (
    <>
    <div className='p-[20px]'>
    {/* Header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog-detail/:id" element={<BlogDetail/>}></Route>
      <Route path="/details/:strCategory" element={<DetailsPage />}></Route>
    </Routes>
     
    </div>
     {/* Footer */}
     <Footer/>
    </>
  )
}

export default App
