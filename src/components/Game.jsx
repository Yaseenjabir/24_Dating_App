import { useReducer, useState } from "react";
import useStore from "../Store/Store";
function reducer(state, action) {
  switch (action.type) {
    case "yes":
      return { imgUrl: action.payload };
    case "no":
      return { imgUrl: action.payload };
  }
}

const Game = () => {
  const initialEmoji = {
    imgUrl:
      "https://www.animatedimages.org/data/media/311/animated-love-smiley-image-0398.gif",
  };
  const [state, dispatch] = useReducer(reducer, initialEmoji);

  const {
    display,
    setDisplay,
    mainText,
    setMainText,
    noBtnStyles,
    setNoBtnStyles,
    counter,
    setCounter,
    hideNoBtn,
    setHideNoBtn,
  } = useStore();

  const handleYes = () => {
    dispatch({
      type: "yes",
      payload:
        "https://www.animatedimages.org/data/media/673/animated-dance-smiley-image-0024.gif",
    });
    setDisplay("hidden");
    setMainText("Yeahhhhh!!!!! Letssss Goooooo");
  };

  const angryEmoji = (input) => {
    dispatch({
      type: "no",
      payload: input,
    });
  };

  const handleNo = () => {
    const messages = [
      {
        text: "ohhhhhh comeonn!!!",
        code: "0105",
        size: "w-[71px] h-[42px]",
      },
      {
        text: "NOO you are doing it again",
        code: "0097",
        size: "w-[55px] h-[34px]",
      },
      {
        text: "againn?? huhh??",
        code: "0290",
        size: "w-[39px] h-[26px]",
      },
      {
        text: "Why soo rudee??",
        code: "0173",
        size: "w-[23px] h-[18px]",
      },
      {
        text: "Click the greeen button noww!!",
        code: "0138",
        size: "w-[0px] h-[0px]",
      },
    ];

    if (counter < messages.length) {
      const { size, text, code } = messages[counter];
      console.log(messages[counter]);
      setCounter(counter + 1);
      setNoBtnStyles(size);
      setMainText(text);
      angryEmoji(
        `https://www.animatedimages.org/data/media/2116/animated-angry-smiley-image-${code}.gif`
      );
    } else {
      setHideNoBtn("hidden");
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center h-screen px-2 bg-[#111111] text-white">
        <div className="min-w-[300px] border min-h-60 rounded-2xl flex flex-col items-center justify-center bg-white text-black shadow-lg border-black shadow-white">
          <img
            src={state.imgUrl}
            border="0"
            alt="animated-love-smiley-image-0398"
            className="w-18 h-10 translate-x-[-20px] animate-bounce"
          />
          <h1 className="mt-5 text-lg font-semibold select-none px-5">
            {mainText}
          </h1>
          <div className={`${display} items-center gap-10 mt-5`}>
            <button
              onClick={handleYes}
              className="w-[87px] h-[42px] border rounded-md bg-green-400 text-white font-semibold cursor-pointer"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className={`${noBtnStyles} border rounded-md bg-red-500 text-white font-semibold cursor-pointer ${hideNoBtn}`}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
