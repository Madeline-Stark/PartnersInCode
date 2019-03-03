export default (state = [], action) => {
  switch(action.type) {
    case 'GET_PROGRAMMER_SUCCESS':
      return action.programmer;

      case 'CREATE_PROGRAMMER_SUCCESS':
        return state.concat(action.programmer);

    default:
      return state;
  }
}
