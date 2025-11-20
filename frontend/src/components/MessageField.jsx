import { api } from "../api/api"
import { useMessageStore } from "../store/useMessageStore"
import { useUserStore } from "../store/useUserStore"
import Button from "./Button"
import Textarea from "./Textarea"

const MessageField = () => {
    const {getMessages} = useMessageStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            content: e.target.content.value
        }

        try {
            await api.sendMessage(message)
            await getMessages()
        } catch (error) {
            console.error(error);
            
        }
    }

    return (
        <div className="create-message-section">
            <div className="container">
                <div className="create-message-card">
                    <h2 className="create-message-title">Create message</h2>
                    <form onSubmit={handleSubmit} className="create-message-form">
                        <Textarea name="content" placeholder="Share your opinion" />
                        <Button>Send</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageField