import React ,{Component} from 'react'
import Rainbow from '../hoc/rainbow' 
// import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import download from '../download.png';
class  Home extends Component{
// state={
//         posts:[]
// }

// componentDidMount()
// {
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(res=>{
//     // console.log(res.data.title);
// this.setState({
//     posts:res.data.slice(10,20)
// })
// })
// }
    render(){
        console.log(this.props);
const { posts }=this.props
const postsLists= posts.length ? (  posts.map((post)=>{
return(
    <div className="post card bili" key={post.id} >
        <img src={download} />
        <div className="card-content">
            <Link to={`/${post.id}`}>
            <span className="card-title">
                {post.title}
            </span>
            </Link>
<p>{post.body}</p>
        </div>
    </div>
)

}) ):(
    <div className="center">
    there is not posts yet!
    </div>
)


return(
<div className="container">

<h1 className="center">Home</h1>
<p>This version contains the source SCSS files. By choosing this version you have more control over which components to include. You will need a Sass compiler if you choose this option.This is the standard version that comes with both the minified and unminified CSS and JavaScript files. This option requires little to no setup. Use this if you are unfamiliar with Sass.</p>
{postsLists}
</div>      


);



}
}


const mapStateToProps =(state)=>{
    return  {
        posts:state.posts
    }
}

export default  connect(mapStateToProps)(Home);