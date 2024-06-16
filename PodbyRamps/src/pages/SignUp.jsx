import { useState } from "react";
import Header from "../components/Header";
import InputComponent from "../components/Input";
import Button from "../components/Button";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
  }

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
        <InputComponent
          state={email}
          setState={setEmail}
          placeholder="Email"
          type="text"
          required={true}
        />
        <InputComponent
          state={password}
          setState={setPassword}
          placeholder="Password"
          type="password"
          required={true}
        />
        <InputComponent
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder="Confirm Password"
          type="password"
          required={true}
        />
        < Button text={"Signup"} onClick={handleSignup} />
      </div>
    </div>
  );
}
