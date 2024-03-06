import { MobileMenuProvider } from './context/Mobile_Menu_Context'
import Hero_Section from './components/Hero_Section'
import About_Section from './components/About_Section'
import Our_Creations_Section_Main from './components/Our_Creations/Our_Creations_Section_Main'
import Mobile_Menu from './layout/Mobile_Menu'
import Footer from './layout/Footer'
import './App.css'

function App() {
  return (
    <>
      <MobileMenuProvider>
        <Mobile_Menu />
        <Hero_Section />
      </MobileMenuProvider>
      <main className='text-base'>
        <About_Section />
        <Our_Creations_Section_Main />
      </main>
      <Footer />
    </>
  )
}

export default App
