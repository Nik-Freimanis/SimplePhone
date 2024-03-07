import { observer } from "mobx-react-lite";
import UAStore from "../../../../app/store/UAStore";
import s from './incoming.module.scss'
import Button from "../../UI/Button/Button";
import {StarsIcons} from "../../UI/Icons/StarsIcons";

export const Incoming = observer(() => {

    return (
        <div className={s.incoming}>
            <div className={s.incoming_user}>
                <span>{UAStore.callStatus.user}</span>
            </div>
            <div className={s.incoming_user_img}>
                <StarsIcons />
            </div>
            <div className={s.incoming_btn}>
                <Button variant={'fillCallGreen'} onClick={() => UAStore.acceptIncomingCall()}>Answer</Button>
                <Button variant={'fillCallRed'} onClick={() => UAStore.terminateCall()}>Decline</Button>
            </div>

        </div>
    );
});
