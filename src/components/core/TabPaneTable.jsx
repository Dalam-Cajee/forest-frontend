import React from "react"
import { Button, Table } from "react-bootstrap"
import { BsFilePdfFill } from "react-icons/bs"
import {
  useFetchArchiveByID,
  useFetchNotificationByID,
  useFetchPDF,
} from "../../hooks/queries/NotificationQueries"
import {
  useFetchDocumentByID,
  useFetchPublishPDF,
} from "../../hooks/queries/PublicationQueries"

const TabPaneTable = ({ ID, type }) => {
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
  const fetchNotificationByID = useFetchNotificationByID(ID)
  const fetchArchiveByID = useFetchArchiveByID(ID)
  const fetchDocumentByID = useFetchDocumentByID(ID)
  const fetchPdf = useFetchPDF(onSuccess, onError)
  const fetchPublishPDF = useFetchPublishPDF(onSuccess, onError)

  // Handlers
  const handleDownload = (id) => {
    fetchPdf.mutate(id)
  }
  const handleDownloadPublish = (id) => {
    fetchPublishPDF.mutate(id)
  }

  return (
    <Table striped bordered>
      <thead className="table-dark">
        <tr>
          <th>Title</th>
          <th className="text-center">Download</th>
        </tr>
      </thead>
      <tbody>
        {type === "notification" ? (
          fetchNotificationByID?.data?.data?.data ? (
            fetchNotificationByID?.data?.data?.data?.map((notification) => {
              return (
                <tr key={notification.id}>
                  <td>{notification.title}</td>
                  <td className="text-center">
                    <Button
                      variant="light"
                      title="Download"
                      size="sm"
                      onClick={() => handleDownload(notification.id)}
                    >
                      <BsFilePdfFill />
                    </Button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )
        ) : type === "archive" ? (
          fetchArchiveByID?.data?.data?.data ? (
            fetchArchiveByID?.data?.data?.data?.map((archive) => {
              return (
                <tr key={archive.id}>
                  <td>{archive.title}</td>
                  <td className="text-center">
                    <Button
                      variant="light"
                      title="Download"
                      size="sm"
                      onClick={() => handleDownload(archive.id)}
                    >
                      <BsFilePdfFill />
                    </Button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )
        ) : type === "publication" ? (
          fetchDocumentByID?.data?.data?.data ? (
            fetchDocumentByID?.data?.data?.data?.map((document) => {
              return (
                <tr key={document.id}>
                  <td>{document.title}</td>
                  <td className="text-center">
                    <Button
                      variant="light"
                      title="Download"
                      size="sm"
                      onClick={() => handleDownloadPublish(document.id)}
                    >
                      <BsFilePdfFill />
                    </Button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )
        ) : null}
      </tbody>
    </Table>
  )
}

export default TabPaneTable
