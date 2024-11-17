import axios from "axios";

export const payment = async (token) => {
  // code body
  return axios.post("https://full-stack-ecom-my-sql-bd.vercel.app/api/user/create-payment-intent"
    ,{}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};