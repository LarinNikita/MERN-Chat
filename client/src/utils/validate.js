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
        password: (value) => {
            if (!value) {
                errors.password = 'Введите пароль';
            } else if (!isAuth &&
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(value)
            ) {
                errors.password = 'Слишком лёкгий пароль';
            }
        },
    }

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );
}