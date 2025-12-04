import s from "../scss/user-form.module.scss";

export default function UserForm() {
  return (
    <div className={s["form"]}>
      <div className={s["form_container"]}>
        <section>
          <h1 className={s["form_heading"]}>Create New User</h1>
        </section>
        <section>
          <div>
            <p className={s["form_label"]}>Username</p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div>
            <p className={s["form_label"]}>Department</p>
            <select name="department" id="department">
              <option value="vti">VTI Group</option>
              <option value="cmc">CMC</option>
              <option value="fpt">FPT Software</option>
              <option value="samsung">Samsung</option>
            </select>
          </div>
          <div>
            <p className={s["form_label"]}>City</p>
            <select name="city" id="city">
              <option value="hn">Ha Noi</option>
              <option value="hcm">HCM</option>
              <option value="da-nang">Da Nang</option>
              <option value="quy-nhon">Quy Nhon</option>
            </select>
          </div>
          <div>
            <p className={s["form_label"]}>Avatar</p>
            <input type="file" name="avatar" id="avatar" />
          </div>
          <div className={s["form_btn-container"]}>
            <button className={s["form_btn"]}>Submit</button>
            <button className={s["form_btn"]}>Cancel</button>
          </div>
        </section>
      </div>
    </div>
  );
}
