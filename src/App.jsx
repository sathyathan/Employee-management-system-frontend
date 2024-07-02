import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './Pages/Employees';
import CreateEmployee from './Pages/CreateEmployee';
import UpdateEmployee from './Pages/UpdateEmployee';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/create' element={<CreateEmployee/>} />
        <Route path = '/update/:id' element={<UpdateEmployee />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;