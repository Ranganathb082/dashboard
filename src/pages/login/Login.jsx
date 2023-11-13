import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate() 

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user is ",user);
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(true)
        // ..
      });
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          name=""
          id=""
        />

        <button type="submit">Login</button>
        {err && <span>Worng email and password</span>}
      </form>
    </div>
  );
};

export default Login;
