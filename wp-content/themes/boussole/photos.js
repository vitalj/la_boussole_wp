var body = document.body,
html = document.documentElement;
var photoActuelle = '';
var hauteur = body.offsetHeight;

var numeroPhotoVisible = 0;
var link = '';


var tableauPhotosVisible = new Array();
var photoVisible = document.querySelectorAll('.visible');

Rarrow = document.getElementById('Rarrow');
Larrow = document.getElementById('Larrow');

listBtn = document.querySelectorAll('.photo-type');

listBtn.forEach(element => {
    element.addEventListener('click', function(){
        
        cat = this.getAttribute('data-cat-type');

        allPhoto = document.querySelectorAll('.photo');

        
        allPhoto.forEach( photo => {
            if(cat === 'all'){
                
                console.log('cat egal all');
                tableauPhotosVisible = [];

                photo.classList.remove('hidden-photo');
                photo.classList.add('visible');

                photoVisible = document.querySelectorAll('.visible');
       
      
                
                

                photoVisible.forEach(urlphoto =>{
           
                tableauPhotosVisible.push({'id':urlphoto.getAttribute('data-index'),'src':urlphoto.getAttribute('data-src')});
                    
            
           
            })}
            
            
            
                        
            else{
                if( photo.getAttribute('data-cat') === cat ){
                    tableauPhotosVisible = [];
                    photo.classList.remove('hidden-photo');
                    photo.classList.add('visible');

                photoVisible = document.querySelectorAll('.visible');
       
      
                
                

                photoVisible.forEach(urlphoto =>{
           
                tableauPhotosVisible.push({'id':urlphoto.getAttribute('data-index'),'src':urlphoto.getAttribute('data-src')});
                    
            
           
            })}
                    
                    
                else{
                    tableauPhotosVisible = [];
                    photo.classList.add('hidden-photo');
                    photo.classList.remove('visible');
                    photoVisible = document.querySelectorAll('.visible');
  
                photoVisible.forEach(urlphoto =>{
           
                tableauPhotosVisible.push({'id':urlphoto.getAttribute('data-index'),'src':urlphoto.getAttribute('data-src')});
                    
            })
                }
            }
           
        })
       
    });
});



listBtn = document.querySelectorAll('.video-type');

listBtn.forEach(element => {
    element.addEventListener('click', function(){
        
        cat = this.getAttribute('data-cat-type');
       
        allVideo = document.querySelectorAll('.video');
    
        allVideo.forEach( video => {
            if(cat === 'all'){
                
                video.classList.remove('hidden-photo');
                
            }else{
                if( video.getAttribute('data-cat-type') === cat ){
                    video.classList.remove('hidden-photo');
                }else{
                    video.classList.add('hidden-photo');
                }
            }
           
        })

    });
});


listPhoto = document.querySelectorAll('.tof');

listPhoto.forEach(element => {
    element.addEventListener('click', function(){
        photoVisible = document.querySelectorAll('.visible');
       
      
        tableauPhotosVisible = [];

        photoVisible.forEach(urlphoto =>{
           
            tableauPhotosVisible.push({'id':urlphoto.getAttribute('data-index'),'src':urlphoto.getAttribute('data-src')});
            
            
           
        })
       ;
        
        link = this.getAttribute('data-src');
        numeroPhotoVisible = this.getAttribute('data-index');
        document.querySelector("#Rarrow").classList.remove('hidden-photo');
        document.querySelector("#Larrow").classList.remove('hidden-photo');
        document.getElementById('full-screen-photo').src = link;

        document.getElementById('full-screen-photo').style.display = 'flex';
        document.getElementById('photo-up').style.visibility = 'visible';
        index = 0;

        tableauPhotosVisible.forEach(result => {
            if (result.id == numeroPhotoVisible){
                
                if( tableauPhotosVisible.length == 1 ){
                    document.querySelector("#Rarrow").classList.add('hidden-photo');
                    document.querySelector("#Larrow").classList.add('hidden-photo');
                }else{
                    
                    if( index == 0 ){
                        document.querySelector("#Rarrow").classList.remove('hidden-photo');
                        document.querySelector("#Larrow").classList.add('hidden-photo');
                    }else if( index == ( tableauPhotosVisible.length - 1 ) ){
                        document.querySelector("#Rarrow").classList.add('hidden-photo');
                        document.querySelector("#Larrow").classList.remove('hidden-photo');
                    }else{
                        document.querySelector("#Rarrow").classList.remove('hidden-photo');
                        document.querySelector("#Larrow").classList.remove('hidden-photo');
                    }
                }
               
                 return;

            }
            index++;
            
        });
    });
    
});




Larrow.addEventListener('click',function(){

    index = 0;
    
       
        tableauPhotosVisible.forEach(result => {
            
            
            if (result.id == numeroPhotoVisible){
                console.log('result.id EGAL NUMERO PHOTO VISIBLE');
                
                console.log(tableauPhotosVisible[index - 1].id);
                document.getElementById('full-screen-photo').src = tableauPhotosVisible[index - 1].src;
                
                numeroPhotoVisible = (tableauPhotosVisible[index - 1].id);
            }
            if (numeroPhotoVisible <= 1){
                document.querySelector('#Larrow').classList.add('hidden-photo');
                document.querySelector('#Rarrow').classList.remove('hidden-photo');
            }

            if (numeroPhotoVisible >= tableauPhotosVisible.length){
                document.querySelector('#Rarrow').classList.add('hidden-photo');
                document.querySelector('#Larrow').classList.remove('hidden-photo');
            }
             else {
                
                document.querySelector('#Rarrow').classList.remove('hidden-photo');
             }
    index++;
            
        });
});

Rarrow.addEventListener('click',function(e){
        
        
        index = 0;
    
        tableauPhotosVisible.forEach(result => {
            if ( result.id * 1 == numeroPhotoVisible * 1 ){

            let choice = index + 1;
            document.getElementById('full-screen-photo').src = tableauPhotosVisible[ choice ].src;
            numeroPhotoVisible =  tableauPhotosVisible[ choice ].id * 1 ;
            
            
            if (numeroPhotoVisible >= tableauPhotosVisible.length){
                document.querySelector('#Rarrow').classList.add('hidden-photo');
                document.querySelector('#Larrow').classList.remove('hidden-photo');
             }
             else {
                
                document.querySelector('#Larrow').classList.remove('hidden-photo');
            }

            return;
        }
            
            index++;
            
        });
  
});

var closebutton = document.getElementById('closeBtn');

closebutton.addEventListener('click', function(){
    document.getElementById('full-screen-photo').style.display = 'none';
        document.getElementById('photo-up').style.visibility = 'hidden';
       
});
