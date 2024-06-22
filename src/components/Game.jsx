import { useReducer, useState } from "react";

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

  const [display, setDisplay] = useState("flex");
  const [mainText, setMainText] = useState(
    "Do you want to go on a date with me?"
  );

  const handleYes = () => {
    dispatch({
      type: "yes",
      payload:
        "https://www.animatedimages.org/data/media/673/animated-dance-smiley-image-0024.gif",
    });
    setDisplay("hidden");
    setMainText("Yeahhhhh!!!!! Letssss Goooooo");
  };

  const [noBtnStyles, setNoBtnStyles] = useState("w-[87px] h-[42px]");
  const [counter, setCounter] = useState(0);
  const [hideNoBtn, setHideNoBtn] = useState("");

  const angryEmoji1 = () => {
    dispatch({
      type: "no",
      payload:
        "https://www.animatedimages.org/data/media/2116/animated-angry-smiley-image-0105.gif",
    });
  };

  const angryEmoji2 = () => {
    dispatch({
      type: "no",
      payload:
        "https://www.animatedimages.org/data/media/2116/animated-angry-smiley-image-0097.gif",
    });
  };

  const angryEmoji3 = () => {
    dispatch({
      type: "no",
      payload:
        "https://www.animatedimages.org/data/media/2116/animated-angry-smiley-image-0290.gif",
    });
  };
  const angryEmoji4 = () => {
    dispatch({
      type: "no",
      payload:
        "https://www.animatedimages.org/data/media/2116/animated-angry-smiley-image-0173.gif",
    });
  };

  const angryEmoji5 = () => {
    dispatch({
      type: "no",
      payload:
        "https://www.animatedimages.org/data/media/2116/animated-angry-smiley-image-0138.gif",
    });
  };

  const handleNo = () => {
    if (counter === 0) {
      setCounter((prevVal) => prevVal + 1);
      setNoBtnStyles("w-[71px] h-[42px]");
      setMainText("ohhhhhh comeonn!!!");
      angryEmoji1();
    } else if (counter === 1) {
      setCounter((prevVal) => prevVal + 1);
      setNoBtnStyles("w-[55px] h-[34px]");
      setMainText("NOO you are doing it again");
      angryEmoji2();
    } else if (counter === 2) {
      setCounter((prevVal) => prevVal + 1);
      setNoBtnStyles("w-[39px] h-[26px]");
      setMainText("againn?? huhh??");
      angryEmoji3();
    } else if (counter === 3) {
      setCounter((prevVal) => prevVal + 1);
      setNoBtnStyles("w-[23px] h-[18px]");
      setMainText("Why soo rudee??");
      angryEmoji4();
    } else if (counter === 4) {
      setCounter((prevVal) => prevVal + 1);
      setNoBtnStyles("w-[0px] h-[0px]");
      setHideNoBtn("hidden");
      setMainText("Click the greeen button noww!! ");
      angryEmoji5();
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
