import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'

const AddCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // destructure user and token from localStorage
    const { user, token } = isAuthenticated()

    const handleChange = (event) => {
        setError('')
        setName(event.target.value)
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setError('')
        setSuccess(false)
        // make request to api to create category
    }

    const newCategoryForm = () => {
        return (
            <form onSubmit={clickSubmit}>
                <div className='form-group'>
                    <label className='text-muted'>Name</label>
                    <input type='text' className='form-control' onChange={handleChange} value={name} autoFocus />
                </div>
                <button className='btn btn-outline-primary'>Create Category</button>
            </form>
        )
    }

    return (
        <Layout title='Add a new category' description={`Admin : ${user.name}, ready to create a new category`}>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    {newCategoryForm()}
                </div>
            </div>
        </Layout>
    )
}

export default AddCategory
