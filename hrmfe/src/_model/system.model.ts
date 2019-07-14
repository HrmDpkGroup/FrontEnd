class system {
    id = "";
    name = "";
    description = "";
    parent = "";
    constructor(data:{id:string,name:string,description:string,parent:string}) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.parent = data.parent;
    }
    addSystemModel() {
        let addModel =
        {
            "name": this.name,
            "description": this.description,
            "parent": this.parent
        }
        return addModel;

    }
}
export default system