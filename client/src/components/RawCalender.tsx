import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isAfter,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfYesterday,
} from "date-fns";
import { useSelector } from "react-redux";

import { useState } from "react";
import { RootState } from "../reduxLogic/store";
import { listOfAppoints } from "../../utils/appointmentUtils";
import { dayOfWeekMap } from "../../constants/calenderContants";

export default function Example() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let selectedIdealDays = useSelector(
    (state: RootState) => state.setting.days
  ).map((day) => dayOfWeekMap[day]);
  const selecteDuration = useSelector((state: RootState) => state.setting.duration)

  const selectedSlots = useSelector((state: RootState) => state.setting.slots);
  // Generate all appointments based on the selected slots
  const allGeneratedAppointments = selectedSlots.flatMap((appointment) => {
    const startTime = parseInt(appointment.from);
    const endTime = parseInt(appointment.to);
    const duration = parseInt(selecteDuration)

    return listOfAppoints({ startTime, endTime, duration });
  });

  const renderGeneratedAppointments = allGeneratedAppointments.map(
    (apmt, index) => (
      <div
        key={index}
        className="w-full h-fit p-2 bg-gray-200 rounded-md shadow-md text-center"
      >
        {apmt}
      </div>
    )
  );

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];
  return (
    <div className="p-12 bg-white">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        {/* Adjust the grid to two columns */}
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          {/* Left: Calendar Section */}
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                  <div className="w-1 h-1 mx-auto mt-1">
                    {isAfter(day, startOfYesterday()) &&
                      selectedIdealDays.includes(getDay(day)) && (
                        <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Appointments Section */}
          <section className="mt-12 md:mt-0 md:pl-14 flex-grow min-w-0">
          {isAfter(selectedDay, startOfYesterday()) && selectedIdealDays.includes(getDay(selectedDay))
            ?
            (<div className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-4 max-h-[30rem] overflow-y-auto overflow-x-hidden">
              {renderGeneratedAppointments}
            </div>)
            :
            (<div>
              No appointments
            </div>)
          }
            
          </section>
        </div>
      </div>
    </div>
  );
}
