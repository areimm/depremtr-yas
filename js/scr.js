const url = "https://www.youtube.com/embed/oPoOC1tGrg8";


async function closeInfo() {
   document.getElementById("info").style.animation = "infoanim-close 0.5s ease-in-out forwards";
   document.getElementById('frame_1').src = url;
}

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


/*Logo yönlendirmesi*/
function goSite() {
  window.location.href = "https://depremtr.com.tr/";
}

