const initialState = {
  name: '',
  languages: '',
  time_zone: '',
  email: ''
}


export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED DATA':
      return action.addProgrammerData;

      case 'RESET_PROGRAMMER_FORM':
        return initialState;

    default:
      return state;
  }
}
