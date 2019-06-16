import React, { useState, useEffect } from 'react'

const CheckBox = ({ categories, handleFilters }) => {

    const [checked, setChecked] = useState([])

    const handleToggle = c => () => {

        // find index in array (return -1 if not found)
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]

        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(c)
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1)
        }

        console.log(newCheckedCategoryId)
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }

    return categories.map((c, i) => (
        <li className='list-unstyled' key={i}>
            <input onChange={handleToggle(c._id)} type='checkbox' className='form-check-input' />
            <label className='form-check-label'>{c.name}</label>
        </li>
    ))

}

export default CheckBox