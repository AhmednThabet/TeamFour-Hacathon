export function response(data) {
  let finshData = {
    status: data.status,
    amount: data.amount,
    history: data.history,
    id: data._id,
    createdAt: data.createdAt,
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

function date(time) {
  return new Date(time).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export const format = {
  date,
  response,
};

export default format;
