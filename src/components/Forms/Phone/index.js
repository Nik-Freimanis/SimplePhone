import {useState} from "react";
import s from './phone.module.scss'
import {observer} from "mobx-react-lite";
import UAStore from "../../../../app/store/UAStore";
import Button from "../../UI/Button/Button";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const Phone = observer(() => {
    const [calledUser, setCalledUser] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        UAStore.clearError();
        UAStore.call(calledUser);
    };

    return (
        <div className={s.phone}>
            <div className={s.phone__container}>
                <p className={s.phone__container_error}>{UAStore.errorMessage}</p>
                <div className={s.phone__container_number}>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0452 2.25C13.8818 2.24999 15.3214 2.24999 16.4635 2.37373C17.6291 2.50001 18.5734 2.76232 19.3798 3.34815C19.8679 3.70281 20.2972 4.13209 20.6518 4.62024C21.2377 5.42656 21.5 6.37094 21.6263 7.53648C21.75 8.67859 21.75 10.1182 21.75 11.9547V12.0453C21.75 13.8818 21.75 15.3214 21.6263 16.4635C21.5 17.6291 21.2377 18.5734 20.6518 19.3798C20.3143 19.8444 19.9092 20.2556 19.45 20.6C19.4402 20.6074 19.4303 20.6147 19.4204 20.6221C19.4098 20.6299 19.3992 20.6377 19.3886 20.6454L19.3798 20.6518C18.5734 21.2377 17.6291 21.5 16.4635 21.6263C15.3214 21.75 13.8818 21.75 12.0453 21.75H11.9547C10.1182 21.75 8.67859 21.75 7.53648 21.6263C6.37094 21.5 5.42656 21.2377 4.62024 20.6518C4.59801 20.6357 4.57592 20.6194 4.55396 20.603C4.09317 20.258 3.68667 19.8457 3.34815 19.3798C2.76232 18.5734 2.50001 17.6291 2.37373 16.4635C2.24999 15.3214 2.24999 13.8818 2.25 12.0452V11.9548C2.24999 10.1182 2.24999 8.67861 2.37373 7.53648C2.50001 6.37094 2.76232 5.42656 3.34815 4.62024C3.70281 4.13209 4.13209 3.70281 4.62024 3.34815C5.42656 2.76232 6.37094 2.50001 7.53648 2.37373C8.67861 2.24999 10.1182 2.24999 11.9548 2.25H12.0452ZM18.8999 19.1069C18.4942 17.3277 16.9021 16 15 16H9C7.09786 16 5.50583 17.3277 5.10008 19.1069C5.21214 19.2115 5.32992 19.3101 5.45293 19.4022C5.46918 19.4144 5.4855 19.4264 5.50191 19.4383C6.00992 19.8074 6.66013 20.0225 7.69804 20.135C8.74999 20.249 10.1084 20.25 12 20.25C13.8916 20.25 15.25 20.249 16.302 20.135C17.3399 20.0225 17.9901 19.8074 18.4981 19.4383C18.5155 19.4257 18.5328 19.4129 18.55 19.4C18.672 19.3085 18.7887 19.2107 18.8999 19.1069ZM12 4.25C9.37665 4.25 7.25 6.37665 7.25 9C7.25 11.6234 9.37665 13.75 12 13.75C14.6234 13.75 16.75 11.6234 16.75 9C16.75 6.37665 14.6234 4.25 12 4.25Z" fill="black"/>
                    </svg>

                    <span>{UAStore?.userAgent?.get("authorization_user")}</span>
                </div>

                <form className={s.phone__container_form} onSubmit={handleSubmit}>

                        <div className={s.phone__container_form_box}>
                            <PhoneInput value={calledUser} onChange={setCalledUser} placeholder={'Enter phone number'}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}/>
                        </div>

                    <Button variant={'outlineCallGreen'} type={"submit"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.76085 3.66187C4.8315 3.59123 4.86682 3.5559 4.89794 3.52731C5.6631 2.82423 6.83921 2.82423 7.60436 3.52731C7.63548 3.5559 7.67081 3.59123 7.74145 3.66187L9.19965 5.12007C10.0017 5.92212 10.2311 7.13336 9.77785 8.17314C9.32461 9.21293 9.554 10.4242 10.356 11.2262L12.7529 13.623C13.5549 14.4251 14.7661 14.6545 15.8059 14.2012C16.8457 13.748 18.057 13.9774 18.859 14.7794L20.3172 16.2376C20.3878 16.3083 20.4232 16.3436 20.4518 16.3747C21.1548 17.1399 21.1548 18.316 20.4518 19.0811C20.4232 19.1123 20.3878 19.1476 20.3172 19.2182L19.4309 20.1046C18.7091 20.8264 17.6685 21.1294 16.6721 20.9079C9.88248 19.3991 4.57995 14.0966 3.07115 7.307C2.84971 6.31054 3.15272 5.27001 3.87451 4.54821L4.76085 3.66187Z"
                                stroke="#25773C" stroke-width="1.5"/>
                        </svg>
                        Call
                    </Button>

                </form>
            </div>
        </div>
    );
});
