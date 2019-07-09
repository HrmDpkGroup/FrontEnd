import { graphrequest } from '../_services/admin.services';
import { adminConstants } from '../_constants/admin.constants';
import systemModel from '../_model/system.model';
export const mutationAdminAction = {
    addSystem,
    addServcie,
}
/**
   * سرویس برای ارسال درخواست به سمت
   * qraphQlApiService
   * @param اضافه کردن سیستم جدید
   * @param item اطلاعات ورودی
*/
function addSystem(item:{}) {
    var SystemModel = new systemModel(item).addSystemModel();
    let data = {
        query: `
        mutation addsystem($name:String!,$description:String,$parent:String!){
            addSystem(name:$name,description:$description,parentId:$parent)
            {
                name
                description
            }
        }
        `,
        variables: SystemModel
    }
    return dispatch =>
    {
        dispatch(request());
        graphrequest(data).then(
            Response=>{
                dispatch(success(Response.data));
            },
            Error=>{
                dispatch(failure);
            }
        )
    }
    
    function request() { return { type: adminConstants.ADD_SYSTEM_REQUEST,data:null } }
    function success(data) { return { type: adminConstants.ADD_SYSTEM_SUCCESS,data:data } }
    function failure() { return { type: adminConstants.ADD_SYSTEM_FAILURE,data:null } }
}
function addServcie() {

}