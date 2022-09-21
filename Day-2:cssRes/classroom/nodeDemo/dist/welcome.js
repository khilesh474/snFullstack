"use strict";
class MyClass {
    showName(uname, email) {
        console.log(`welcome to TS ${uname} ${email}`);
    }
}
const userdata = ['admin', 'manager'];
console.log(...userdata);
let classDemo = new MyClass();
classDemo.showName('admin', 'aa@kk.com');
