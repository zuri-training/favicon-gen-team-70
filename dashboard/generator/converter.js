const text = document.getElementsByClassName('text');
const font = document.getElementsByClassName('font');
const fontColor = document.getElementsByClassName('fontColor');
const textSize = document.getElementsByClassName('textSize');
const color = document.getElementsByClassName('Color');
const logoColor = document.getElementById('colors')
const shape = document.getElementsByClassName('shape');
const up_btn = document.getElementById('up_btn');
const sel_btn = document.getElementById('up_btn');
const label = document.getElementById('label');
const canvas = document.getElementById('canvas');
const icon = document.getElementById('icon');
const iconp = document.getElementById('iconp');
const dwn_btn = document.getElementById('dwn_btn');
const form = document.getElementsByClassName('change');





function customize(){
    iconp.textContent = text.value
    iconp.style.fontFamily = font.selectedIndex
    iconp.style.color = fontColor.selectedIndex
    iconp.style.fontSize = textSize.value + 'px'
    canvas.style.background = color.value


    if(shape.selectedIndex == 0  ){
        canvas.style.borderRadius = '0px';
    }else if(shape.selectedIndex == 1){
        canvas.style.borderRadius = '152px';
    }else {
        canvas.style.borderRadius = '10px';
    }
    label.remove()
}