import { createSlice } from '@reduxjs/toolkit'
import { Days, Range } from '../../../../types/forms'

const daysState: Days[] = ['Mon', "Sun"];
const RangeArray: Range[] = [
    {
      id: Date.now().toLocaleString(),
      from: "17",
      to: "20",
    },
  ]
export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        days : daysState,
        slots: RangeArray,
        duration: "25"
    },
    reducers: {
        mutateDays: (state, action) => {
            // This should be used by the DayPicker Component
            state.days = state.days.includes(action.payload)
          ? state.days.filter((d) => d !== action.payload) 
          : [...state.days, action.payload] 
        },

        addTimeSlots: (state) => {
            // This should be used by IdealTimeSlotPicker component
            state.slots =  [
                ...state.slots,
                {
                  id: Date.now().toLocaleString(),
                  from: "17",
                  to: "20",
                },
              ]
        },

        deleteTimeSlots: (state, action) => {
            // This should be used by IdealTimeSlotPicker component
            state.slots = state.slots.filter((slot) => slot.id !== action.payload)
        },

        mutateTimeSlots: (state, action) => {
            // This should be used by IdealTimeSlotPicker component
            // {slotId: number, type:"from"|"to", value: numer}
            state.slots=  state.slots.map((p) =>
                  p.id === action.payload.slotId ? { ...p, [action.payload.type]: action.payload.value } : p
                );
        },

        mutateDuration: (state, action) => {
            // This should be used by IdealAppointmentDuration component
            // console.log("mutateDuration action from slice", action.payload)
            state.duration = action.payload
        }
    }
})

export const { mutateDays, addTimeSlots, deleteTimeSlots, mutateTimeSlots, mutateDuration } = settingsSlice.actions

export default settingsSlice.reducer