import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { signup } from '../auth'

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const { name, email, password, error, success } = values

    const handleChange = field => event => {
        setValues({ ...values, error: false, [field]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({ ...values, name: '', email: '', password: '', error: '', success: true })
                }
            })
    }

    const signUpform = () => {
        return (
            <form>

                <div className='from-group'>
                    <label className='text-muted'>Name</label>
                    <input onChange={handleChange('name')} type='text' value={name} className='form-control' />
                </div>

                <div className='from-group'>
                    <label className='text-muted'>Email</label>
                    <input onChange={handleChange('email')} type='email' value={email} className='form-control' />
                </div>

                <div className='from-group'>
                    <label className='text-muted'>Password</label>
                    <input onChange={handleChange('password')} type='password' value={password} className='form-control' />
                </div>

                <button onClick={clickSubmit} className='btn btn-primary mt-3'>Submit</button>

            </form>
        )
    }

    const showError = () => {
        return (
            <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        )
    }

    const showSuccess = () => {
        return (
            <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>
                New account is created. Please <Link to='/signin'>Signin</Link>
            </div>
        )
    }

    return (
        <Layout title='Signup' description='Signup to Node React eCommerce App' className='container col-md-8 offet-md-2' >
            {showSuccess()}
            {showError()}
            {signUpform()}
        </Layout>
    )
}



export default Signup