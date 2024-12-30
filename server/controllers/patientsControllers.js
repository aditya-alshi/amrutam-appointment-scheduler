const { v4: uuidv4 } = require('uuid');
const { Patient } = require('../models/dbModel');

async function createPatient(req, res) {
    const { 
        patientName: patient_name,
        patientContactNo: patient_contact_no,
        patientEmailAddress: patient_email_address,
     } = req.body

     if(!patient_name || !patient_contact_no || !patient_email_address) {
        return res.status(400).json({
            error: "All fields are requires"
        })
     }

    try {
        const doc = {
            patient_id: uuidv4(),
            patient_name,
            patient_contact_no,
            patient_email_address
        }

        const patient = new Patient(doc);
        await patient.save();
        
        res.status(201).json({
            message: "Patient record created successfully"
        })
    } catch(error) {
        console.log("Create Patient Controller Error", error);
        res.status(200).json({
            error: "Server error while adding new Patient Record"
        })
    }
}

module.exports = {
    createPatient
}