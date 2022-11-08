import axios from 'axios'

export const startGetPosts=()=>{
  return (dispatch)=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log('posts response', res.data)
      dispatch(setPosts(res.data))
     })
    .catch(err=> console.log('err', err))
  }
}

export const setPosts=(data)=>{
    console.log('inside setPosts action generator')
   return {type:'SET_POSTS', payload: data}
}