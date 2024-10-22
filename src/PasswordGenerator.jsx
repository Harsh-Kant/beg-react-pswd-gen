import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChar] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialChars = "!@#$%^&*()";

    let validChars = lowerCaseChars;
    if (includeUpperCase) {
      validChars += upperCaseChars;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }
    let generatePassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randIndex = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.charAt(randIndex);
    }

    console.log(generatePassword);
    setPassword(generatePassword);
  };

  // generatePassword();

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-400 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label>Password length : </label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              className="w-12 bg-purple-500 pl-1"
              type="number"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include UpperCase : </label>
            <ReactSwitch
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers : </label>
            <ReactSwitch
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters : </label>
            <ReactSwitch
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChar(!includeSpecialChars)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <button
            onClick={generatePassword}
            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-500 hover:to-yellow-500 p-2  text-white font-bold rounded-md"
          >
            Generate Password
          </button>
          {/* <h2>{password}</h2> */}
          {password && (
            <p className="font-normal text-white mt-2">
              Generated password : <span className="font-bold">{password}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
