window.addEventListener("load", function () {
  const accordionHeader = document.querySelectorAll(".accordion-header");
  
  for(let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const accordionBody = this.nextElementSibling;
      if (accordionBody.style.display === "block") {
        accordionBody.style.display = "none";
      } else {
        accordionBody.style.display = "block";
      }
    });
  }
});
