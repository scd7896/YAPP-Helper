import { ExcelKeySetAction } from "../action/excelKeySetForm";
import { SET_EXCEL_TEXT } from "../action/actionTypes";
import { excelKeySetFormState, SetFormKey } from "@types";
const initialState = {
  name: -1,
  email: -1,
  isPass: -1,
  meetingTime: -1,
};

const excelKeySetForm = (state: excelKeySetFormState = initialState, action: ExcelKeySetAction) => {
  switch (action.type) {
    case SET_EXCEL_TEXT:
      const { key, value } = action.payload;
      const prevKeys = Object.keys(state) as Array<SetFormKey>;
      const prevTargetKey = prevKeys.filter((prevKey) => {
        return state[prevKey] === value;
      })[0];
      if (prevTargetKey !== undefined) {
        return {
          ...state,
          [prevTargetKey]: -1,
          [key]: value,
        };
      } else {
        return {
          ...state,
          [key]: value,
        };
      }

    default:
      return { ...state };
  }
};

export default excelKeySetForm;
