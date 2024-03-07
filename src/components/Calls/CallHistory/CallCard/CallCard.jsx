import {CallType} from "../../../../../app/store/callType";
import {getFormattedDuration} from "../../../../../utils/getFormattedDuration";
import s from './card.module.scss'
import {IncomingIcon} from "../../../UI/Icons/IncomingIcon";
import {OutgoingIcon} from "../../../UI/Icons/OutgoingIcon";
import {ForwardIcon} from "../../../UI/Icons/ForwardIcon";

export const CallCard = ({user, duration, date, type, onClick}) => {
    return (
        <button onClick={onClick} className={s.card}>

            <div className={s.card__container}>
                <div>
                    <span>{type === CallType.INCOMING ? <IncomingIcon /> : <OutgoingIcon />}</span>
                </div>
                <div className={s.card__container_item}>
                    <strong>{user}</strong>
                    <span>
                        {getFormattedDuration(duration)}
                    </span>
                </div>
                <div>
                    <p>{date.toLocaleString("ru-RU").slice(0, -3)}</p>
                </div>
                <div>
                    <ForwardIcon />
                </div>
            </div>


        </button>
    );
};
