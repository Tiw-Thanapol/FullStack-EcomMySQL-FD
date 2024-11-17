import axios from 'axios'

export const createProduct = async (token, form) => {
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/product', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listProduct = async (count = 20) => {
    return axios.get('https://full-stack-ecom-my-sql-bd.vercel.app/api/products/' + count,)
}

export const uploadFiles = async (token, form) => {
    //console.log('Form',form)
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/images', {
        image: form
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export const removeFiles = async (token, public_id) => {
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/removeimages', {
        public_id
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export const deleteProduct = async (token, id) => {
    return axios.delete('https://full-stack-ecom-my-sql-bd.vercel.app/api/product/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const readProduct = async (token, id) => {
    return axios.get('https://full-stack-ecom-my-sql-bd.vercel.app/api/product' + id,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const updateProduct = async (token, id, form) => {
    // code body
    return axios.put("https://full-stack-ecom-my-sql-bd.vercel.app/api/product/" + id, form, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const listByProduct = async (token, form) => {
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/product' ,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const searchProduct = async (token, form) => {
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/product', form,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const searchFilters = async (arg) => {
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/searchFilters', arg)
}

export const listProductBy = (sort, order, limit) => {
    return axios.post('https://full-stack-ecom-my-sql-bd.vercel.app/api/productby',
        {
            sort, order, limit
        })
}
