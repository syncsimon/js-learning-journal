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

const name = {
    value : "simon",
    
}
// console.log(name.value)

// console.log(this.name);
const randonFun = function(names){
    const name = "hitesh rana";
    console.log(this.name)
}
console.log(randonFun);
