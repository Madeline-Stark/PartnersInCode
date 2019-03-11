export default (state = [], action) => {
  switch(action.type) { //.type refers to GET_PROGRAMMER_SUCCESS etc.
    case 'GET_PROGRAMMER_SUCCESS':
      return action.programmers;
      //when create in reducer, programmer(s) is stored in json
      //creator functions return .action and .programmers

      case 'CREATE_PROGRAMMER_SUCCESS':
        return state.concat(action.programmer); //concat merges arrays

    default:
      return state;
  }
}
