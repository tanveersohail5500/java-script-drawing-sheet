let canva = document.getElementById('canva')
let ctx = canva.getContext('2d')
 let color = document.getElementById('color')

 color.addEventListener('change',(color) =>{
    console.log(color.value)
 })
 let isMouseClicked = false;

 canva.addEventListener('mousedown',() =>{
    console.log('i Am down')
    ctx . beginPath()
    isMouseClicked = true
 })

 canva.addEventListener('mouseup',() =>{
    isMouseClicked = false
    console.log('i Am Up')
 })
 canva.addEventListener('mousemove',(iAmDownMoving) =>{
    if(isMouseClicked) {
        console.log('i Am Down Moving')

        ctx . lineTo(iAmDownMoving.offsetX , iAmDownMoving.offsetY);
        ctx . moveTo(iAmDownMoving .offsetX , iAmDownMoving.offsetY);
     
        ctx . stroke();
        ctx . lineCap = 'round'
        ctx . lineWidth = 2
        ctx . strokeStyle = color.value

    }
    else{
        isMouseClicked = false;
        console.log ('i Am Up Moving')
    }
});

document.getElementById('downloadbtn').addEventListener('click', () => {
    downloadCanvas();
  });
  
 
 function downloadCanvas() {
    let dataURL = canva.toDataURL();
    let link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canva-image';
    link.click();}
    console.log('click for download')