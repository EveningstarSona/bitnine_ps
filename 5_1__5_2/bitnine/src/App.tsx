import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Header from './components/global/Header/Header';
import Footer from './components/global/Footer';
import Login from './components/Login/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      <Route path="dashboard" element={<Dashboard />}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
