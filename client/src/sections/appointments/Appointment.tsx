import { useSelector } from "react-redux"
import RawCalender from "../../../src/components/RawCalender"
import { RootState } from "../../reduxLogic/store"

export default function Appointments() {

    const appointmentsSelected = useSelector((state: RootState) => state.appointment.appointment)
    const appointmentRendered = appointmentsSelected.map((appointment) => (
        <li key={appointment._id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc" }}>
            <p><strong>Appointment ID:</strong> {appointment.appointment_id}</p>
            <p><strong>Date:</strong> {new Date(appointment.appointment_date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {appointment.appointment_time}</p>
            <p><strong>Doctor ID:</strong> {appointment.doctor_id}</p>
            <p><strong>Patient ID:</strong> {appointment.patient_id}</p>
        </li>
    ))
    return (
        <div>
            <h1>Appointments</h1>
            <div>
               
                {appointmentsSelected.length > 0 ? (
                    <ul>
                        {appointmentRendered}
                    </ul>
                ) : (
                    <p>No appointments available.</p>
                )}
            </div>
           
            {/* <RawCalender /> */}
        </div>
    )
}