import { useState, useEffect } from "react"

export default function App() {
  const [state, setState] = useState("")
  // cannot use async await
  useEffect(() => {
    const fetch = async () => {
      await fetch("https://fakestoreapi.com/products").then((res) =>
        setState(res).catch((err) => console.log(err))
      )
    }
    fetch()
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
