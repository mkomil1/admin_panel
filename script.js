
const body = document.querySelector("body");
          modeToggle = body.querySelector(".mode-toggle");
          sidebar = body.querySelector("nav");
          sidebartoggle = body.querySelector(".sidebar-toggle");
let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.toggle("dark")
}
let getStatus = localStorage.getItem("status");
if(getStatus && getStatus === "close"){
    sidebar.classList.toggle("close")
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark")
    }else{
        localStorage.setItem("mode", "light")

    }
})
sidebartoggle.addEventListener("click", () => {
        sidebar.classList.toggle("close")
        if(sidebar.classList.contains("close")){
            localStorage.setItem("status", "close")
        }else{
            localStorage.setItem("status", "open")
    
        }
})


/////////// products img script 
const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(
  ".image-preview__image"
);
const previewDefaultText = previewContainer.querySelector(
  ".image-preview__defaul_text"
);

inpFile.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";

    reader.addEventListener("load", function () {
      previewImage.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  } else {
    previewDefaultText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute("src", "");
  }
});


////file input icon
const form = document.querySelector(".bos-file")

form.addEventListener("click", () => {
  inpFile.click()
})