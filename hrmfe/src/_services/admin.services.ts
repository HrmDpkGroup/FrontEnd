import {config} from '../_helper/config'
/**
   * سرویس برای ارسال درخواست به سمت
   * qraphQlApiService
   * @param qraphQlData باید یک مقدار قابل شناسایی برای سرور باشد
   * @param query متن کوئری 
   * @param variables ورودی های کوئری
   * @returns می باشد json خروجی به صورت یک
   */
export function request(qraphQlData : {query:string,variables:any}) {
    fetch(
        config.apiUrl,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(qraphQlData)
        }
    ).then(handleResponse)
        .catch(error => {
            return { message: "مشکل در ارتباط با سرور" };
        });
}
function handleResponse(response) {
    debugger;
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                // location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}