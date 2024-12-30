import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './reduxLogic/store.ts'
import { Provider } from 'react-redux'
import { allAppointMentThunk } from './reduxLogic/features/appointments/appointmentSlice.ts'

store.dispatch(allAppointMentThunk())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
