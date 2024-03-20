import React from "react"
import { NavLink } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="text-bg-dark">
      <div className="container-fluid py-3 text-center">
        <div className="fs-small">
          Contents Owned, Maintained and Updated by the Forest and Environment
          Department, Government of Meghalaya
        </div>
        <div className="fs-small">
          Headquater: Sylvan House, Lower Lachumiere, Shillong - 793001,
          Meghalaya
        </div>
        <div className="fs-small">
          Developed and hosted by National Informatics Center, Meghalaya
        </div>
        <div className="fs-small">
          <NavLink href="/terms">Terms of Use</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
