import {Outlet} from 'react-router-dom'
import NaviBar from "./Components/NaviBar";
import Player from './Components/Player';

function Root() {
  return (
    <>
    <NaviBar/>
    <Outlet />
    <Player/>
    </>
  )
}

export default Root ;
