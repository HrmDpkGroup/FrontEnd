import { adminConstants } from '../_constants/admin.constants';
/**
   * سرویس برای ارسال درخواست به سمت
   * qraphQlApiService
   * @param برای عملیات بر روی سیستم استفاده می شود
   * @param type حالت را مشخص می کند
   * @param data برای پرکردن دیتا استفاده میشود
   * @returns نامشخص
*/
export function system(state = {}, action: { type: string, data: any }) {
    switch (action.type) {
        case adminConstants.ADD_SYSTEM_REQUEST:
            return { system: null, data: null };
        case adminConstants.ADD_SYSTEM_SUCCESS:
            return { system: true, data: action.data };
        case adminConstants.ADD_SYSTEM_FAILURE:
            return { system: false, data: null };
        default:
            return state;
    }
}