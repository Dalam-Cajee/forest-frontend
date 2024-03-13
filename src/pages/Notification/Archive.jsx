import React, { useState } from "react"
import { Button, Container, Table } from "react-bootstrap"
import {
  useFetchNotificationArchive,
  useFetchPDF,
} from "../../hooks/queries/NotificationQueries"
import { BsDownload } from "react-icons/bs"

const Archive = () => {
  // Functions
  const onSuccess = (response) => {
    const fileUrl = window.URL.createObjectURL(response.data)
    window.open(fileUrl, "_blank")
    return response
  }
  const onError = (error) => {
    return error
  }
  // Hooks
  // Notification Queries
  const archiveNotification = useFetchNotificationArchive()
  const fetchPdfQuery = useFetchPDF(onSuccess, onError)
  // Handlers
  const handleDownload = (id) => {
    fetchPdfQuery.mutate(id)
  }

  return (
    <Container>
      <h3>Archive Page</h3>
      <Table striped bordered>
        <thead className="table-dark">
          <tr>
            <td>Created Date</td>
            <td>Notification Type</td>
            <td>Title</td>
            <td className="text-center">Download</td>
          </tr>
        </thead>
        <tbody>
          {archiveNotification?.data?.data?.data ? (
            archiveNotification?.data?.data?.data?.map((archive) => {
              return (
                <tr key={archive.id}>
                  <td>{archive.createdDate}</td>
                  <td>{archive.notificationTypeName}</td>
                  <td>{archive.title}</td>
                  <td className="text-center">
                    <Button
                      variant="outline"
                      title="Download"
                      size="sm"
                      onClick={() => handleDownload(archive.id)}
                    >
                      <BsDownload />
                    </Button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}

export default Archive
