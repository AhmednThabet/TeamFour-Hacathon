import { getCookie } from "lib/js-cookie";
const token = getCookie("currentUser").accessToken;

function GetWithdrawalRequestDetails(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/details/${id}`;
}

function cancelWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/cancel/${id}`;
}
function confrimWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/confirm-payout/${id}`;
}
function getList(keys = "") {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/list${keys}`;
}

<<<<<<< HEAD
function getOptions(method = "get", data) {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNlMTA0YWE4YmJhMmNiM2Y3NTRkN2RiIiwicm9sZSI6MH0sImV4cCI6MTY3ODk2MzQzNCwiaWF0IjoxNjc4ODc3MDM0fQ.X70ZmSfBX9-tC8pKIse4tJkUIyEUcMTuX84LzEEb1No";
=======
function getOptions(token, method = "get", data) {
>>>>>>> 64e3e61a662b0f453fc6d950c8174ac91ce6c77c
  const options = {
    headers: {
      method,
      Authorization: token,
    },
  };
  if (data) {
    options.body = data;
  }
  return options;
}

export const API = {
  GetWithdrawalRequestDetails,
  cancelWithdrawRequest,
  confrimWithdrawRequest,
  getOptions,
  getList,
};

export default URL;
