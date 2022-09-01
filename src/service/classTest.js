export var currentUser 
 export const UserFunctionClass = (name,age,email)=>{
    const emailGetter= ()=> email
    currentUser={
        name,age,emailGetter
    }
}
export class User {
    name
    age
    email
    constructor( name,age,email){
        this.name=name
        this.age=age
        this.email=email
    }
}
