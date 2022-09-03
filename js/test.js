function setcolor(self) {
    if(self.value==='night')  {
    document.querySelector('body').style.backgroundColor='black'; 
    document.querySelector('body').style.color='white';
    self.value ='day';
    }
     else {
        
        self.value ='night';
        document.querySelector('body').style.backgroundColor='white'; 
        document.querySelector('body').style.color='black';
    }
}