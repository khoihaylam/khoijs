let a=10;
a=12
console.log(a)
const b=10;
console.log(b)
var c=10;
var c=8;
console.log(c)
//camel case(nguyenxuanbach)
//kebab case(nguyen-xuan-bach)
//bài 0
let inputchieudai;
let inputchieurong;
inputchieudai=prompt("nhập chiều dài")
inputchieurong=prompt("nhập chiều rộng")
let chieudai=parseInt(inputchieudai);
let chieurong=parseInt(inputchieurong);
let chuvi=(chieudai+chieurong)*2;
alert("tính chu vi:"+chuvi);
//bài 3, 4
let inputbankinh;
inputbankinh=prompt("nhập bán kính")
let bankinh=parseInt(inputbankinh)
let p=2*3.14*bankinh
let s=3.14*bankinh*bankinh
alert("tính chu vi hình tròn:"+p)
alert("tính diện tích hình tròn:"+s)
//bài 1
let inputvatly;
let inputhoahoc;
let inputsinhhoc;
inputvatly=prompt("nhập điểm vật lý")
inputhoahoc=prompt("nhập điểm hóa học")
inputsinhhoc=prompt("nhập điểm  sinh học")
let vatly=parseInt(inputvatly)
let hoahoc=parseInt(inputhoahoc)
let sinhhoc=parseInt(inputsinhhoc)
let tong=(vatly+hoahoc+sinhhoc)/3
alert("tính điểm trung bình:"+tong)
//bài 2
let inputF;
inputF=prompt("nhập nhiệt độ F")
let F=parseInt(inputF);
let C=(5*F-160)/9;
alert("nhập nhiệt ĐỘ C:"+c)