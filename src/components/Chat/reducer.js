const reducer = (state, action) => {
    const {
      type,
      data: { users, messages },
    } = action;
    switch(type){
      case "DATA_RESPONSE_SUCCESS":{
        //map userslink
        const usersLinkMap = new Map();
        users.forEach((user)=>usersLinkMap.set(user.id, user));
        const messagesWithUser = messages.map((message)=>{
          const newMessageWithUser = {
            ...message,
            author:usersLinkMap.get(message.userId)
          }
          return newMessageWithUser;
        })
        const newState={
          ...state,
          users,
          messages: messagesWithUser
        };
        return newState;
      };
      case "DATA_RESPONSE_ERROR":{
        const newState={
            ...state,
            error: action.error
        };
        return newState
      }
      default: return state;
    }
  };

  export default reducer