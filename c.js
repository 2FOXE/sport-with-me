$( document ).ready(function() {
    
    $("#animatebutton").click(function(){
        const element =  document.querySelector('.animatebutton');
        element.classList.add('animated', 'zoomInRight');
        setTimeout(function() {
          element.classList.remove('zoomInRight'); 
  },        1000); 
    });
      
     
});  