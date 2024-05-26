import React, { useState } from "react";
import "./App.css";

function App() {
  const initialData = {
    name: "",
    email: "",
    password: "",
    nickname:"",
    gender: "",
    address: "",
  };
  const [inputData, setInputData] = useState(initialData);

  function handleData(e) {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", inputData);
    setInputData(initialData);
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Registration form</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={inputData.name}
          onChange={handleData}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={inputData.email}
          onChange={handleData}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={inputData.password}
          onChange={handleData}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your nickname"
          name="nickname"
          value={inputData.password}
          onChange={handleData}
        />
      </div>

      <div>
        <select
          name="gender"
          value={inputData.gender}
          onChange={handleData}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <textarea
          placeholder="Enter Your Address"
          name="address"
          value={inputData.address}
          onChange={handleData}
        ></textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
