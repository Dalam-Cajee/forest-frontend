import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MyCard = ({ title, description, count, variant, name, id, type }) => {
  // Hooks
  const navigate = useNavigate()

  // Handlers
  const handleViewDetails = (name) => {
    navigate('/dashboard/application-status', {
      state: { id: id, name: name, type: type },
    })
  }
  return (
    <div className=' shadow-sm p-3 text-center h-100'>
      <p className='m-0 fw-bold fs-4 '>{title}</p>
      <p className='m-0 fs-6'>{description}</p>
      <p className='m-0 fw-bold fs-3'>{count}</p>
      <Button
        variant={variant}
        size='sm'
        onClick={() => handleViewDetails(name, id, type)}
      >
        View Details
      </Button>
    </div>
  )
}

export default MyCard
