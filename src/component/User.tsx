import React, { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppselector } from "../redux/hooks";
import { setUser, UserState } from "../redux/slice/userSlice";

const User = () => {
    const user = useAppselector((state) => state.user)
    const dispatch = useAppDispatch()

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const saveUser = () => {
        let userInfo: UserState = {
            name: nameRef?.current?.value || '',
            age: Number(ageRef?.current?.value) || 0
        }
        dispatch(setUser(userInfo))
    }

    return (
        <div style={{backgroundColor:'pink', padding:'30px'}}>
            <h1>사용자 정보</h1>
            <div>
                <h2>{user.name}</h2>
                <h2>{user.age}</h2>
            </div>
            <label htmlFor="name" style={{display:"block"}}>🚀 이름 <input type="text" id="name" ref={nameRef} /* onChange={changeUser} *//></label>
            <label htmlFor="age" style={{display:"block"}}>🛸 나이 <input type="text" id="age" ref={ageRef} /* onChange={changeUser} *//></label>
            <button style={{marginTop:'20px', marginRight:'0', backgroundColor:'#f06580'}} onClick={saveUser}>저장</button>
        </div>
    )
};
export default User;