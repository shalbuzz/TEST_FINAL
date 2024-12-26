
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import ListOfCoins from './Pages/ListOfCoins/ListOfCoins';
import AdminPanelAdd from './Pages/AdminPanelAdd/AdminPanelAdd';
import Description from './Pages/Description/Description';
import HomePageAdvanced from './Pages/HomePageAdvanced/HomePageAdvanced';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import HomePageCoins from './Pages/HomePageCoins/HomePageCoins';
const App = ()=>{
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/listOfCoins' element={<ListOfCoins/>}></Route>
        <Route path='/adminPanelAdd' element={<AdminPanelAdd/>}></Route>
        <Route path='/description' element={<Description/>}></Route>
        <Route path='/homePageAdvanced' element={<HomePageAdvanced/>}></Route>
        <Route path='/adminPanel' element={<AdminPanel/>}></Route>
        <Route path="/" element={<HomePageCoins />}></Route>
         <Route path="/listOfCoins" element={<ListOfCoins />}></Route>

      </Routes>
    </Router>
    </>
  )
}
export default App;