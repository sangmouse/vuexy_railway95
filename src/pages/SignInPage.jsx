import { useEffect, useState } from "react";
import s from "../scss/sign-in.module.scss";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isSignin, setIsSignin] = useState(false);
  const navigate = useNavigate();

  function onChangeUserName(event) {
    setUser({
      ...user,
      username: event.target.value,
    });
  }

  function onChangePassword(event) {
    setUser({
      ...user,
      password: event.target.value,
    });
  }
  function onSubmit() {
    const username = user.username.trim();
    const password = user.password.trim();

    if (!username || !password) {
      setMessage("All fields are required!");
      return;
    }

    if (username !== "admin" || password !== "admin") {
      setMessage("Account incorrect!");
      return;
    }

    window.localStorage.setItem("user", JSON.stringify({ ...user }));
    setIsSignin(true);
    setMessage("Signin successfully!");
    navigate("/");
  }

  useEffect(function () {
    if (!!window.localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  return (
    <div className={s["signin"]}>
      <div className={s["signin_container"]}>
        <section>
          <h1 className={s["signin_heading"]}>Welcome to Vuexy! 👋</h1>
          <p className={s["signin_subheading"]}>
            Please sign-in to your account and start the adventure
          </p>
        </section>
        <section>
          <p className={`${s.signin_msg} ${isSignin ? s.success : ""}`}>
            {message}
          </p>
          <div>
            <p className={s["signin_label"]}>Username</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              value={user.username}
              onChange={onChangeUserName}
            />
          </div>
          <div>
            <p className={s["signin_label"]}>Password</p>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={user.password}
              onChange={onChangePassword}
            />
          </div>
          <button className={s["signin_btn"]} onClick={onSubmit}>
            Sign in
          </button>
        </section>
      </div>
    </div>
  );
}
