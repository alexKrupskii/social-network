export type StateExportType = {
    state: StateType
}

export type StateType = {
    chatPage: ChatPageType
}

export type ChatPageType = {
    messageData: Array<UserMessageType>
}

export type UserMessageType = {
    id: number
    avatar: string
    time: number | string
    message: string
}

let state: StateType = {
    chatPage: { 
        messageData: [
            {id: 1, avatar: './img/robert_ava.jpg', time: 5 + ":" + 32, message: "Hellow! How are you? I heard you starred in a new movie."},
            {id: 2, avatar: './img/gwyneth_ava.jpg', time: 5 + ":" + 44, message: "Hellow! I starred in the world blockbuster Avengers!"}
        ]
    } 
}


export default state;