import React, { useState } from "react";
import useAxiosData from "./useAxiosData";
import "./styles.css";

export default function App() {
  const { addresses, addDataHandler } = useAxiosData("/api/addresses");
  const [newAddress, setNewAddress] = useState("");

  const handleChange = (event) => setNewAddress(event.target.value);
  return (
    <div className="App">
      <h1> address book </h1>
      <input
        type="text"
        value={newAddress}
        placeholder="enter city"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          addDataHandler(newAddress);
          setNewAddress("");
        }}
      >
        {" "}
        Save Address{" "}
      </button>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
