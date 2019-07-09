import { request } from '../_services/admin.services'
import systemModel from '../_model/system.model'
export const mutationAdminAction = {
    addSystem,
    addServcie,
}
function addSystem(item:{}) {
    var SystemModel = new systemModel(item).addSystemModel();
    
    //<summary>متد برای اضافه کردن سیستم</summary>
    //<parma name="systemModel" type="systemModel">مقدار باید یک مقدار قابل شناسایی برای سرور باشد</parma>
    //<return type="Json">بازگشت مقدار به صورت JSON می باشد</return>

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
    request(data);
}
function addServcie() {

}