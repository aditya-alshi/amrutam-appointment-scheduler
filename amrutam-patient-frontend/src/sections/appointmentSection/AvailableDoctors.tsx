import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxLogic/store";
import { changeCurrnetDoctor } from "../../reduxLogic/features/appointment/appointmentsSlice";

export default function AvailableDoctors() {
    const allDoctors = useSelector((state: RootState) => state.appointments.doctors);
    const currentDoctorId = useSelector((state: RootState) => state.appointments.currentDoctorId)
    const dispatch = useDispatch();

    console.log(currentDoctorId)

    const renderAllDoctors = allDoctors.map((doctor) => (
        <div
            key={doctor.doctor_id}
            className="border p-4 rounded shadow-md bg-white my-2"
            onClick={() => dispatch(changeCurrnetDoctor(doctor.doctor_id)) }
        >
            <h3 className="text-lg font-bold">{doctor.doctor_name}</h3>
            <p className="text-sm text-gray-500">{doctor.doctor_email}</p>
        </div>
    ));

    return (
        <section className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>
            {renderAllDoctors.length > 0 ? (
                <div className="space-y-4">{renderAllDoctors}</div>
            ) : (
                <p className="text-gray-500">No doctors available.</p>
            )}
        </section>
    );
}
