
function GetWithdrawalRequestDetails (id) {
  return `https://talents-valley-backend.herokuapp.com/api/withdraw/details/${id}`
}


export const API = {
  GetWithdrawalRequestDetails: GetWithdrawalRequestDetails
}


export default URL