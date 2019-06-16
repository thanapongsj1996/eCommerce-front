import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Card from './Card'
import { getCategories } from '../admin/apiAdmin'
import CheckBox from './CheckBox'

const Shop = () => {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)

    const init = () => {
        getCategories()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setCategories(data)
                }
            })
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Layout title='Shop Page' description='Shop and find books of your chioce' className='container-fluid' >
            <div className='row'>
                <div className='col-4'>
                    <h4>Filter by categories</h4>
                    <ul>
                        <CheckBox categories={categories} />
                    </ul>
                </div>
                <div className='col-8'>
                    right
                </div>
            </div>
        </Layout>
    )
}

export default Shop