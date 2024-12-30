type MongoDBObjectId = {
    $oid: string;
  };
  
  type MongoDBVersion = {
    $numberInt: string;
  };
  
  type DoctorTimeSlot = {
    id: string; // Represents a unique identifier, possibly a timestamp or a UUID
    from: string; // Representing hours in string format
    to: string;   // Representing hours in string format
  };
  
 export interface DoctorDocument {
    _id: MongoDBObjectId;
    doctor_id: string;
    doctor_name: string;
    doctor_email: string;
    doctor_appointment_duration: string;
    doctor_working_days: string[]; // Array of days like ["Mon", "Fri"]
    doctor_time_slots: DoctorTimeSlot[]; // Array of time slots
    __v: MongoDBVersion;
  }
  
export type Days = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'


export const dayOfWeekMap: Record<Days, number> = {
    "Mon": 1 ,
    "Tue": 2,
    "Wed": 3 ,
    "Thu": 4 ,
    "Fri": 5 ,
    "Sat": 6 ,
    "Sun": 0 ,
}