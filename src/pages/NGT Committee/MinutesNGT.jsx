import React, { useState } from 'react'
import { Container, Pagination, Table } from 'react-bootstrap'
import { BsFilePdfFill } from 'react-icons/bs'
import { minutesData } from '../../components/helper/MinutesData'

const MinutesNGT = () => {
  // States
  const [currentPage, setCurrentPage] = useState(1)

  // Constants
  const itemsPerPage = 11
  const totalPages = Math.ceil(minutesData.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = minutesData.slice(indexOfFirstItem, indexOfLastItem)

  // Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <Container>
      <h2>NGT Judicial Committee Minutes</h2>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <td>Judicial Committee Minutes</td>
            <td className='text-center'>Download</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className='text-center'>
                <a
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='PDF opens in a New Tab'
                  className='text-dark'
                >
                  <BsFilePdfFill />
                </a>
              </td>
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
    </Container>
  )
}

export default MinutesNGT
