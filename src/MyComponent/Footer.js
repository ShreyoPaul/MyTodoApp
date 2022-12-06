import React from 'react'

export const Footer = () => {
  const footer = {
    width: "100%",backgroundColor : 'black',marginTop: "3%",
  }
  return (
    <footer className='bd-dark text-light py-3' style={footer}>
      <p className="txt" style={{textAlign: "Center"}}>Copyright &copy; MyTodo.com</p>
    </footer>
  )
}
