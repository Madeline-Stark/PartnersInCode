// Action Creators

// export const updateProgrammerFormData = addProgrammerData => {
//   return {
//     type: 'UPDATED_DATA',
//     addProgrammerData
//   }
// }
//
// export const resetProgrammerForm = () => {
//   return {
//     type: 'RESET_PROGRAMMER_FORM'
//   }
// }

const initialState = {
  name: '',
  email: '',
  languages: '',
  time_zone: '',
  img_url: '',
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.programmerFormData;

    case 'RESET_PROGRAMMER_FORM':
      return initialState;

    default:
      return state;
  }
}
