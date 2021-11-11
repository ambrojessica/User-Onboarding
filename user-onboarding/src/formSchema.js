import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Please Enter a Full Name')
    .min(2, 'Name must be more than 2 characters'),

  email: yup
    .string()
    .trim()
    .required('Please Enter Email')
    .min(5, 'Must be valid Email'),

  password: yup
    .string()
    .trim()
    .required('Please Enter a Strong Password')
    .min(5, 'Password must be more than 5 characters'),

  tos: yup
    .boolean()
    .oneOf([true], 'Must accept Terms and Conditions to continue')

})

export default formSchema;