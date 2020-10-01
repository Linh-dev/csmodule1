// khoi tao class hoc sinh
function student(ten,ngaysinh,toan,van ,anh){
    this.ten = ten;
    this.ngaySinh = ngaysinh;
    this.diemToan = parseFloat(toan);
    this.diemVan = parseFloat(van);
    this.diemAnh = parseFloat(anh);

    this.diemtb = function(){
        return ((this.diemToan + this.diemVan + this.diemAnh)/3).toFixed(1);
    }
    this.xeploai = function(){
        if(this.diemtb() < 4){
            return "Trung Bình";
        }else if(this.diemtb() < 8){
            return "Khá";
        }else{
            return "Giỏi";
        }
    }
}
let keyStorage = 'data';

let list = JSON.parse(localStorage.getItem(keyStorage));
let listStudent = [] ;
if(list){
    for (let i = 0; i<list.length; i++){
        let student3 = new student(list[i].ten,list[i].ngaySinh,list[i].diemToan,list[i].diemVan,list[i].diemAnh,)
        listStudent.push(student3);
    }
}


let index1; // biến dùng cho các hàm đuổi học(xóa)

// đưa giá trị lên localstorage
function setData(){
    localStorage.setItem(keyStorage, JSON.stringify(listStudent));
}

// lấy giá trị từ localstorage
function getData(){
    let list1 = JSON.parse(localStorage.getItem(keyStorage));
    if(list1){
        for (let i = 0; i<list1.length; i++){
            let student2 = new student(list1[i].ten,list1[i].ngaySinh,list1[i].diemToan,list1[i].diemVan,list1[i].diemAnh,)
            listStudent.push(student2);
        }
    }else{
        listStudent = [];
    }

}

// hiển thị danh sách học sinh
function index(){
    let html ='';
    for(let i =0; i<listStudent.length; i++){
        html += "<tr>"+"<td>"+(i+1)+"</td>"+"<td>"+listStudent[i].ten+"</td>"+"<td>"+listStudent[i].ngaySinh+"</td>"+"<td>"+listStudent[i].diemToan+
        "</td>"+"<td>"+listStudent[i].diemVan+"</td>"+"<td>"+listStudent[i].diemAnh+"</td>"+"<td>"+listStudent[i].diemtb()+"</td>"+
        "<td>"+listStudent[i].xeploai()+"</td>"+"<td>"+"<button class='button2' onclick='duoi("+i+")'>Đuổi</button>"+
        " "+"<button class='button1' onclick='sua("+i+")'>Sửa</button>"+"</td>"+"</tr>";
    }
    document.getElementById("myTbody1").innerHTML = html;
}

// trả các input về giá trị rỗng
function xoaInput(){
    document.getElementById("ten").value = '';
    document.getElementById("ngaySinh").value = '';
    document.getElementById("diemToan").value = '';
    document.getElementById("diemVan").value = '';
    document.getElementById("diemAnh").value = '';
}

// thêm học sinh
function addStudent(){
    if(confirm("Đây có phải là học sinh mới!")){
    let ten1 = document.getElementById("ten").value;
    let ngaysinh1 = document.getElementById("ngaySinh").value;
    let toan1 = parseFloat(document.getElementById("diemToan").value);
    let van1 = parseFloat(document.getElementById("diemVan").value);
    let anh1 = parseFloat(document.getElementById("diemAnh").value);
    let student1 = new student(ten1,ngaysinh1,toan1,van1,anh1);
    listStudent.push(student1);
    index();
    xoaInput();
    alert("Chúc mừng lớp của bạn đã có học sinh mới!")
    }else{
        xoaInput();
    }
    setData();
}

// đuổi học sinh
function duoi(i){
    if(confirm("Sẽ đuổi học học sinh này?")){
        listStudent.splice(i,1);
        index();
        alert(':((');
    }
    setData();
}

// gọi mục thay đổi thông tin học sinh
function sua(i) {
    document.getElementById("add").style.display = 'none';
    document.getElementById("edit").style.display = 'block';
    document.getElementById("ten").value = listStudent[i].ten;
    document.getElementById("ngaySinh").value = listStudent[i].ngaySinh;
    document.getElementById("diemToan").value = listStudent[i].diemToan;
    document.getElementById("diemVan").value = listStudent[i].diemVan;
    document.getElementById("diemAnh").value = listStudent[i].diemAnh;
    return index1 = i;
}

// thực thi việc sửa thông tin
function editStudent() {
    if(confirm("Thay đổi thông tin của học sinh này?")){
        let ten1 = document.getElementById("ten").value;
        let ngaysinh1 = document.getElementById("ngaySinh").value;
        let toan1 = parseFloat(document.getElementById("diemToan").value);
        let van1 = parseFloat(document.getElementById("diemVan").value);
        let anh1 = parseFloat(document.getElementById("diemAnh").value);
        let student1 = new student(ten1,ngaysinh1,toan1,van1,anh1);
        listStudent.splice(index1,1,student1);
        index();
        xoaInput();
        document.getElementById("add").style.display = 'block';
        document.getElementById("edit").style.display = 'none';
    }else{
        document.getElementById("add").style.display = 'block';
        document.getElementById("edit").style.display = 'none';
        xoaInput();
    }
    setData();
}
index();