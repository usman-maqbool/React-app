const  initState={
    posts:[
        {id:1,title:'this is the first title of the given class' , body:'the following is the body of the given class'},
        {id:2,title:'this is the first title of the given class' , body:'the following is the body of the given class'},
        {id:3,title:'this is the first title of the given class' , body:'the following is the body of the given class'}
    ]
}


const rootReducer=(state=initState , action)=>{
    console.log(action);

    if( action.type=== "DELETE_POST"){
        let newPosts= state.posts.filter((post)=>{
           return post.id !== action.id;
        });
        return{
            ...state,
            posts:newPosts
        }
    }

    

return state;
}


export default rootReducer;