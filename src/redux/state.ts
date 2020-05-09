export type StateExportType = {
    state: StateType
}

type StateType = {
    chatPage: ChatType
    profilePage: ProfileType
}

type ProfileType = {
    postData: Array<PostType>
    sideBarData: SideBarType
}
type ChatType = {
    messagesPage: MessagesType
    dialogsData: Array<UserDialogsType>

}

type MessagesType = {
    userMessageTitleData: Array<UserMessageTitleType>
    messageData: Array<UserMessageType>
}
type SideBarType = {
    userInfoData: Array<UserInfoType>
    friendsData: Array<FriendsItemType>
}

type UserInfoType = {
    id: number
    avatar: string
    userName: string
    postsCount: number
    followersCount: number
    followingCount: number
}
type FriendsItemType = {
    id: number
    avatar: string
    userName: string
}
type PostType = {
    id: number
    avatar: string
    userName: string
    time: number | string
    postImg?: string
    text: string
    likesCount: number
    commentCount: number
    repostCount: number
}
type UserMessageTitleType = {
    id?: number
    avatar: string
    userName: string
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
    profilePage: {
        sideBarData: {
            userInfoData: [
                {id: 1, avatar: "./img/robert_ava.jpg", postsCount: 40, followersCount: 355770, followingCount: 125, userName: 'Robert Downey Jr.'}
            ],

            friendsData: [
                {id: 1, avatar: "./img/gwyneth_ava.jpg", userName: 'Gwyneth'},
                {id: 2, avatar: "./img/chris_ava.jpg", userName: 'Chris'},
                {id: 3, avatar: "./img/chris2_ava.jpg", userName: 'Chris'},
                {id: 4, avatar: "./img/thomas_ava.jpg", userName: 'Thomas'},
                {id: 5, avatar: "./img/scarlett_ava.jpg", userName: 'Scarlett'},
                {id: 6, avatar: "./img/mark_ava.jpg", userName: 'Mark'},
                {id: 7, avatar: "./img/zoe_ava.jpg", userName: 'Zoe'},
                {id: 8, avatar: "./img/tom_ava.jpg", userName: 'Tom'},
                {id: 9, avatar: "./img/chadwick_ava.jpg", userName: 'Chadwick'}
            ]
        },

        postData: [
            {id: 1, avatar: "./img/gwyneth_ava.jpg", postImg: "./img/download/gwin.jpg", userName: 'Gwyneth Paltrow', time: '5 minutes ago', text: 'Hello! My name is Gwyneth! I am an actress in Hollywood. And I starred in the world blockbuster Avengers!', likesCount: 14576, commentCount: 2880, repostCount: 6888},
            {id: 2, avatar: "./img/robert_ava.jpg", userName: 'Robert Downey Jr.', time: '11 minutes ago', text: 'Hellow! My name is Robert!', likesCount: 20000, commentCount: 6000, repostCount: 11000}
        ]
    },

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

        messagesPage: {
            userMessageTitleData: [
                {id: 1, avatar: './img/gwyneth_ava.jpg', userName: 'Gwyneth Paltrow'},
            ],

            messageData: [
                {id: 1, avatar: './img/robert_ava.jpg', time: 5 + ":" + 32, message: "Hellow! How are you? I heard you starred in a new movie."},
                {id: 2, avatar: './img/gwyneth_ava.jpg', time: 5 + ":" + 44, message: "Hellow! I starred in the world blockbuster Avengers!"}
            ]
        }
    } 
};


export default state;