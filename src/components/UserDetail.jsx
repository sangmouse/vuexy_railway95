import { Link, useParams } from "react-router-dom";
import s from "../scss/detail.module.scss";
import { useEffect, useState } from "react";
import { cities, departments } from "../constant";

export default function UserDetail() {
  const params = useParams();
  const [userDetail, setUserDetail] = useState(null);

  async function fetchUser() {
    const query = await fetch(`http://localhost:8080/users/${params?.id}`);
    const data = await query.json();
    setUserDetail(data);
  }

  useEffect(function () {
    fetchUser();
  }, []);

  return (
    <div className={s.detail}>
      <Link className={s.detail_back} to="/">
        <img src="/icon/ic-back.png" alt="" />
        <span>Back to home</span>
      </Link>
      <hr />
      <ul>
        <li>
          <img src="/icon/ic-setting.png" alt="" />
          <p>User ID : </p>
          <p>{userDetail?.id}</p>
        </li>
        <li>
          <img src="/icon/ic-avatar.png" alt="" />
          <p>User Name : </p>
          <p>{userDetail?.username}</p>
        </li>

        <li>
          <img src="/icon/ic-globe.png" alt="" />
          <p>Department : </p>
          <p>
            {
              departments.find((ele) => ele.value === userDetail?.department)
                ?.label
            }
          </p>
        </li>
        <li>
          <img src="/icon/ic-city.png" alt="" />
          <p>City : </p>
          <p>{cities.find((ele) => ele.value === userDetail?.city)?.label}</p>
        </li>
      </ul>
    </div>
  );
}
