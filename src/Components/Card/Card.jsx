import { quirkyPowers } from "../index.js";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { toPng } from "html-to-image";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const Card = () => {
  const { input } = useOutletContext();
  const [power, setPower] = useState(null);
  const [ImageNumber] = useState(Math.floor(Math.random() * 6) + 1);
  const [PowerNumber] = useState(Math.floor(Math.random() * 150) + 1);
  const cardRef = useRef(null);
  const downloadCard = () => {
    if (cardRef.current === null) return;
    htmlToImage
      .toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        download(dataUrl, `${input || "card"}.png`);
      })
      .catch((err) => {
        console.error("Error Occured", err);
      });
  };
  useEffect(() => {
    const selectedPower = quirkyPowers.find((pow) => pow.id === PowerNumber);
    setPower(selectedPower);
  }, [PowerNumber]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 p-6">
      <div
        ref={cardRef}
        className="relative w-80 h-96 transform transition-all duration-300 hover:scale-105 hover:rotate-1"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-transparent to-purple-500 opacity-20 rounded-2xl"></div>

        <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 via-orange-300 to-red-400 rounded-2xl shadow-2xl border-8 border-yellow-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"></div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 py-2 px-4 border-b-4 border-yellow-600">
            <h2
              className="text-center text-white font-bold text-xl tracking-wide uppercase"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              {input}
            </h2>
          </div>

          <div className="flex justify-center py-4 bg-gradient-to-b from-slate-50 to-gray-100">
            <div className="relative">
              <div className="absolute inset-0 bg-slate-200 rounded-lg transform rotate-45 scale-110"></div>
              <img
                src={`https://robohash.org/${input}.png?set=set${ImageNumber}`}
                alt="Character"
                className="relative w-32 h-32 rounded-lg border-4 border-slate-400 shadow-lg bg-white"
              />
            </div>
          </div>

          {power ? (
            <div className="px-4 pb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 mb-2 border-2 border-blue-800 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-300 font-bold text-xs uppercase">
                    Power:
                  </span>
                  <span className="text-white font-bold text-sm">
                    {power.title}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-gray-400 shadow-inner">
                <p className="text-gray-800 text-xs leading-relaxed font-medium">
                  {power.description}
                </p>
              </div>

              <div className="mt-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-2 border-2 border-red-700 flex justify-around">
                <div className="text-center">
                  <div className="text-yellow-300 text-xs font-bold">ATK</div>
                  <div className="text-white font-bold">{power.atk}</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-300 text-xs font-bold">DEF</div>
                  <div className="text-white font-bold">{power.def}</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-300 text-xs font-bold">SPD</div>
                  <div className="text-white font-bold">{power.speed}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-32">
              <div className="text-white font-bold text-lg animate-pulse">
                Loading...
              </div>
            </div>
          )}

          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 rounded px-2 py-1">
            <span className="text-yellow-400 font-bold text-xs">
              #{power?.id}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-red-600 rounded-2xl -z-10 transform translate-x-1 translate-y-1"></div>
      </div>
      <div className="mt-6">
        <button
          onClick={downloadCard}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Download Card
        </button>
      </div>
    </div>
  );
};
export default Card;
