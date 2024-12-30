import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { fetchAllDoctors } from './reduxLogic/features/appointment/appointmentsSlice.ts'

import { store } from './reduxLogic/store.ts'
import { Provider } from 'react-redux'

store.dispatch(fetchAllDoctors());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </StrictMode>,
)
