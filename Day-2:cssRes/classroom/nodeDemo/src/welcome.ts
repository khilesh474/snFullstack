
class MyClass {

    showName(uname:string,email:string) {
        console.log(`welcome to TS ${uname} ${email}`);
    }
}

const userdata = ['admin', 'manager', 'qa']
console.log(...userdata);


let classDemo = new MyClass();
classDemo.showName('admin', 'aa@kk.com')