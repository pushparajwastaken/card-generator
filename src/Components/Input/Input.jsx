import { useState } from "react";

const Input = ({ setInnput }) => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInnput(username);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Enter your X(formerly Twitter) username
          </h2>
          <div className="relative mb-8">
            <input
              type="text"
              value={username}
              placeholder="Enter Username"
              className="   border w-full p-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="  w-full
            bg-blue-600 text-white py-3
            rounded-md
            hover:bg-blue-700
            transition"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Input;
