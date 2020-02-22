import React, { Component } from  'react';
// import axios from 'axios';
import {connect} from 'react-redux'
import {deletePost} from '../actions/delposts'
class Post extends Component
{

     // this.setsta
    // state={
    //     post:null
    // }
    // componentDidMount(props){
    //     let id=this.props.match.params.test;
    //    axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //    .then(res=>{
       
    //     this.setState({
    //         post:res.data
    //     })
    //     //console.log(res);
    // })
    // }
    Clickhandler=()=>{
this.props.delPost(this.props.post.id);
this.props.history.push('/home');
    }
render(){
    // console.log(this.props);
 
    const post= this.props.post ?(
        <div className="post">
            <h3 className="center"> Jsonplaceholder  <span className="heart"> &hearts;  </span></h3>
<h4 className="center">{this.props.post.title}</h4>
    <h6>{this.props.post.body}</h6> 
        
        <div className="center">
            <button className="btn grey" onClick={this.Clickhandler}>delete </button>
        </div>
        </div>
        
            ) :(
                
                <div className="center">
                    {/* <a class="btn-floating btn-large pulse"><i class="material-icons">cloud</i></a> */}
                    <a class="btn-floating btn-large cyan pulse"><i class="material-icons"></i></a>
                </div>
            ) 

return (

   
    <div className="container">
        
<h1> {post}</h1>
         
          </div>
)
}

}


const mapStateToProps=(state ,ownProp)=>{
let id= ownProp.match.params.test;
return{
    post:state.posts.find(post=> post.id == id)  
}

}
const mapDispatchToProps=(dispatch)=>{

    return{
        delPost: (id)=>{  dispatch(deletePost(id))}
    }
}
export default  connect(mapStateToProps ,mapDispatchToProps)(Post);