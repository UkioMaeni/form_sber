import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IStep{
    step:number;
}

const initialState:IStep={
    step:0
}

const stepSlice= createSlice({
    name:"user_info",
    initialState,
    reducers:{
        setStep(state,action:PayloadAction<IStep>){

            const {step}=action.payload
            state.step=step
        },

    }
})

export default userSlice.reducer
export const {setPhone,setEmail}=userSlice.actions