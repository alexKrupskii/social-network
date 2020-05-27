import {v1} from "uuid";

let rerenderEntireTree = () => {

}

export type StateExportType = {
    state: StateType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (newText:string) => void
    updateNewMessageText: (newText: string) => void
}
export type StateType = {
    chatPage: ChatPageType
    profilePage: ProfilePageType
    messageHookData: Array<MessageHookDataType>
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    sideBarData: SideBarDataType
    newPostText: string
}
export type ChatPageType = {
    messagesPage: MessagesPageType
    dialogsData: Array<DialogsDataType>
    
}

export type MessagesPageType = {
    userMessageTitleData: Array<UserMessageTitleDataType>
    messageData: Array<MessageDataType>
    newMessageText: string
}
export type SideBarDataType = {
    userInfoData: Array<UserInfoDataType>
    friendsData: Array<FriendsDataType>
}

export type UserInfoDataType = {
    id: number
    avatar: string
    userName: string
    postsCount: number
    followersCount: number
    followingCount: number
}
export type FriendsDataType = {
    id: number
    avatar: string
    userName: string
}
export type PostDataType = {
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
export type UserMessageTitleDataType = {
    id?: number
    avatar: string
    userName: string
}
export type MessageDataType = {
    id: string
    avatar: string
    time: number | string
    message: string
}
export type DialogsDataType = {
    id?: number
    avatar: string
    userName: string
}

export type MessageHookDataType = {
    id: number
    avatar: string
    time: string | number
    message: string
}

let state: StateType = {
    profilePage: {
        sideBarData: {
            userInfoData: [
                { id: 1, avatar: require("./../assets/img/robert_ava.jpg"), postsCount: 40, followersCount: 355770, followingCount: 125, userName: 'Robert Downey Jr.' }
            ],

            friendsData: [
                { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"), userName: 'Gwyneth' },
                { id: 2, avatar: require("./../assets/img/chris_ava.jpg"), userName: 'Chris' },
                { id: 3, avatar: require("./../assets/img/chris2_ava.jpg"), userName: 'Chris' },
                { id: 4, avatar: require("./../assets/img/thomas_ava.jpg"), userName: 'Thomas' },
                { id: 5, avatar: require("./../assets/img/scarlett_ava.jpg"), userName: 'Scarlett' },
                { id: 6, avatar: require("./../assets/img/mark_ava.jpg"), userName: 'Mark' },
                { id: 7, avatar: require("./../assets/img/zoe_ava.jpg"), userName: 'Zoe' },
                { id: 8, avatar: require("./../assets/img/tom_ava.jpg"), userName: 'Tom' },
                { id: 9, avatar: require("./../assets/img/chadwick_ava.jpg"), userName: 'Chadwick' }
            ]
        },

        postData: [
            { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"), postImg: require("./../assets/img/download/gwin.jpg"), userName: 'Gwyneth Paltrow', time: '5 minutes ago', text: 'Hello! My name is Gwyneth! I am an actress in Hollywood. And I starred in the world blockbuster Avengers!', likesCount: 0, commentCount: 2880, repostCount: 6888 },
            { id: 2, avatar: require("./../assets/img/robert_ava.jpg"), userName: 'Robert Downey Jr.', time: '11 minutes ago', text: 'Hellow! My name is Robert!', likesCount: 20000, commentCount: 6000, repostCount: 11000 },
            { id: 3, avatar: require("./../assets/img/gwyneth_ava.jpg"), postImg: require("./../assets/img/download/gwin.jpg"), userName: 'Gwyneth Paltrow', time: '5 minutes ago', text: 'Hello! My name is Gwyneth! I am an actress in Hollywood. And I starred in the world blockbuster Avengers!', likesCount: 0, commentCount: 2880, repostCount: 6888 },
        ],

        newPostText: ''

    },

    chatPage: {
        dialogsData: [
            { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"), userName: 'Gwyneth Paltrow' },
            { id: 2, avatar: require("./../assets/img/chris_ava.jpg"), userName: 'Chris Evans' },
            { id: 3, avatar: require("./../assets/img/thomas_ava.jpg"), userName: 'Thomas Hiddleston' },
            { id: 4, avatar: require("./../assets/img/chris2_ava.jpg"), userName: 'Chris Hemsworth' },
            { id: 5, avatar: require("./../assets/img/scarlett_ava.jpg"), userName: 'Scarlett Johansson' },
            { id: 6, avatar: require("./../assets/img/mark_ava.jpg"), userName: 'Mark Ruffalo' },
            { id: 7, avatar: require("./../assets/img/zoe_ava.jpg"), userName: 'Zoe Saldana' },
            { id: 8, avatar: require("./../assets/img/tom_ava.jpg"), userName: 'Tom Holland' },
            { id: 9, avatar: require("./../assets/img/chadwick_ava.jpg"), userName: 'Chadwick Boseman' },
            { id: 10, avatar: require("./../assets/img/chris3_ava.jpg"), userName: 'Chris Pratt' },
            { id: 11, avatar: require("./../assets/img/benedict_ava.jpg"), userName: 'Benedict Cumberbatch' }
        ],

        messagesPage: {
            userMessageTitleData: [
                { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"), userName: 'Gwyneth Paltrow' },
            ],

            messageData: [
                { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 5 + ":" + 32, message: "Hellow! How are you? I heard you starred in a new movie." },
                { id: v1(), avatar: require("./../assets/img/gwyneth_ava.jpg"), time: 5 + ":" + 44, message: "Hellow! I starred in the world blockbuster Avengers!" },
                { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 7 + ":" + 10, message: "This is awesome!" },
                { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 7 + ":" + 44, message: "I'm very happy for you!" },
                { id: v1(), avatar: require("./../assets/img/gwyneth_ava.jpg"), time: 8 + ":" + 15, message: "Thank you very much! Very nice to hear!" },
                { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 8 + ":" + 22, message: "I'll be doing a new movie soon, too!" },
                { id: v1(), avatar: require("./../assets/img/gwyneth_ava.jpg"), time: 10 + ":" + 20, message: "Cool! And what is it called?" }
            ],

            newMessageText: ''
        }
    },

    messageHookData: [
        
    ]
};

export function addLike(id: number, likesCount: number) {
    state.profilePage.postData.map((post: any) => {
        if (post.id !== id) {
            return post
        } else {
            return { ...post, likesCount: likesCount }
        }
    })
}

export function addPost () {
    if (state.profilePage.newPostText === '') {
        return false
    } else {
        let newPostElement = {
            id: 1,
            userName: 'Gwyneth Paltrow',
            avatar: require("./../assets/img/gwyneth_ava.jpg"),
            time: 10 + ':' + 22,
            likesCount: 0,
            commentCount: 0,
            repostCount: 0,
            text: state.profilePage.newPostText,
            postImg: ""
        }
        state.profilePage.postData.push(newPostElement);
        state.profilePage.newPostText = '';
        rerenderEntireTree();
    }
}

export function updateNewPostText (newText: string) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export function addMessage () {
    if (state.chatPage.messagesPage.newMessageText === '') {
        return false
    } else {
        let newMessageElement = {
            id: v1(),
            avatar: require("./../assets/img/robert_ava.jpg"),
            time: 5 + ":" + 32,
            message: state.chatPage.messagesPage.newMessageText
        }
        state.chatPage.messagesPage.messageData.push(newMessageElement);
        state.chatPage.messagesPage.newMessageText = '';
        rerenderEntireTree();
    }
}

export function updateNewMessageText (newText: string) {
    state.chatPage.messagesPage.newMessageText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: ()=> void) => {
    rerenderEntireTree = observer;
}


export default state;