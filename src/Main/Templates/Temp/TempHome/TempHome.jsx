import s from "./TempHome.module.css";

export default function TempHome(props) {
    return (
        <div className={s.TempHome} style={{backgroundColor: props.i.backgroundColor}}>
            <div className={s.WifeMan}>{props.i.wife}</div>
            <div className={s.WifeMan}>{props.i.navLink}</div>
            <div className={s.WifeMan}>{props.i.day}</div>
        </div>
    );
}