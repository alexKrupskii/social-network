import {ActionsTypes, ProfilePageType} from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    sideBarData: {
        userInfoData: [
            { id: 1,
                avatar: require("./../assets/img/robert_ava.jpg"),
                postsCount: 40,
                followersCount: 355770,
                followingCount: 125,
                userName: 'Robert Downey Jr.' }
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
        { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"),
            postImg: require("./../assets/img/download/gwin.jpg"),
            userName: 'Gwyneth Paltrow',
            time: '5 minutes ago',
            text: 'Hello! My name is Gwyneth! I am an actress in Hollywood. And I starred in the world blockbuster Avengers!',
            likesCount: 0,
            commentCount: 2880,
            repostCount: 6888 },
        { id: 2,
            avatar: require("./../assets/img/robert_ava.jpg"),
            userName: 'Robert Downey Jr.',
            time: '11 minutes ago',
            text: 'Hellow! My name is Robert!',
            likesCount: 20000,
            commentCount: 6000,
            repostCount: 11000 },
        { id: 3,
            avatar: require("./../assets/img/gwyneth_ava.jpg"),
            postImg: require("./../assets/img/download/gwin.jpg"),
            userName: 'Gwyneth Paltrow',
            time: '5 minutes ago',
            text: 'Hello! My name is Gwyneth! I am an actress in Hollywood. And I starred in the world blockbuster Avengers!',
            likesCount: 0,
            commentCount: 2880,
            repostCount: 6888 },
    ],
    newPostText: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPostElement = {
                    id: 1,
                    userName: 'Gwyneth Paltrow',
                    avatar: require("./../assets/img/gwyneth_ava.jpg"),
                    time: 10 + ':' + 22,
                    likesCount: 0,
                    commentCount: 0,
                    repostCount: 0,
                    text: action.newText,
                    postImg: ""
                };
                state.postData.unshift(newPostElement);
                state.newPostText = '';
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.updateNewPostText;
            return state;
        default:
            return state;
    }
};

export const addPostAC = (newText: string) => ({type: ADD_POST, newText} as const);
export const updateNewPostTextAC = (updateNewPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    updateNewPostText
} as const);
