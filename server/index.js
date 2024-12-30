const express = require('express');
const cors = require('cors');
const { createDoctor, fetchAllDoctors } = require('./controllers/doctorControllers')
const { main }  = require("./lib/mongooseCon");
const { createPatient } = require('./controllers/patientsControllers');
const { createAppointment, getAppointments } = require('./controllers/appointmentControllers');
const app = express();

app.use(express.json())
app.use(cors());

main();

app.post('/add-doctor', createDoctor );
app.post('/add-patient', createPatient)
app.post('/add-appointment', createAppointment)

app.get('/get-all-doctors', fetchAllDoctors);
app.get('/all-appointments',getAppointments)

module.exports = {
    app
}