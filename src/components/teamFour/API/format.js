export function format(data) {
  let finshData = {
    status: data.status,
    amount: data.amount,
    history: data.history,
    id: data._id,
  };

  if (data.typeWithdraw == "bank") {
    finshData = {
      provider: {
        name: data.bank.bankName,
        infos: data.bank.accountNumber,
      },
      isBank: true,
      ...finshData,
      interstions: [
        "Open your bank account app to ensure payment delivery",
        "Avoid opening support ticket before expected date",

        "Confirm receiving your payment",
      ],
    };
  } else {
    finshData = {
      provider: {
        name: data.office?.name,
        infos: "",
        fees: data.office?.fees,
      },
      isBank: false,
      ...finshData,
      interstions: [
        `Address: ${data?.office?.address}`,
        "Working hours from 9:00 am to 7:00 pm",
        "Bring your ID for identification",
        "Confirm receiving your payment",
        `Office fees ${data?.office?.fees}`,
      ],
    };
  }
  return finshData;
}

export default format;
