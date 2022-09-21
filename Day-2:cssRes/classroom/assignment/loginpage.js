
function addData(){
    var userData={}
    userData.uname=document.fdata.uname.value
    userData.pass=document.fdata.pass.value

    console.log(userData);
    
    var data=localStorage.setItem('udata',JSON.stringify(userData))
}