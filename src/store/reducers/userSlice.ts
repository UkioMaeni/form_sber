import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserInfo{
    phone:string;
    email:string;
}

const initialState:UserInfo={
    phone:"",
    email:""
}

 const userSlice= createSlice({
    name:"user_info",
    initialState,
    reducers:{
        setInfo(state,action:PayloadAction<UserInfo>){
            const {phone,email}=action.payload
            state.phone=phone
            state.email=email
        }
    }
})

export default userSlice.reducer
export const {setInfo}=userSlice.actions