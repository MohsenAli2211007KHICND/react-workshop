import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import NavBar from './components/NavBar';
import FavouriteView from './pages/FavouriteView';
import ListView from './pages/ListView';
function App() {
  return (
    <>
    <NavBar />
    <div className={styles.appBody}>
      <BrowserRouter>
        <Routes>
          <Route element={<ListView />} path='/'></Route>
          <Route element={<FavouriteView />} path='/favourites'></Route>
          <Route element={<FavouriteView />} path='/favourites'></Route>
          {/* <Route element={<FavouriteView />} path='/favourites'></Route>
          <Route element={<FavouriteView />} path='/favourites'></Route> */}
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
