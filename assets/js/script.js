function SponsorChange(state) {
    if (state == 'prev') {
        // document.getElementById('previous-sponsor-button').disabled=true
        // document.getElementById('current-sponsor-button').disabled=false
        document.getElementById('previous-sponsor-button').classList.add("btn--selected");
        document.getElementById('current-sponsor-button').classList.remove("btn--selected");
        document.getElementById('previous-sponsor').style.display = "block"
        document.getElementById('current-sponsor').style.display = "none"
    } else {
        // document.getElementById('previous-sponsor-button').disabled=false
        // document.getElementById('current-sponsor-button').disabled=true
        document.getElementById('previous-sponsor-button').classList.remove("btn--selected");
        document.getElementById('current-sponsor-button').classList.add("btn--selected");
        document.getElementById('previous-sponsor').style.display = "none"
        document.getElementById('current-sponsor').style.display = "block"
    }

}
$('.scroll').click(function(e) {

    e.preventDefault();
    var target = $(this).attr('href');

    if (target.length < 2) return

    // var headerOffset = 140
    var element = document.querySelector(target);

    if (element) {
        var offsetPosition = element.getBoundingClientRect().top;

        element.scrollIntoView({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

});

// let calcScrollValue = () => {
//   let scrollProgress = document.getElementById("progress");
//   let progressValue = document.getElementById("progress-value");
//   let pos = document.documentElement.scrollTop;
//   let calcHeight =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let scrollValue = Math.round((pos * 100) / calcHeight);
//   if (pos > 100) {
//     scrollProgress.style.display = "grid";
//   } else {
//     scrollProgress.style.display = "none";
//   }
//   scrollProgress.addEventListener("click", () => {
//     document.documentElement.scrollTop = 0;
//   });
//   scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
// };

// window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;






// team section