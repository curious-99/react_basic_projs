import React, { useState } from 'react'
import './form.css'

const FormVal = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [errors,setErrors] = useState('');


    const validateForm = () => {
        const errors = {};
        if(!name) {
            errors.name = 'Name is Required';
        }
        if(!email) {
            errors.email = 'Email is Required';
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email= 'Email is Invalid';
        }
        if(!password){
            errors.password = 'Password is required';
        }else if(password.length<6){
            errors.password = 'Password must be 6 characters.';
        }
        if(!confirmPassword){
            errors.confirmPassword = 'Confirm Password is required';
        }else if(password !== confirmPassword){
            errors.confirmPassword = 'Password do not match';
        }
        if(!age){
            errors.age = 'Age is Required';
        }else if(isNaN(age) || age<18){
            errors.age = 'Age must be a number and >18';
        }
        if(!gender){
            errors.gender = 'Gender is Required';
        }

        console.log(errors);
        return errors;
    }


    function handleSubmit(e){
        e.preventDefault();

        const validationErrors = validateForm();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }else{
            console.log('Form Submitted')
        }
    }



    return (
        <div className='conatiner'>
            <h1>Form Validation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
                    {errors.name}
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    {errors.email}
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    {errors.password}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    {errors.confirmPassword}
                </div>
                <div>
                    <label>Age:</label>
                    <input type='text' value={age} onChange={(e)=> setAge(e.target.value)}/>
                    {errors.age}
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
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
