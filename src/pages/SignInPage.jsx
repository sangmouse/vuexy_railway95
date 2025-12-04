import s from "../scss/sign-in.module.scss";

export default function SignInPage() {
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
          <div>
            <p className={s["signin_label"]}>Username</p>
            <input type="text" name="" id="" placeholder="Username" />
          </div>
          <div>
            <p className={s["signin_label"]}>Password</p>
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <button className={s["signin_btn"]}>Sign in</button>
        </section>
      </div>
    </div>
  );
}
