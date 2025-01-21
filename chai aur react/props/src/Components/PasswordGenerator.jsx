import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setlength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setpassword] = useState("");
  const passwordref = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "@#$%&";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setpassword(pass);
  }, [length, numAllow, charAllow]);
  const copypasswordtoclipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    generatePassword();
  }, [length, numAllow, charAllow, generatePassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-slate-700 p-4">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypasswordtoclipboard}
            className="bg-blue-700 ml-3 rounded p-2"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={12}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(Number(e.target.value))} // Correct onChange to update length
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numAllow} // Use `checked` instead of `defaultChecked` to properly reflect state
              id="numberInput"
              onChange={() => setnumAllow((prev) => !prev)} // Toggle state correctly
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              checked={charAllow} // Use `checked` instead of `defaultChecked` to properly reflect state
              id="charInput"
              onChange={() => setcharAllow((prev) => !prev)} // Toggle state correctly
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
