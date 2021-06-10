export interface Employee{

   /* id:number;
    name:string;
    departmentit:string;
    status:string;
    phoneno:number;
    country:{
        cid:number,
        cname:string
    }
    createddtm:number;
    createdby:string;
    updateddtm:number;
    updatedby:string;*/
    id:number;
    username:string;
    email:string;
    password:string;
    dept:string;
    status:string;
    phoneno:number;
    country:{
        cid:number,
        cname:string
    }
    createddt:number;
    createdby:string;
    updateddt:number;
    updatedby:string;
}