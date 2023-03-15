function GetWithdrawalRequestDetails(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/details/${id}`;
}

function cancelWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/cancel/${id}`;
}
function confrimWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/confirm-payout/${id}`;
}

function getOptions(method = "get", data) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNlMTA0YWE4YmJhMmNiM2Y3NTRkN2RiIiwicm9sZSI6MH0sImV4cCI6MTY3ODk2MzQzNCwiaWF0IjoxNjc4ODc3MDM0fQ.X70ZmSfBX9-tC8pKIse4tJkUIyEUcMTuX84LzEEb1No";
  const options = {
    headers: {
      method,
      Authorization: `Bearer ${token}`,
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
};

export default URL;
