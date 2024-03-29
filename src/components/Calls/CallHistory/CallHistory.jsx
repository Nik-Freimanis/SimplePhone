import {observer} from "mobx-react-lite";
import UAStore from "../../../../app/store/UAStore";
import {CallCard} from "./CallCard";
import s from './history.module.scss'

export const CallHistory = observer(() => {

    return (
        <div className={s.history}>
            <div className={s.history__title}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3.95491 4.06107C3 5.3754 3 7.25027 3 11V13C3 16.7497 3 18.6246 3.95491 19.9389C4.26331 20.3634 4.6366 20.7367 5.06107 21.0451C6.3754 22 8.25027 22 12 22C15.7497 22 17.6246 22 18.9389 21.0451C19.3634 20.7367 19.7367 20.3634 20.0451 19.9389C21 18.6246 21 16.7497 21 13V11C21 7.25027 21 5.3754 20.0451 4.06107C19.7367 3.6366 19.3634 3.26331 18.9389 2.95491C17.6246 2 15.7497 2 12 2C8.25027 2 6.3754 2 5.06107 2.95491C4.6366 3.26331 4.26331 3.6366 3.95491 4.06107ZM8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75H16C16.4142 8.75 16.75 8.41421 16.75 8C16.75 7.58579 16.4142 7.25 16 7.25H8ZM13 11.25C12.5858 11.25 12.25 11.5858 12.25 12C12.25 12.4142 12.5858 12.75 13 12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H13ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H16C16.4142 16.75 16.75 16.4142 16.75 16C16.75 15.5858 16.4142 15.25 16 15.25H8Z"
                          fill="black"/>
                </svg>
                <span>
                    Call history
                </span>
            </div>


            <div className={s.history__cards}>
                {UAStore.getCallHistory().map((e) => (
                    <CallCard
                        key={e.date.getTime()}
                        {...e}
                        onClick={() => UAStore.call(e.user)}
                    />
                ))}
            </div>
        </div>
    );
});
