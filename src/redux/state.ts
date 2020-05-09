export type StateExportType = {
    state: StateType
}

 type StateType = {
    chatPage: ChatType
}

 type ChatType = {
    messageData: Array<UserMessageType>
    dialogsData: Array<UserDialogsType>
}

 type UserMessageType = {
    id?: number
    avatar: string
    time: number | string
    message: string
}

type UserDialogsType = {
    id?: number
    avatar: string
    userName: string
}

let state: StateType = {
    chatPage: {
        dialogsData: [
            {id: 1, avatar: "./img/gwyneth_ava.jpg", userName: 'Gwyneth Paltrow'},
            {id: 2, avatar: "./img/chris_ava.jpg", userName: 'Chris Evans'},
            {id: 3, avatar: "./img/thomas_ava.jpg", userName: 'Thomas Hiddleston'},
            {id: 4, avatar: "./img/chris2_ava.jpg", userName: 'Chris Hemsworth'},
            {id: 5, avatar: "./img/scarlett_ava.jpg", userName: 'Scarlett Johansson'},
            {id: 6, avatar: "./img/mark_ava.jpg", userName: 'Mark Ruffalo'},
            {id: 7, avatar: "./img/zoe_ava.jpg", userName: 'Zoe Saldana'},
            {id: 8, avatar: "./img/tom_ava.jpg", userName: 'Tom Holland'},
            {id: 9, avatar: "./img/chadwick_ava.jpg", userName: 'Chadwick Boseman'},
            {id: 10, avatar: "./img/chris3_ava.jpg", userName: 'Chris Pratt'},
            {id: 11, avatar: "./img/benedict_ava.jpg", userName: 'Benedict Cumberbatch'}
        ],

        messageData: [
            {id: 1, avatar: './img/robert_ava.jpg', time: 5 + ":" + 32, message: "Hellow! How are you? I heard you starred in a new movie."},
            {id: 2, avatar: './img/gwyneth_ava.jpg', time: 5 + ":" + 44, message: "Hellow! I starred in the world blockbuster Avengers!"}
        ]
    } 
};


export default state;