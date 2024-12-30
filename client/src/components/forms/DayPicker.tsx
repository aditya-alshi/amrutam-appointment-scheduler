import { useDispatch, useSelector } from "react-redux";
import { daysOfTheWeek } from "../../../constants/componentConstants";
import { RootState } from "../../reduxLogic/store";
import { mutateDays } from "../../reduxLogic/features/settings/settingsSlice";

export default function DayPicker() {
  const selectedDays = useSelector((state: RootState) => state.setting.days)
  const dispatch = useDispatch();

  const renderDayPicker = daysOfTheWeek.map((day, index) => (
    <button
      key={index}
      onClick={() => dispatch(mutateDays(day))} // This should Mutate the days in the settingsSlice state
      className={`w-[3rem] h-[3rem] text-center border rounded-md flex justify-center items-center p-1 ${
        selectedDays.includes(day)
          ? "bg-gray-900 text-white"
          : "text-gray-900 bg-white"
      }`}
    >
      {day}
    </button>
  ));

  return <div className="flex items-center p-1 gap-2">{renderDayPicker}</div>;
}
