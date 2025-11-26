import { useEffect, useState } from "react"
import MessageCard from "./MessageCard"
import { useMessageStore } from "../store/useMessageStore"
import { useUserStore } from "../store/useUserStore"


const Feed = ({title = 'Messages', myOwn = false}) => {
    const {session} = useUserStore()
    const {messages, getMessages} = useMessageStore()
    const [timerId, setTimerId] = useState(undefined)

    useEffect(() => {
        getMessages()
        setTimerId(setInterval(() => {getMessages()}, 5000))

        return () => {clearInterval(timerId)}
    }, [])

    

    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {messages && myOwn ? 
                            messages.filter((mss) => mss.userId == session?.user.id).map((el) => (
                            <MessageCard key={el.id} {...el} />
                        ))
                        : messages.map((el) => (
                            <MessageCard key={el.id} {...el} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed