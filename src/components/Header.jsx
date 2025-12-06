import { useNavigate } from "react-router-dom";
import s from "../scss/header.module.scss";
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();

  function onSignOut() {
    localStorage.removeItem("user");
    navigate("/sign-in");
  }

  useEffect(function () {
    if (!localStorage.getItem("user")) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className={s.header}>
      <p className={s.header_msg}>
        Welcome, <span>John</span>
      </p>
      <span>|</span>
      <button className={s.header_btn} onClick={onSignOut}>
        Sign out <span></span>
      </button>
    </div>
  );
}
