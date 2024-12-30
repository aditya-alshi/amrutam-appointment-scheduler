const { v4: uuidv4 } = require('uuid');
const { Appointment, Doctor, Patient } = require('../models/dbModel');

async function createAppointment(req, res) {
    const {
        appointmentDate: appointment_date,
        appointmentTime: appointment_time,
        doctorId: doctor_id,
        patientId: patient_id
    } = req.body;

    if(!appointment_date || !appointment_time || !doctor_id || !patient_id) {
        return res.status(400).json({
            error: "All fields are requires"
        })
    }
    try {


        const doctor = await Doctor.findOne({ doctor_id });
        if(!doctor) {
            return res.status(400).json({
                error: "Invalid Doctor Id"
            })
        }

        const patient = await Patient.findOne({ patient_id });
        if(!patient) {
            return res.status(400).json({
                error: "Invalid Patient Id"
            })
        }

        const doc = {
            appointment_id: uuidv4(),
            appointment_date,
            appointment_time,
            doctor_id,
            patient_id
        };

        const appointment = new Appointment(doc);
        await appointment.save();
        
        res.status(201).json({
            message: "Appointment record created successfully"
        })
    } catch(error) {
        console.log("Create appointment Controller Error", error);
        res.status(200).json({
            error: "Server error while adding new appointment Record"
        })
    }
}



// Get Appointments Controller
async function getAppointments(req, res) {
    try {
        const appointments = await Appointment.find()

        if (!appointments || appointments.length === 0) {
            return res.status(404).json({ error: 'No appointments found' });
        }

        res.status(200).json(appointments);
    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
}


module.exports = {
    createAppointment,
    getAppointments
}