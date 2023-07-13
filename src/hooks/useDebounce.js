import React from 'react'

export const useDebounce = (value, delay = 2000) => {
 
  const [debouceValue, setDebounceValue] = React.useState(value)

  React.useEffect(() => {

    const timout = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(timout)
    }



  }, [value])

return debouceValue
}


