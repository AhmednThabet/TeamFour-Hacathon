function GetWithdrawalRequestDetails(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/details/${id}`;
}

function cancelWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/cancel/${id}`;
}
function confrimWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/confirm-payout/${id}`;
}

function getOptions(token, method = "get", data) {
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
};

export default URL;
