import {CallHistory} from "../../components/Calls/CallHistory";
import {Phone} from "../../components/Forms/Phone";
import s from './home.module.scss'

export const HomePage = () => {
    return <div className={s.home}>
        <Phone/>
        <CallHistory/>
    </div>;
};
