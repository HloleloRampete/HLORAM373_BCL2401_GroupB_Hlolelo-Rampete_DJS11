import { useState } from "react";
import Header from "../components/Header";
import InputComponent from "../components/Input";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  return (
    <div>
      <Header />

      <div>
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
