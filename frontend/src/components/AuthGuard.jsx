import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"
import { useEffect } from "react"


export default function AuthGuard ({children}) {
    const navigate = useNavigate()
    const {session} = useUserStore()

    useEffect(() => {
        if (!session?.token) navigate('/signin')
    },[])

    if (!session?.token) return <></>

    return (
        children
    )
}