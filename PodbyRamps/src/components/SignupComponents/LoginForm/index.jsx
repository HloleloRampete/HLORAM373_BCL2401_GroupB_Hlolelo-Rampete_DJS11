import { useState } from "react"
import InputComponent from "../../CommonComponents/Input/index"
import Button from "../../CommonComponents/Button"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    // Implement your signup logic here
  };

  return (
    <>
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
      <Button text={"Login"} onClick={handleLogin} />
    </>
  );
}
