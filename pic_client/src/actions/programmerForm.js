// Action Creators

export const updateProgrammerFormData = addProgrammerData => {
  return {
    type: 'UPDATED_DATA',
    addProgrammerData
  }
}

export const resetProgrammerForm = () => {
  return {
    type: 'RESET_PROGRAMMER_FORM'
  }
}
