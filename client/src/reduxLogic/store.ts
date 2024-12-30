import { configureStore } from "@reduxjs/toolkit";
import  settingsReducer from "./features/settings/settingsSlice";
import appointmentReducer from "./features/appointments/appointmentSlice"

export const store = configureStore({
    reducer: {
        setting: settingsReducer,
        appointment: appointmentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch