import { useEffect, useState } from "react";
import s from "../scss/list.module.scss";
import { Link, useNavigate } from "react-router-dom";

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
          <th>Username</th>
          <th>Avatar</th>
          <th>Department</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        {userList.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>
                <img src={item.avatar} alt="" />
              </td>
              <td>{item.department}</td>
              <td>{item.city}</td>
              <td>
                <Link to={`user/${item.id}`}>
                  <img src="icon/ic-view.png" alt="" />
                </Link>
                <Link>
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
      <div className={s.list_footer}>
        <p>Showing 1 to 10 of 100 entries</p>
      </div>
    </div>
  );
}
