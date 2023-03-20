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

function getOptions(token, method = "get", data) {
  const options = {
    headers: {
      Authorization: token,
    },
    method,
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
