import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Root from './Root';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Search from './Pages/Search';

const route= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='search' element={<Search/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App ;
