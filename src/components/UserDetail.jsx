import { Link } from "react-router-dom";
import s from "../scss/detail.module.scss";

export default function UserDetail() {
  return (
    <div className={s.detail}>
      <Link className={s.detail_back} to="/">
        <img src="/icon/ic-back.png" alt="" />
        <span>Back to home</span>
      </Link>
      <hr />
      <ul>
        <li>
          <img src="/icon/ic-avatar.png" alt="" />
          <p>User Name : </p>
          <p>John Doe</p>
        </li>
        <li>
          <img src="/icon/ic-setting.png" alt="" />
          <p>Avatar : </p>
          <p>John Doe</p>
        </li>
        <li>
          <img src="/icon/ic-globe.png" alt="" />
          <p>Department : </p>
          <p>John Doe</p>
        </li>
        <li>
          <img src="/icon/ic-city.png" alt="" />
          <p>City : </p>
          <p>John Doe</p>
        </li>
      </ul>
    </div>
  );
}
