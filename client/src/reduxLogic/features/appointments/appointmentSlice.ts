import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllAppoints } from "../../../apis/appointmentAPIs";

export const allAppointMentThunk = createAsyncThunk(
    'appointment/all',
    async () => {
        const result = await getAllAppoints();
        return result;
    } 
)

type Appointment = {
    _id: string; 
    appointment_id: string; 
    appointment_date: string; 
    appointment_time: string; 
    doctor_id: string; 
    patient_id: string; 
    __v: number; 
};
interface AppointmentState {
    appointment: Appointment[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
}

const initialState = {
    appointment: [],
    loading: "idle"
} satisfies AppointmentState as AppointmentState;

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(allAppointMentThunk.fulfilled, (state, action) => {
            state.appointment = action.payload
        })
    }
})

export default appointmentSlice.reducer;