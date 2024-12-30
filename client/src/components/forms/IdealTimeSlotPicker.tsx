import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxLogic/store";
import { addTimeSlots, deleteTimeSlots, mutateTimeSlots } from "../../reduxLogic/features/settings/settingsSlice";

export default function IdealTimeSlotPicker() {

  const selectedSlots = useSelector((state: RootState) => state.setting.slots)
  const dispatch = useDispatch() ;


  // const [slots, setSlots] = useState<
  //   {
  //     id: string;
  //     from: string;
  //     to: string;
  //   }[]
  // >([
  //   {
  //     id: Date.now().toLocaleString(),
  //     from: "17",
  //     to: "20",
  //   },
  // ]);

  const handleAddTimeSlot = () => {
    dispatch(addTimeSlots())
  };

  const handleDeleteSlote = (indexClick: string) => {
    dispatch(deleteTimeSlots(indexClick))
  };

  const slotsRender = selectedSlots.map((slot) => (
    <div
      key={slot.id}
      className="relative w-fit *:rounded-md flex justify-center items-center gap-2 border rounded-md p-2 bg-backG"
    >
      <button
        disabled={selectedSlots.length === 1}
        aria-label="Remove slot"
        className="absolute top-[-16] right-0 text-red-500 text-[1.15rem] active:font-bold"
        onClick={() => handleDeleteSlote(slot.id)}
      >
        x
      </button>
      <input
        onChange={(e) => {
          dispatch(mutateTimeSlots({slotId: slot.id, type:"from", value: e.target.value}))
          // setSlots((prev) => {
          //   return prev.map((p) =>
          //     p.id === slot.id ? { ...p, from: e.target.value } : p
          //   );
          // });
        }}
        type="number"
        max={24}
        min={0}
        value={slot.from}
      />
      <p>to</p>
      <input
        onChange={(e) => {
          dispatch(mutateTimeSlots({slotId: slot.id, type:"to", value: e.target.value}))
          // setSlots((prev) => {
          //   return prev.map((p) =>
          //     p.id === slot.id ? { ...p, to: e.target.value } : p
          //   );
          // });
        }}
        type="number"
        name=""
        max={24}
        min={0}
        id=""
        value={slot.to}
      />
    </div>
  ));

  return (
    <div className="flex gap-3">
      {slotsRender}
      <button
        onClick={handleAddTimeSlot}
        className="border flex items-center justify-center w-[3rem] bg-primaryT text-[1.3rem] text-backG font-bold  rounded-md active:-scale-95"
      >
        +
      </button>
    </div>
  );
}
