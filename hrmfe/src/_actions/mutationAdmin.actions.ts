import { graphrequest } from '../_services/admin.services'
import systemModel from '../_model/system.model';
import {adminConstants} from '../_constants';
export const mutationAdminAction = {
    addSystem,
    addServcie,
}
/**
   * سرویس برای ارسال درخواست به سمت
   * qraphQlApiService
   * اضافه کردن سیستم جدید
   * @param item اطلاعات ورودی
*/
function addSystem(item:{id:string,name:string,description:string,parent:string}) {
    //////////////////////////////////////////////////////////////////////
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
    /////////////////////////////////////////////////////////////////////////
    debugger;
    return (dispatch:any)=>{
        dispatch(request());
        graphrequest(data).then(
               response => {
                    debugger;
                    if (response.statusCode === 200) {
                        dispatch(success(response.data));
                    } else {
                        dispatch(failure());
                    }
                },
                error => {
                    dispatch(failure());
                }
            );
    }
    function request(){return ({type:adminConstants.ADD_SYSTEM_REQUEST})}
    function success(data:any){return({type:adminConstants.ADD_SYSTEM_SUCCESS,action:{data}})}
    function failure(){return({type:adminConstants.ADD_SYSTEM_FAILURE})}
    
}
function addServcie() {

}