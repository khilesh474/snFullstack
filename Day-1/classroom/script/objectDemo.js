

function show(){
    const Userdata={
        uname: document.data.uname.value,
        email:document.data.email.value,
        cityName: document.data.cityName.value  
        
    }
    
    document.getElementById('show').innerHTML=Userdata.uname + " " + Userdata.email + " " + Userdata.cityName
    }