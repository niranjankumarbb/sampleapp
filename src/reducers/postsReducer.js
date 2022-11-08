
const initialPostsValue= []
 const  postsReducer= (state=initialPostsValue, action)=>{
    switch(action.type){
      case 'SET_POSTS': {
        console.log('postsReducer action.payload value', action.payload)
        return [...action.payload]
      }
      default: {
        return [].concat(state)
      }
    }
}
export default postsReducer