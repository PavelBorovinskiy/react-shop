import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="page-footer red accent-4">
    <div className="footer">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!"><AiOutlineGithub className="github-icon" /></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer