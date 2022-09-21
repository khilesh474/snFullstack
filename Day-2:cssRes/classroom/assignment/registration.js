
function addData(){
    var userData={}
    userData.uname=document.fdata.uname.value
    userData.pass=document.fdata.pass.value
    userData.email=document.fdata.email.value
    userData.city=document.fdata.city.value
    userData.mn=document.fdata.mn.value

    console.log(userData);
    
 var data=localStorage.setItem('here',JSON.stringify(userData))
}


// function showData(){
// document.getElementById('show').innerHTML=localStorage.getItem('udata')
// }