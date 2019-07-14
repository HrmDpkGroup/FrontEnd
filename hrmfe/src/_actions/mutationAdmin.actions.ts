//import { request } from '../_services/admin.services'
import systemModel from '../_model/system.model';
import {adminConstants} from '../_constants';
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
    
    //<summary>متد برای اضافه کردن سیستم</summary>
    //<parma name="systemModel" type="systemModel">مقدار باید یک مقدار قابل شناسایی برای سرور باشد</parma>
    //<return type="Json">بازگشت مقدار به صورت JSON می باشد</return>

    // let data = {
    //     query: `
    //     mutation addsystem($name:String!,$description:String,$parent:String!){
    //         addSystem(name:$name,description:$description,parentId:$parent)
    //         {
    //             name
    //             description
    //         }
    //     }
    //     `,
    //     variables: SystemModel
    // }
    // request(data);
    
    function request(){return ({type:adminConstants.ADD_SYSTEM_REQUEST})}
    function success(data:any){return({type:adminConstants.ADD_SYSTEM_SUCCESS,action:{data}})}
    function failure(){return({type:adminConstants.ADD_SYSTEM_FAILURE})}
    
}
function addServcie() {

}