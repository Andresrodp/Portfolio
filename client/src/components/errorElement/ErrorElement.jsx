import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div>
      <h1>revisa donde quieres ir</h1>
      <p>error 404</p>
      <Link to='/home'><button>Home</button></Link>
    </div>
  )
}

export default ErrorElement;
