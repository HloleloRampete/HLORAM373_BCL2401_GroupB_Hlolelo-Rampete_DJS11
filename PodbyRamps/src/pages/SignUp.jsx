import { useState } from "react";
import Header from "../components/CommonComponents/Header";
import SignupForm from "../components/SignupComponents/SignupForm";

export default function SignUpPage() {
  const [flag, setFlag] = useState(false);


  return (
    <div>
      <Header />

      <div className="input-wrapper">
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <></>}
        {!flag ? (
          <p onClick={() => setFlag(!flag)}>
            Already have an Account? Click here to Login.
          </p>
        ) : (
          <p onClick={() => setFlag(!flag)}>
            Do not have an account? Click here to Signup.
          </p>
        )}
      </div>
    </div>
  );
}
