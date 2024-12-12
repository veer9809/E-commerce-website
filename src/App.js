import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';



const router = createBrowserRouter ([
  {
    path:'/',
    element:<Homepage/>
  },

  {
    path: '/Cartpage',
    element:<Cartpage/>,
  },
])
function App() {

  return (
    <div >
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
