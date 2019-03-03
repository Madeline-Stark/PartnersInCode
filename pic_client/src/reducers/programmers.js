export default (state = [], action) => {
  switch(action.type) {
    case 'GET_PROGRAMMER_SUCCESS':
      return action.programmer;

    default:
      return state;
  }
}
