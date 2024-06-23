import { create } from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  combine(
    {
      display: "flex",
      mainText: "Do you want to go on a date with me?",
      noBtnStyles: "w-[87px] h-[42px]",
      counter: 0,
      hideNoBtn: "",
    },

    (set) => ({
      setDisplay: (newDisplay) => set({ flex: newDisplay }),
      setMainText: (newMainText) => set({ mainText: newMainText }),
      setNoBtnStyles: (newNoBtnStyles) => set({ noBtnStyles: newNoBtnStyles }),
      setCounter: (newCounter) =>
        set((state) => ({ ...state, counter: newCounter })),
      setHideNoBtn: (newHideBtn) => set({ hideNoBtn: newHideBtn }),
    })
  )
);

export default useStore;
