import { useEffect, useState } from "react";
import s from "../scss/list.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { cities, departments } from "../constant";

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  async function fetchList() {
    const query = await fetch("http://localhost:8080/users");
    const data = await query.json();
    setUserList(data);
  }

  async function onRemove(id) {
    await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    });
    await fetchList();
  }

  function onAddNew() {
    navigate("/user/create");
  }

  useEffect(function () {
    fetchList();
  }, []);

  return (
    <div className={s.list}>
      <div className={s.list_header}>
        <h1>Data table with users</h1>
        <button onClick={onAddNew}>
          <img src="icon/ic-add-more.png" alt="" /> Create New User
        </button>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Department</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        {userList.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>
                {departments.find((ele) => ele.value === item.department).label}
              </td>
              <td>{cities.find((ele) => ele.value === item.city).label}</td>
              <td>
                <Link to={`user/${item.id}`}>
                  <img src="icon/ic-view.png" alt="" />
                </Link>
                <Link to={`/user/edit/${item.id}`}>
                  <img src="icon/ic-edit.png" alt="" />
                </Link>
                <button onClick={() => onRemove(item.id)}>
                  <img src="icon/ic-remove.png" alt="" />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className={s.list_footer}></div>
    </div>
  );
}
