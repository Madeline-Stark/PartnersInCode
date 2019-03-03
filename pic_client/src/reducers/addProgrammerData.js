export default (state = {
  name: '',
  languages: '',
  time_zone: '',
  email: '',
}, action) => {

  switch(action.type) {
    case 'UPDATED DATA':
      return action.addProgrammerData

    default:
      return state;
  }
}
