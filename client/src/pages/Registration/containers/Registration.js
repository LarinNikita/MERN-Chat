import { withFormik } from 'formik';
import Registration from '../components/Registration'
import validateForm from '../../../utils/validate';

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        fullnsmr: '',
        password: '',
        password2: '',
    }),
    validate: values => {
        let errors = {};

        validateForm({ isAuth: false, values, errors });

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'Registration'
})(Registration);