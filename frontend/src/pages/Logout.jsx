import { useEffect } from "react"
import { useUserStore } from "../store/useUserStore"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const { clearSession } = useUserStore()
    const navigate = useNavigate()
    useEffect(() => {
        clearSession()
        navigate('/')
    }, [])
    return <></>
}

export default Logout