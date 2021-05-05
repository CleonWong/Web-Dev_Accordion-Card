console.log("testing");

document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("Clicked on question!");

    let accordion__collapse = item.nextElementSibling;

    // Click to open (i.e. doesn't have class `open`)
    if (!item.classList.contains("open")) {
      item.classList.toggle("open");

      accordion__collapse.style.display = "block";
      let accHeight = accordion__collapse.clientHeight;
      console.log(accHeight.toString() + "px");

      setTimeout(() => {
        accordion__collapse.style.height = accHeight.toString() + "px";
        accordion__collapse.style.display = "";
      }, 1);

      accordion__collapse.classList = "accordion__collapse collapsing";

      setTimeout(() => {
        accordion__collapse.classList = "accordion__collapse open";
      }, 300);
    }
    // Click to close (i.e. has class `open`)
    else {
      item.classList.toggle("open");
      accordion__collapse.classList = "accordion__collapse collapsing";

      setTimeout(() => {
        accordion__collapse.style.height = "0px";
      }, 1);
      setTimeout(() => {
        accordion__collapse.classList = "accordion__collapse collapsed";
        accordion__collapse.style.height = "";
      }, 300);
    }
  });
});
