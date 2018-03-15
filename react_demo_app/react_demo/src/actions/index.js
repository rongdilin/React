import axios from 'axios';

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
                    .then(res => res.json())
                    .then(res_json => {
                        if(list){
                            return [...list, ...res_json.data];
                        } else{
                            return res_json.data;
                        }
                    })


    return {
        type: 'GET_BOOKS',
        payload: request
    }
}

export function getBookWithReviewer(id){
    const req = axios.get(`/api/getBook?id=${id}`)
    
    return (dispatch)=>{
        req.then(({data}) => {
            let book = data;

            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data}) => {
                let res = {
                    book,
                    reviewer: data
                }
                
                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload: res
                })
            })
            
        })
    }
}

export function clearBookWithReviewer(){
    return {
        type:'CLEAR_BOOK_W_REVIEWER',
        payload:{
            book: {},
            reviewer: {}
        }
    }
}


export function addBook(){
    const req = axios.post('/api/book', book)
    .then(res => res.data);

    return {
        type: 'ADD_BOOK',
        payload: req
    }
}

export function clearNewBook(){
    return {
        type: 'CLEAR_NEWBOOK',
        payload: {}
    }

}


export function getUserPosts(userId){
    const req = axios.get(`/api/user_posts?user=${userId}`)
    .then(res => res.data)

    return {
        type: 'GET_USER_POSTS',
        payload: req
    }
}

export function getBook(id){
    const req = axios.get(`/api/getBook?id=${id}`)
    .then(res => res.data);

    return {
        type: 'GET_BOOK',
        payload: req
    }
}

export function updateBook(data){
    const req = axios.post(`/api/book_update`,data)
    .then(res => res.data);

    return {
        type:'UPDATE_BOOK',
        payload: req
    }
}

export function deleteBook(id){
    const req = axios.delete(`/api/delete_book?id=${id}`)
    .then(res => res.data);

    return {
        type:'DELETE_BOOK',
        payload: req
    }
}

export function clearBook(){
    return {
        type:'CLEAR_BOOK',
        payload:{
            book: null,
            updateBook: false,
            postDeleted: false
        }
    }
}
/*======= USER ===========*/
export function loginUser({email, password}){
    
    const req = axios.post(`/api/login`, {email, password})
    .then(res => res.data);
    
    return {
        type:'USER_LOGIN',
        payload: req
    }
}

export function auth(){
    const req = axios.get('/api/auth')
    .then(res => res.data);


    //send back to the reducer
    return {
        type:'USER_AUTH',
        payload: req
    }
}

export function getUsers(){
    const req = axios.get(`/api/users`)
    .then(res => res.data);

    return {
        type: 'GET_USERS',
        payload: req
    }
}

export function userRegisterUser(user){
    const req = axios.post(`/api/register`, user)
    

    return (dispatch) =>{
        req.then(({data})=>{
            let users = data.success ? [...userList, data.user] : userList
            let res = {
                success: data.success,
                users
            }
            dispatch({
                type:'USER_REGISTER',
                payload: res
            })
        })
    }
}
