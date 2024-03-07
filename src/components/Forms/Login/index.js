import {useEffect, useState} from "react";
import s from "./styles.module.scss";
import {Input} from "../../UI/Input";
import {observer} from "mobx-react-lite";
import UAStore from "../../../../app/store/UAStore";
import Button from "../../UI/Button/Button";

export const LoginForm = observer(() => {
    const [userData, setUserData] = useState({
        login: "",
        password: "",
        server: "",
        remember: false,
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (UAStore.errorMessage) {
            setError(UAStore.errorMessage);
            setIsLoading(false);
        } else {
            setError("");
        }
    }, [UAStore.errorMessage]);

    const handleChange = (event) => {
        const {name, value, type} = event.target;

        if (type === "checkbox") {
            setUserData({...userData, [name]: event.target.checked});
        } else {
            setUserData({...userData, [name]: value});
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        UAStore.registerUserAgent(userData);
    };

    return (
        <div className={s.loginPage}>
            <div className={s.loginPage__container}>
                <div className={s.loginPage__container_title}>
                    <h2>Welcome!</h2>
                </div>
                <p>
                    Provide your SIP Account
                </p>
                <p className={s.loginPage__container_error}>{error}</p>

                <form className={s.loginPage__container_form} onSubmit={handleSubmit}>
                    <div className={s.loginPage__container_form_container}>
                        <div className={s.loginPage__container_form_container_item}>
                            <label htmlFor="login">Login</label>
                            <Input
                                type="text"
                                id="login"
                                name="login"
                                value={userData.login}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={s.loginPage__container_form_container_item}>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={s.loginPage__container_form_container_item}>
                            <label htmlFor="server">Server</label>
                            <Input
                                type="text"
                                id="server"
                                name="server"
                                value={userData.server}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={s.loginPage__container_form_checkbox}>
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                checked={userData.remember}
                                onChange={handleChange}
                            />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                    </div>
                    <Button type={'submit'}>Log in</Button>
                </form>
            </div>
        </div>
    );
});
