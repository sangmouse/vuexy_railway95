import { useState, useEffect } from "react";
import s from "../scss/user-form.module.scss";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

export default function UserForm() {
  const [user, setUser] = useState({
    username: "",
    department: "vti",
    city: "hn",
  });
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  let timeoutId = null;

  function onChangeUsername(event) {
    setUser({
      ...user,
      username: event.target.value,
    });
    setMessage("");
  }
  function onChangeDepartment(event) {
    setUser({
      ...user,
      department: event.target.value,
    });
  }
  function onChangeCity(event) {
    setUser({
      ...user,
      city: event.target.value,
    });
  }

  async function onSubmit() {
    clearTimeout(timeoutId);
    if (!user.username.trim()) {
      setMessage("Username is required!");
      return;
    }

    if (!params.id) {
      const payload = {
        id: nanoid(),
        username: user.username.trim(),
        department: user.department,
        city: user.city,
      };

      const query = await fetch("http://localhost:8080/users", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (query.ok) {
        setMessage("Created successfully!");
        setIsSubmit(true);
        timeoutId = setTimeout(function () {
          navigate("/");
        }, 1000);
      }
    } else {
      const payload = {
        username: user.username.trim(),
        department: user.department,
        city: user.city,
      };

      const query = await fetch(`http://localhost:8080/users/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });

      if (query.ok) {
        setMessage("Updated successfully!");
        setIsSubmit(true);
        timeoutId = setTimeout(function () {
          navigate("/");
        }, 1000);
      }
    }
  }

  function onCancel() {
    setUser({
      username: "",
      department: "vti",
      city: "hn",
    });
    navigate("/");
  }

  async function fetchDetail() {
    const query = await fetch(`http://localhost:8080/users/${params.id}`);
    const data = await query.json();
    setUser({
      ...user,
      username: data.username,
      department: data.department,
      city: data.city,
    });
  }

  useEffect(function () {
    fetchDetail();
  }, []);

  return (
    <div className={s["form"]}>
      <div className={s["form_container"]}>
        <section>
          <h1 className={s["form_heading"]}>
            {params.id ? "Update User" : "Create New User"}
          </h1>
        </section>
        <section>
          <div>
            <p className={`${s.form_msg} ${isSubmit ? s.success : ""}`}>
              {message}
            </p>
            <p className={s["form_label"]}>Username</p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={user.username}
              onChange={onChangeUsername}
            />
          </div>
          <div>
            <p className={s["form_label"]}>Department</p>
            <select
              name="department"
              id="department"
              value={user.department}
              onChange={onChangeDepartment}
            >
              <option value="vti">VTI Group</option>
              <option value="cmc">CMC</option>
              <option value="fpt">FPT Software</option>
              <option value="samsung">Samsung</option>
            </select>
          </div>
          <div>
            <p className={s["form_label"]}>City</p>
            <select
              name="city"
              id="city"
              value={user.city}
              onChange={onChangeCity}
            >
              <option value="hn">Ha Noi</option>
              <option value="hcm">HCM</option>
              <option value="da-nang">Da Nang</option>
              <option value="quy-nhon">Quy Nhon</option>
            </select>
          </div>
          {/* <div>
            <p className={s["form_label"]}>Avatar</p>
            <input type="file" name="avatar" id="avatar" />
          </div> */}
          <div className={s["form_btn-container"]}>
            <button className={s["form_btn"]} onClick={onSubmit}>
              Submit
            </button>
            <button className={s["form_btn"]} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
