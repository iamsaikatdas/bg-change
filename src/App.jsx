import { useState } from "react";

const backGroundColor = ["Olive", "Green", "Gray", "lightBlue","Black","Pink","Lavender","Purple" ];
function App() {
  const [bgColor, setBgColor] = useState("olive");


  return (
    <>
      <div
        className="w-full h-screen duration-200 border-2 text-center"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-white font-bold text-4xl uppercase underline p-4">
          Welcome to saikat new react project
        </h1>
        <p className="text-3xl text-white">Background color is: {bgColor}</p>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 list-none">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl px-3 py-3 bg-white rounded-full">
            {backGroundColor.map((bg) => (
              <button
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: bg }}
                onClick={()=> setBgColor(bg)}
              >
                {bg}{" "}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
