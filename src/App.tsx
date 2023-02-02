import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import './styles/App.scss'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import PaymentFornecedor from './pages/PaymentFornecedor';
export const UserContext = createContext<any>('');
const App = (props: any) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/PaymentFornecedor' element={<PaymentFornecedor />}/>
      </Routes>
    </UserContext.Provider>

  )
}

export default App
