import styles from '../styles/Home.module.css'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Artifacts from './components/Artifacts';
import Character from './components/Character';
import '../../public/fonts/fontstyle.css';
export default function HomeComponents() {
  return (
    <>
      <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/artifacts' element={<Artifacts />} />
          <Route path='/character' element={<Character />} />
      </Routes>
    </>
  )
}
