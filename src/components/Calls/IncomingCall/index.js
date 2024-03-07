import { observer } from "mobx-react-lite";
import UAStore from "../../../../app/store/UAStore";

export const Incoming = observer(() => {

    return (
        <div>
            <h1>Звонок от {UAStore.callStatus.user}</h1>
            <button onClick={() => UAStore.acceptIncomingCall()}>Ответить</button>
            <button onClick={() => UAStore.terminateCall()}>Сбросить</button>
        </div>
    );
});
