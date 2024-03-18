import React from "react"
import { BsPersonFill } from "react-icons/bs"
import { BsCheck2Circle } from "react-icons/bs"
import { BsClockHistory } from "react-icons/bs"
import { BsX } from "react-icons/bs"

const MyCardSP = ({ icons, description, count }) => {
  return (
    <div className="col-lg-3 p-4">
      <div className="bg-light py-4 b-dbcard shadow-lg">
        {icons === "Person" ? (
          <BsPersonFill fontSize="large" />
        ) : icons === "Reject" ? (
          <BsX fontSize="large" className="text-danger" />
        ) : icons === "Verified" ? (
          <BsCheck2Circle className="text-success" fontSize="large" />
        ) : (
          <BsClockHistory className="text-warning" fontSize="large" />
        )}

        <p className="desc_size">
          <strong>{description}</strong>
        </p>
        <div className="text-left ">
          <p className="px-5">
            Till date <span className="float-right">{count}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyCardSP
