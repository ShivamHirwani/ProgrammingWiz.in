
document.addEventListener("DOMContentLoaded", function () {

  const lauchBtn = document.getElementById("launch-editor");

  lauchBtn.addEventListener("click", function (e) {
    window.location.href = "merch.html"
  });
});

const newsBtn=document.getElementById("newsletter");
newsBtn.addEventListener("click", function(e){
  window.location.href="newsletter.html"
});

const toggleThemeBtn = document.querySelector('#theme-button');
toggleThemeBtn.addEventListener("click", function (e) {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  var newTheme = 'light';
  newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
});

// const blogDiv=document.getElementById("blog-id");

//         blogDiv.addEventListener("click", function(e){
//           window.location.href="blog.html"
//           console.log('clicked');
//         });


const search = () => {
  const searchBox = document.getElementById("search-bar").value.toUpperCase();
  const blogs = document.getElementById("blog-section")
  const blog = document.querySelectorAll(".blog");
  const blogTitle = document.getElementsByTagName("h1")

  for (var i = 0; i < blogTitle; i++) {
    let match = blog[i].getElementsByTagName('h2')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHtml

      if (text.value.toUpperCase().indexOf(searchBox) > -1) {
        blog[i].style.display = "";

      } else {
        blog[i].style.display = none;
      }
    }
  }

}


var dragged;

function dragStart(event) {
  dragged = event.target;
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
  event.preventDefault();
  const cardSlider = event.target.closest(".card-slider");
  if (cardSlider) {
    const cardList = Array.from(cardSlider.getElementsByClassName("card"));
    const closestCard = cardList.reduce((prev, curr) => {
      const rect = curr.getBoundingClientRect();
      const distance = Math.abs(event.clientX - rect.left - rect.width / 2);
      return distance < prev.distance ? { card: curr, distance: distance } : prev;
    }, { card: null, distance: Number.MAX_SAFE_INTEGER }).card;
    cardSlider.insertBefore(dragged, closestCard.nextSibling);
  }
}

function dragEnd(event) {
  dragged = null;
}




