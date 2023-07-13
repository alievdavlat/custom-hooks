import React from "react"

export const useInputValues = (sxema) => {
  const [ values , setValues ] = React.useState(sxema)


  return { 
    values, 
    change: (e) => setValues({...values, [e.target.name]: e.target.value}),
  }
}