import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDoctors } from "../../../api/appointments/appointmentAPIs";
import { DoctorDocument } from "../../../types/doctorTypes";

export const fetchAllDoctors = createAsyncThunk(
    'appointment/fetchAllDoctors',
    async () => {
        const result = await getAllDoctors()
        return result
    }
)

interface AppointmentState {
    doctors: DoctorDocument[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    currentDoctorId: string
}

const initialState = {
    doctors: [],
    loading: "idle",
    currentDoctorId: ""
}satisfies AppointmentState as AppointmentState

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        changeCurrnetDoctor: (state, action) => {
            state.currentDoctorId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllDoctors.fulfilled, (state, action) => {
            state.doctors = (action.payload.result)
        })
    }
})



export const { changeCurrnetDoctor } = appointmentSlice.actions

export default appointmentSlice.reducer;