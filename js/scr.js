/*Phone*/
var phone = document.getElementById("phone_1"),
  iframe = document.getElementById("frame_1");

/*View*/
function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
  }
}

/*URL*/
const url = "https://www.youtube.com/embed/BQzqb9Fnl94";
window.onload = function () {
    let frame = document.getElementById('frame_1');
    frame.src = url;
    console.log(frame);
}
/*Logo yönlendirmesi*/
function goSite() {
  window.location.href = "https://depremtr.com.tr/";
}

