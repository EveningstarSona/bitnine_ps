import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotImplemented from './components/NotImplemented';




function App() {
  const [_token, setToken] = useState<string>("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login setToken={setToken}/>} />
        <Route path="register" element={<Register />} />
        <Route path="/:any" element={<NotImplemented />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
