const {doctorSchema, appointmentSchema, patientSchema} = require('../schemas/dbShemas')
const mongoose = require('mongoose');

const Doctor = mongoose.model('Doctor', doctorSchema);
const Patient = mongoose.model('Patient', patientSchema);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = {
    Doctor,
    Appointment,
    Patient
}