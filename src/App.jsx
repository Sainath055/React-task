

import './index.scss'
import Blogs from './components/Blogs';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Settings from './components/Settings';
import useLocalStorage from './utils/useLocalStorage';
import { useEffect } from 'react';

function App() {
  const [hue, setHue] = useLocalStorage('hue', '160')

  const [heading, setHeading] = useLocalStorage('heading', '25')
  const [menu, setMenu] = useLocalStorage('menu', '16')
  const [buttons, setButtons] = useLocalStorage('buttons', '16')

  const defaultModeCheck = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [modeCheck, setModeCheck] = useLocalStorage('user-color-theme', defaultModeCheck ? "dark" : "light");

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', modeCheck);
  }, [modeCheck])

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', hue);
  }, [hue])

  useEffect(() => {
    document.documentElement.style.setProperty('--heading', `${heading}px`);
  }, [heading])

  useEffect(() => {
    document.documentElement.style.setProperty('--menu', `${menu}px`);
  }, [menu])

  useEffect(() => {
    document.documentElement.style.setProperty('--buttons', `${buttons}px`);
  }, [buttons])

  return (
    <BrowserRouter>
      <Header />
      <SideMenu />
      <div id='content'>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/blogs' element={< Blogs />}></Route>
            <Route exact path='/products' element={< Products />}></Route> 
            <Route exact path='/settings' element={
              < Settings modeCheck={modeCheck} 
              setModeCheck={setModeCheck}
              hue={hue} setHue={setHue}
              heading={heading} setHeading={setHeading} 
              menu={menu} setMenu={setMenu}
              buttons={buttons} setButtons={setButtons}
               />
            }></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
