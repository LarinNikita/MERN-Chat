export default ({ isAuth, values, errors }) => {

    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = 'Введите почту';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ) {
                errors.email = 'Неверная почта';
            }
        },
        fullname: (value) => {
            if (!isAuth && !value) {
                errors.fullname = 'Укажите свое имя и фамилию';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Введите пароль';
            } else if (!isAuth &&
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(value)
            ) {
                errors.password = 'Слишком лёкгий пароль';
            }
        },
        password_confirm: (value) => {
            if (!value) {
                errors.password_confirm = 'Введите пароль';
            }
            if (!isAuth && value !== values.password) {
                errors.password_confirm = 'Пароли не совпадают';
            }
        },
    }

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );
}