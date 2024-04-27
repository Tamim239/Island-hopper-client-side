import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const ViewDetails = () => {
  const {id} = useParams()
console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:5173/view/${id}`)
    .then(Response => {
        console.log(Response)
        console.log(Response.data)
    })
    // .then(data => {
    //     console.log(data.data)
    // })

  },[id])

  return (
    <div>ViewDetails</div>
  )
}
