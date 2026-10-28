// const userRegister = {
//     username : "simon",
//     price : 199 ,
//     message : function(){
//         console.log(`${this.username} welcome to website`);  // this refers to current context...here current context is js
//         console.log(this)
//     }
// }
// userRegister.message()
// userRegister.username = "hitesh"    // here the context changes from simon to hitesh that why it will print hitesh
// userRegister.message();
// console.log(this);

// const name = {
//     value : "simon",
    
// }
// // console.log(name.value)

// // console.log(this.name);
// const randonFun = function(names){
//     // const name = "hitesh rana";
//     console.log(this.names)
// }
// console.log(randonFun("hitu"));

const linkupProfile = {
    userName : "simon",
    role : "developer",

    introduce : function(){
        console.log(`hii my name is ${this.userName}`);
        console.log(`and my role is ${this.role}`);
        
        
    }
}
linkupProfile.introduce();
console.log(linkupProfile.introduce());