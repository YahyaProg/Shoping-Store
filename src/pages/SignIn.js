import React,{useState} from 'react'
import * as Yup from "yup"
import {Formik , Form , Field , ErrorMessage} from 'formik'
import {useHistory} from "react-router-dom"

import {useDispatch , useSelector} from "react-redux"
import {SingInAction} from "../redux/actions/signIn"
const SignIn = () => {
    const SignIn=useSelector(state=>state.SignIn)
    console.log("singin" , SignIn);
    const [message,setMessage]=useState()
    const history=useHistory()
    const dispatch=useDispatch()
    const initialValues={
        userName:'',
        email:'',
        password:''
    }
    const validatioanSchema=Yup.object({
        userName:Yup.string().required('userName is required'),
        email:Yup.string().email('invalid email format').required('email is required'),
        password:Yup.number('you should enter number').required()

    })
    const onSubmit=(values)=>{
        const invalid=SignIn.filter((item)=>{
            console.log(values.email);
            return item.email===values.email
        })
        console.log("invalid",invalid);
        if(invalid.length > 0){
            setMessage("This email is already available")
        }else{
            dispatch(SingInAction(values))
            history.push("/login")
        }
    }

    
    return ( <div className="container">
        <div className="login">
            <h1>Sign In</h1>
            <p>Hi!</p>
            <div className="login-describtion">
                <p>Besides registering, you can also test the template with test account information(email: test@info.com - Password: 123456)</p>
            </div>
            <Formik initialValues={initialValues} validationSchema={validatioanSchema} onSubmit={onSubmit}>
                <Form className="form">
                <div className="form-item">
                    <label htmlFor="userName"><span>*</span> userName</label>
                    <Field placeholder="input your userName" type="userName" id="userName" name="userName"/>
                    <ErrorMessage style={{color:"crimson"}} name="userName" />
                </div>
                <div className="form-item">
                    <label htmlFor="email"><span>*</span> email</label>
                    <Field placeholder="input your email" type="email" id="email" name="email"/>
                    <ErrorMessage style={{color:"crimson"}} name="email" />
                </div>
                <div className="form-item">
                    <label htmlFor="password"><span>*</span> password</label>
                    <Field placeholder="input your Password" type="password" id="password" name="password"/>
                    <ErrorMessage style={{color:"crimson"}} name="password" />
                </div>
                {message && <p style={{color:"crimson", marginTop:"10px",textAlign:"center"}}>{message}</p>}
                <button type="submit" className='login-btn'>Register</button>
                </Form>
            </Formik>
        </div>
    </div> );
}
 
export default SignIn;