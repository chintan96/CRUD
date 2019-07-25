const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_USER':
      return state.concat([action.data]);
    case 'DELETE_USER':
      return state.filter((user)=>user.email !== action.id);
    case 'UPDATE_USER':
      return state.map((user)=>user.email === action.id ? {...user,update:!user.update}:user);
    case 'UPDATE':
      return state.map((user)=>{
          if(user.email === action.id) {
            return {
               ...user,
               password:action.data.password,
               country:action.data.country,
               gender:action.data.gender,
               hobby_1:action.data.hobby_1,
               hobby_2:action.data.hobby_2,
               hobby_3:action.data.hobby_3,
               update: !user.update
            }
          } else return user;
        })
    default:
      return state;
  }
}
export default userReducer;
