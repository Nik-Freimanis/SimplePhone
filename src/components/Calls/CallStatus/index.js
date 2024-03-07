"use client";

import { observer } from "mobx-react-lite";
import { getFormattedDuration } from "../../../../utils/getFormattedDuration";
import UAStore from "../../../../app/store/UAStore";

export const CallStatus = observer(() => {

    const duration = UAStore.callStatus.duration;

    return (
        <div>
            <h1>{UAStore.callStatus.user}</h1>
            <p>Статус: {UAStore.agentStatus}</p>
            <p>{getFormattedDuration(duration)}</p>
            <button onClick={() => UAStore.terminateCall()}>terminateCall</button>
        </div>
    );
});
