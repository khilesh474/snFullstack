
function addData(){
    var data=localStorage.setItem('udata',document.fdata.uname.value)
   }
   
   
   function showData(){
   document.getElementById('show').innerHTML=localStorage.getItem('udata')
   }