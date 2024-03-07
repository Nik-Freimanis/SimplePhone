"use client";

import { observer } from "mobx-react-lite";
import { getFormattedDuration } from "../../../../utils/getFormattedDuration";
import UAStore from "../../../../app/store/UAStore";
import s from './callStatus.module.scss'
import {StarsIcons} from "../../UI/Icons/StarsIcons";
import Button from "../../UI/Button/Button";

export const CallStatus = observer(() => {

    const duration = UAStore.callStatus.duration;

    return (
        <div className={s.callStatus}>
            <div className={s.callStatus_user}>
                <span>{UAStore.callStatus.user}</span>
                <div className={s.callStatus_user_status}>
                    <p>{UAStore.agentStatus}</p>
                    <p>{getFormattedDuration(duration)}</p>
                </div>

            </div>
            <div className={s.callStatus_user_img}>
                <StarsIcons />
            </div>
            <div className={s.callStatus_btn}>
                <Button variant={'fillCallRed'} onClick={() => UAStore.terminateCall()}>End</Button>
            </div>
        </div>
    );
});
