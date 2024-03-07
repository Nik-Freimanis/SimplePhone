import { Incoming } from "../../components/Calls/IncomingCall";
import s from './incomingPage.module.scss'

export const IncomingPage = () => {
    return (
        <div className={s.incomingPage}>
            <Incoming />
        </div>
    );
};
