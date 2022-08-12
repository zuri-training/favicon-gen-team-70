const text = document.getElementById("text");
const font = document.getElementById("font");
const fontColor = document.getElementById("fontColor");
const textSize = document.getElementById("textSize");
const color = document.getElementById("Color");
const shape = document.getElementById("BckShape");
const up_btn = document.getElementById("up_btn");
const label = document.getElementById("label");
const canvass = document.getElementById("canvas");
const iconn = document.getElementById("icon");
const iconp = document.getElementById("iconp");
const logo_btn = document.getElementById('u_btn');
const dwn_btn = document.getElementById("dwn_btn");
const form = document.getElementById("change");

function customize() {
  iconp.innerHTML = text.value;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
}

font.addEventListener("change", () => {
  iconp.style.fontFamily = font.options[font.selectedIndex].text;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
fontColor.addEventListener("change", () => {
  iconp.style.color = fontColor.options[fontColor.selectedIndex].text;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
textSize.addEventListener("change", () => {
  iconp.style.fontSize = textSize.value + "px";
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
color.addEventListener("change", () => {
  canvass.style.background = color.options[color.selectedIndex].text;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
shape.addEventListener("change", () => {
  if (shape.selectedIndex == 0) {
    canvass.style.borderRadius = "0px";
  } else if (shape.selectedIndex == 1) {
    canvass.style.borderRadius = "72px";
  } else {
    canvass.style.borderRadius = "10px";
  }
  label.style.display = "none";
});

dwn_btn.onclick = function () {

    html2canvas(canvass).then((canvas) => {    
        const base64image = canvas.toDataURL("image/ico");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "favicon.ico");
        anchor.click();
        anchor.remove();
});
};

var loadFile = function(event) {
	var image = document.getElementById('icon');
	image.src = URL.createObjectURL(event.target.files[0]);
};

logo_btn.onclick = () => {
    label.style.display = 'none'
    iconp.style.display = 'none'
    canvass.style.background = 'transparent'
    canvass.style.border = '1px transparent'
    iconn.classList.add('icon')
    iconn.classList.remove('iconf')
    if(iconn.style.display = 'none'){
        iconn.style.display = 'block'
    }
}