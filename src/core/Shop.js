import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Card from './Card'
import { getCategories } from '../admin/apiAdmin'
import CheckBox from './CheckBox'
import RadioBox from './RadioBox'
import { prices } from './fixedPrices'

const Shop = () => {

    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    })

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

    const handleFilters = (filters, filterBy) => {
        console.log('SHOP: ', filters, filterBy)

        const newFilters = { ...myFilters }
        newFilters.filters[filterBy] = filters

        if (filterBy == 'price') {
            let priceValue = handlePrice(filters)
            newFilters.filters[filterBy] = priceValue
        }


        setMyFilters(newFilters)
    }

    const handlePrice = (value) => {
        const data = prices
        let array = []
        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array
            }
        }
        return array
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
                        <CheckBox categories={categories} handleFilters={filters => handleFilters(filters, 'category')} />
                    </ul>
                    <h4>Filter by price range</h4>
                    <div>
                        <RadioBox prices={prices} handleFilters={filters => handleFilters(filters, 'price')} />
                    </div>

                </div>
                <div className='col-8'>
                    {JSON.stringify(myFilters)}
                </div>
            </div>
        </Layout>
    )
}

export default Shop