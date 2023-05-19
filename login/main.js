 // Lấy các phần tử input trong form
 const formInputs = document.querySelectorAll('.content__form input');

 // Lấy button Cancel
     const cancelButton = document.querySelector('.form__btn button[type="button"]:first-child');
 
 // Xử lý sự kiện khi người dùng nhấn Cancel
     cancelButton.addEventListener('click', () => {
   // Xóa giá trị trong các input
   formInputs.forEach(input => {
     input.value = '';
   });
 });

 //////câu 2
 var myDiv = document.querySelector(".subSidebar"); // Lấy tham chiếu đến div

 const closeSidebar = document.querySelector(".wrapper__img");


 closeSidebar.addEventListener('click', ()=> {
  myDiv.style.display = "none";
 }
 )
///// câu 2 open
var open = document.querySelector(".subSidebar"); // Lấy tham chiếu đến div

 const openSidebar = document.querySelector(".sidebar__setting");


 openSidebar.addEventListener('click', ()=> {
  myDiv.style.display = "block";
 }
 )

 //// câu 3
/// khi di chuyển vào setting sẽ in đậm icon và tên
// var hover = document.querySelector(".subSidebar li");

// const hoverSidebar = document.querySelector(".subSidebar li");

// hoverSidebar.addEventListener("")


const ACCESS_TOKEN = 'accessToken';
const logout = document.getElementById('logout');
logout.style.cursor = 'pointer';

logout.addEventListener('click', () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.location.assign('/index.html');
});
















