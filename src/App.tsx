import React, { createContext, useState } from 'react';
import './styles/App.scss'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import PaymentFornecedor from './pages/PaymentFornecedor';
import Contract from './pages/Contract';
export const UserContext = createContext<any>('');
export const ContratoContext = createContext<any>('');
const App = () => {
  const [user, setUser] = useState('');
  const [contrato, setContrato] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ContratoContext.Provider value={{ contrato, setContrato }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/PaymentFornecedor' element={<PaymentFornecedor />} />
          <Route path='/Contract' element={<Contract />}/>
        </Routes>
      </ContratoContext.Provider>
    </UserContext.Provider>

  )
}

export default App
