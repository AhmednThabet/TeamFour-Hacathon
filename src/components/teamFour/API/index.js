function GetWithdrawalRequestDetails(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/details/${id}`;
}

function cancelWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/cancel/${id}`;
}
function confrimWithdrawRequest(id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/confirm-payout/${id}`;
}

export const API = {
  GetWithdrawalRequestDetails,
  cancelWithdrawRequest,
  confrimWithdrawRequest,
};

export default URL;
