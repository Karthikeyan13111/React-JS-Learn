import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
        Copyright &copy; {year.getFullYear()} and {length} {length===1 ? "list" : "lists"} 
    </footer>
  )
}

export default Footer