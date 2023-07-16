import { withFormik } from 'formik';
import Login from '../components/Login'
import validateForm from '../../../utils/validate';

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: true, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setSubmitting(false)
    },
    displayName: 'Login'
})(Login);