
import DayPicker from "../../components/forms/DayPicker";
import IdealTimeSlotPicker from "../../components/forms/IdealTimeSlotPicker";
import RawCalender from "../../components/RawCalender";
import IdealAppointmentDuration from "../../components/forms/idealAppointmentDuration";
export default function AppointmentSettings() {
 

  return (
    <section className="flex flex-col justify-center items-center p-4 bg-gray-50">
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {/* Day Picker Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold">Every week you are ideally available on...</p>
          <DayPicker />
        </div>

        {/* Ideal Time Slot Picker Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold">Every Day you are available from...</p>
          <IdealTimeSlotPicker />
          <p className="text-sm text-gray-500">(17 to 20 will mean 5pm - 8pm)</p>
        </div>

        {/* Ideal Appointment Duration Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold">Each appointment should ideally be</p>
          <IdealAppointmentDuration />
        </div>
      </div>

      {/* Calendar and Appointments Section */}
      <section className=" flex flex-wrap  gap-6 w-full max-w-4xl mt-8 ">
        {/* Calendar Component */}
        <div className="">
          <RawCalender />
        </div>

        {/* Appointments Grid */}
        
      </section>
    </section>
  );
}
