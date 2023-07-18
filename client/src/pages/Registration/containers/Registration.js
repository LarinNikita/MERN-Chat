import { withFormik } from 'formik';
import Registration from '../components/Registration'
import validateForm from '../../../utils/validate';

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        fullname: '',
        password: '',
        password_confirm: '',
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setSubmitting(false);
    },
    displayName: 'Registration'
})(Registration);