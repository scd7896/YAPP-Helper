import { RecruitModel } from "@types";
import { SET_RECRUIT_VALUE, RECRUIT_DATA_REQUEST, RECRUIT_DATA_SUCCESS, RECRUIT_DATA_FAILURE } from "./actionTypes";

export const recruitDataRequest = () => {
  return {
    type: RECRUIT_DATA_REQUEST,
  };
};

const recruitDataSucess = (payload: RecruitModel) => {
  return {
    type: RECRUIT_DATA_SUCCESS,
    payload,
  };
};

const recruitDataFailure = () => {
  return {
    type: RECRUIT_DATA_FAILURE,
  };
};

export const setRecruitValue = (payload: object) => {
  return {
    type: SET_RECRUIT_VALUE,
    payload,
  };
};

export type RecruitActionTypes =
  | ReturnType<typeof setRecruitValue>
  | ReturnType<typeof recruitDataRequest>
  | ReturnType<typeof recruitDataSucess>
  | ReturnType<typeof recruitDataFailure>;
