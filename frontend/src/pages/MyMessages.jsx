import Feed from "../components/Feed"
import { useUserStore } from "../store/useUserStore"
import { useNavigate } from "react-router-dom"

export default function MyMessages () {

    return (
        <>
        <Feed title="My messages" myOwn={true} />
        </>
    )
}