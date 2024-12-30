const { Doctor } = require("../models/dbModel");
const { v4: uuidv4 } = require('uuid');


//Create a Doctor 
async function createDoctor(req, res) {
    try {
        const { name, email, workingDays, timeSlots, apponintmentDuration } = req.body;
        if (!name || !email || !workingDays || !timeSlots || !apponintmentDuration) {
            return res.status(400).json({
                error: "All fields are requires"
            })
        }

        const {
            name: doctor_name,
            email: doctor_email,
            workingDays: doctor_working_days,
            timeSlots: doctor_time_slots,
            apponintmentDuration: doctor_appointment_duration
        } = { name, email, workingDays, timeSlots, apponintmentDuration }

        const doc = {
            doctor_id : uuidv4(),
            doctor_name,
            doctor_email,
            doctor_working_days,
            doctor_time_slots,
            doctor_appointment_duration
        }
        const doctor = new Doctor(doc)

        await doctor.save();

        res.status(201).json({
            message: "Doctor record created successfully"
        })
    } catch (error) {
        console.log("Create Doctor Controller Error", error);
        res.status(200).json({
            error: "Server error while adding new Doctor Record"
        })
    }
}

async function fetchAllDoctors(req, res) {
    try {
        const result = await Doctor.find({});
        res.status(200).json({
            message: "Records fetched successfully",
            result
        })

    } catch(error) {
        console.log("Doctors Controller fetchDoctors Error: ", error);
        return res.status(500).json({
            error: "Server Error while fetching all Doctors records"
        })
    }
}

module.exports = {
    createDoctor,
    fetchAllDoctors
}