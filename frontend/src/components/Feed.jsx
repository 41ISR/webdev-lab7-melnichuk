import { useEffect, useState } from "react"
import { api } from "../api/api"
import MessageCard from "./MessageCard"


const Feed = ({title = 'Сообщение'}) => {
    const [messages, setMesages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.getMessages()
                setMesages(data)
            } catch (error) {
                console.error(error);
                
            }    
        }
        fetchData()
    }, [])

    

    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {messages.map((el) => (
                            <MessageCard {...el} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed