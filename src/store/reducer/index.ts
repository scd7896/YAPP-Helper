import { combineReducers } from "redux";
import desire from "./desire";
import mail from "./mail";
import excelKeySetForm from "./excelKeySetForm";
import recruit from "./recruit";
import modal from "./modal";

const rootReducer = combineReducers({
  desire,
  mail,
  excelKeySetForm,
  recruit,
  modal,
});

export default rootReducer;
