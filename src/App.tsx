import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from "react-redux"
import Bank from './component/Bank';
import { useAppDispatch, useAppselector } from './redux/hooks';
import { deposit } from './redux/slice/bankSlice';
import User from './component/User';

const App = () => {
  const count = useAppselector((state) => state.bank.amount)
  const dispatch = useAppDispatch()
  const amountRef = useRef<HTMLInputElement>(null)

  const clickDeposit = () => {
      let amount: number = Number(amountRef?.current?.value) || 0
      dispatch(deposit(amount))
  }

  return (
    <div className="App">
        <Bank/>
        <User/>
    </div>
  );
}

export default App;
