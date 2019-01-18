import { USERNAME, PASSWORD, USER } from './constants';

/* ************* username action ************ */
export const username = (payload) => {
  dispatch({
    type: USERNAME, 
    payload: payload,
  })
};

/* ************* password action ************ */
export const password = (payload) => {
  dispatch({
    type: PASSWORD,
    payload: payload,
  })
};

/* ************* user action ************* */
export const user = (payload) => {
  dispatch({
    type: USER,
    payload: payload,
  })
};