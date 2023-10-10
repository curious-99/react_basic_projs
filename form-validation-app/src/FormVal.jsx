import React from 'react'
import { useForm } from "react-hook-form"
import './form.css'

const FormVal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [confirmPassword,setConfirmPassword] = useState('');
    // const [age,setAge] = useState('');
    // const [gender,setGender] = useState('');
    // const [errors,setErrors] = useState('');


    // const validateForm = () => {
    //     const errors = {};
    //     if(!name) {
    //         errors.name = 'Name is Required';
    //     }
    //     if(!email) {
    //         errors.email = 'Email is Required';
    //     }else if(!/\S+@\S+\.\S+/.test(email)){
    //         errors.email= 'Email is Invalid';
    //     }
    //     if(!password){
    //         errors.password = 'Password is required';
    //     }else if(password.length<6){
    //         errors.password = 'Password must be 6 characters.';
    //     }
    //     if(!confirmPassword){
    //         errors.confirmPassword = 'Confirm Password is required';
    //     }else if(password !== confirmPassword){
    //         errors.confirmPassword = 'Password do not match';
    //     }
    //     if(!age){
    //         errors.age = 'Age is Required';
    //     }else if(isNaN(age) || age<18){
    //         errors.age = 'Age must be a number and >18';
    //     }
    //     if(!gender){
    //         errors.gender = 'Gender is Required';
    //     }

    //     console.log(errors);
    //     return errors;
    // }


    // function handleSubmit(e){
    //     e.preventDefault();

    //     const validationErrors = validateForm();
    //     if(Object.keys(validationErrors).length>0){
    //         setErrors(validationErrors);
    //     }else{
    //         console.log('Form Submitted')
    //     }
    // }

    const onSubmit = data => console.log(data);

    return (
        <div className='conatiner'>
            <h1>Form Validation</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' {...register('name', { required: 'Name is Required' })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Email is Invalid"
                            }
                        })} />
                    {errors.email && <span> {errors.email.message} </span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                    type='password' 
                    name='password' 
                        {...register('password',{
                            required:"Password is required",
                            minLength:{
                                value:6,
                                message:'Password must be 6 char long'}
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type='password' name='confirmPassword' />
                    {errors.confirmPassword}
                </div>
                <div>
                    <label>Age:</label>
                    <input type='text' name='age' />
                    {errors.age}
                </div>
                <div>
                    <label>Gender:</label>
                    <select name='gender'>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormVal
