import { APRI_MODAL, CHIUDI_MODAL } from "./action";
//reducer da piu struttura e semplifica
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "PREMO_BOTTONE") {
    console.log("bottone premuto");
  }
  if (action.type === APRI_MODAL) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: action.payload,
    };
  }
  if (action.type === CHIUDI_MODAL) {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  return state;
};

export default reducer;
