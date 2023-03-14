import React, { useRef } from "react";
import { useAppselector, useAppDispatch } from "../redux/hooks";
import { deposit, withdraw, bankrupt } from "../redux/slice/bankSlice";

const Bank = () => {
    const count = useAppselector((state) => state.bank.amount)
    const dispatch = useAppDispatch()

    const amountRef = useRef<HTMLInputElement>(null)

    const clickDeposit = () => {
        let amount: number = Number(amountRef?.current?.value) || 0
        dispatch(deposit(amount))
    }

    const clickWithdraw = () => {
        let amount: number = Number(amountRef?.current?.value) || 0
        dispatch(withdraw(amount))
    }

    const clickBankrupt = () => {
        dispatch(bankrupt())
    }

    return (
        <div style={{backgroundColor:'#d0ed6f', padding:'50px'}}>
            <h1>💰부자되세요~💰</h1>
            <h1>{count}</h1>
            <input type="text" ref={amountRef}/>
            <button style={{backgroundColor:'#3fd46c'}} onClick={clickDeposit}>Deposit</button>
            <button style={{backgroundColor:'#3fd46c'}} onClick={clickWithdraw}>Withdraw</button>
            <button style={{backgroundColor:'#3fd46c'}} onClick={clickBankrupt}>Bankrupt</button>
        </div>
    )
};
export default Bank;