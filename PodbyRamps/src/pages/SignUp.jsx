import { useState } from "react";
import Header from "../components/Header";
import InputComponent from "../components/Input";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  return (
    <div>
      <Header />

      <div className="input-wrapper">
        <h1>Signup</h1>
        <InputComponent
          state={fullName}
          setState={setFullName}
          placeholder="Full Name"
          type="text"
          required={true}
        />
      </div>
    </div>
  );
}
