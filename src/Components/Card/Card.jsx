import { quirkyPowers } from "../index.js";
import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
const Card = () => {
  const { input } = useOutletContext();
  const [power, setPower] = useState(null);
  const ImageNumber = Math.floor(Math.random() * 6) + 1;
  const PowerNumber = Math.floor(Math.random() * 100) + 1;
  const generatepower = () => {
    const selectedPower = quirkyPowers.find((pow) => pow.id === PowerNumber);
    setPower(selectedPower);
  };
  useEffect(() => {
    generatepower();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-80 p-6 flex flex-col items-center border-4 border-yellow-300">
        <img
          src={`https://robohash.org/${input}.png?set=set${ImageNumber}`}
          alt="Generated avatar"
          className="w-32 h-32 rounded-full border-4 border-red-400 shadow-lg mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">{input}</h2>
        {power ? (
          <>
            <h3 className="text-lg font-semibold text-purple-600 mb-1">
              Power: {power.title}
            </h3>
            <p className="text-gray-700 text-center">
              Description: {power.description}
            </p>
          </>
        ) : (
          <p className="text-gray-600 italic">Loading power...</p>
        )}
      </div>
    </div>
  );
};
export default Card;
