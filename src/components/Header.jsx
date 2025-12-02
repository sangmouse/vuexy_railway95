import s from "../scss/header.module.scss"

export default function Header() {
   return (
      <div className={s.header}>
         <p className={s.header_msg}>Welcome,  <span>John</span></p>
         <span>|</span>
         <button className={s.header_btn}>Sign out <span></span></button>
      </div>
   )
}