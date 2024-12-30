import { useDispatch, useSelector } from "react-redux"
import { mutateDuration } from "../../reduxLogic/features/settings/settingsSlice"
import { RootState } from "../../reduxLogic/store"

export default function IdealAppointmentDuration() {
    const selectedDuration = useSelector((state: RootState) => state.setting.duration);
    const dispatch = useDispatch();
    return (
            <div className="flex items-center gap-2">
                Set ideal duration per Appointment
                <input className="border p-2" onChange={(e) => dispatch(mutateDuration(e.target.value))} value={selectedDuration} type="number" name="" min={1} max={60} id="" />
                <p>minutes</p>
            </div>
    )
}