import { CallStatus } from "../../components/Calls/CallStatus";
import s from './call.module.scss'

export const CallPage = () => {
    return (
        <div className={s.call}>
            <CallStatus />
        </div>
    );
};
