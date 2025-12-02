import s from "../scss/list.module.scss";

export default function UserList() {
  return (
    <div className={s.list}>
      <div className={s.list_header}>
        <h1>Data table with users</h1>
        <button>
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
        <tr>
          <td>John</td>
          <td>
            <img src="" alt="" />
          </td>
          <td>CMC</td>
          <td>Ha Noi</td>
          <td>
            <button>
              <img src="icon/ic-view.png" alt="" />
            </button>
            <button>
              <img src="icon/ic-edit.png" alt="" />
            </button>
            <button>
              <img src="icon/ic-remove.png" alt="" />
            </button>
          </td>
        </tr>
      </table>
      <div className={s.list_footer}>
        <p>Showing 1 to 10 of 100 entries</p>
      </div>
    </div>
  );
}
