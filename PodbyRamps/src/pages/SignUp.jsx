import { useState } from "react";
import Header from "../components/CommonComponents/Header";
import InputComponent from "../components/CommonComponents/Input";
import Button from "../components/CommonComponents/Button";
import SignupForm from "../components/SignupComponents/SignupForm";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false)

  const handleSignup = () => {
    // Implement your signup logic here
  }

  return (
    <div>
      <Header />

      <div className="input-wrapper">
        <h1>Signup</h1>
        <SignupForm />
        <p>Click here if you already have an Account. Login.</p>
      </div>
    </div>
  );
}
