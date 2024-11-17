import axios from 'axios'

export const getOrdersAdmin = async (token) => {
  //console.log('Sending request with token:', token); // Debug token
  return axios.get('https://full-stack-ecom-my-sql-bd.vercel.app/api/admin/orders',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
};
export const changeOrderStatus = async (token, orderId, orderStatus) => {
  //console.log('Sending request with token:', token); // Debug token
  return axios.put('https://full-stack-ecom-my-sql-bd.vercel.app/api/admin/order-status',
    {
      orderId, orderStatus,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  export const getListAllUsers = async (token) => {
    //console.log('Sending request with token:', token); // Debug token
    return axios.get('https://full-stack-ecom-my-sql-bd.vercel.app/api/users',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  };
  export const changeUserStatus = async (token, value) => {
    //console.log('Sending request with token:', token); // Debug token
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/change-status',value,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  };
  export const changeUserRole = async (token, value) => {
    //console.log('Sending request with token:', token); // Debug token
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/change-role',value,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  };