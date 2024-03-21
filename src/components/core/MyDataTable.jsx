import React, { useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'

const MyDataTable = ({ data }) => {
  // States
  const [currentPage, setCurrentPage] = useState(1)

  // Constants
  const itemsPerPage = 10
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  // Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Epic Number</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Mobile Number</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.fish_farmer_id}</td>
              <td>{item.name}</td>
              <td>{item.epic_no}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.mobile_no}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Pagination */}
      <Pagination className='justify-content-center custom-pagination'>
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
      </Pagination>
    </>
  )
}

export default MyDataTable
