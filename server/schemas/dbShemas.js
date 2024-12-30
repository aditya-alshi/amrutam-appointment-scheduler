const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctor_id: String, 
    doctor_name: String,
    doctor_email:String,
    doctor_appointment_duration: String,
    doctor_working_days:Array,
    doctor_time_slots: Array
});

const patientSchema = new mongoose.Schema({
    patient_id: String,
    patient_name: String,
    patient_contact_no: String,
    patient_email_address: String,
})

const appointmentSchema = new mongoose.Schema({
    appointment_id: String,
    appointment_date: Date,
    appointment_time: String,
    doctor_id: { 
        type: mongoose.Schema.Types.String, ref: "Doctor"
     },
    patient_id: {
        type: mongoose.Schema.Types.String, ref: "Patient"
    }
});


module.exports = {
    doctorSchema,
    patientSchema,
    appointmentSchema
}