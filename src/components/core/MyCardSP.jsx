import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsClockHistory } from 'react-icons/bs'
import { BsX } from 'react-icons/bs'

const MyCardSP = ({ icons, description, count }) => {
  return (
    <div className='bg-light p-3 shadow-lg h-100'>
      {icons === 'Person' ? (
        <BsPersonFill fontSize='large' />
      ) : icons === 'Reject' ? (
        <BsX fontSize='large' className='text-danger' />
      ) : icons === 'Verified' ? (
        <BsCheck2Circle className='text-success' fontSize='large' />
      ) : icons === 'Pending' ? (
        <BsClockHistory className='text-warning' fontSize='large' />
      ) : null}
      <p>
        <strong>{description}</strong>
      </p>
      <p>
        Till date <span className='float-right'>{count}</span>
      </p>
    </div>
  )
}

export default MyCardSP
