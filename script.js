

function getPhotos(command) 
{  
    photowf = document.getElementById('warframe')
    phototf = document.getElementById('tf2')
    photoGithub = document.getElementById('github')
    photoVolley = document.getElementById('volleyball')
    photoBasket = document.getElementById('basketball')
    myGithub = document.getElementById('myGithub')

    if(command == 'gaming')
    {   
        displayPhotos(phototf)
        displayPhotos(photowf)
        closePhotos(command)
    }
    else if(command == 'programming')
    {
        displayPhotos(photoGithub)
        displayPhotos(myGithub)
        closePhotos(command)
    }
    else if(command == 'sport')
    {       
        displayPhotos(photoVolley)
        displayPhotos(photoBasket)
        closePhotos(command)
    }
}   
function displayPhotos(photo)
{
    if(photo.style.display == 'none')
     photo.style.display = 'block'
    else
     photo.style.display = 'none'
    
}

function closePhotos(command)
{  
    photowf = document.getElementById('warframe')
    phototf = document.getElementById('tf2')
    photoGithub = document.getElementById('github')
    photoVolley = document.getElementById('volleyball')
    photoBasket = document.getElementById('basketball')
    myGithub = document.getElementById('myGithub')

    if(command == 'gaming')
    {
        photoGithub.style.display = 'none'
        photoVolley.style.display = 'none'
        photoBasket.style.display = 'none'
        myGithub.style.display = 'none'
    }
    else if(command == 'programming')
    {
        photowf.style.display = 'none'
        phototf.style.display = 'none'
        photoBasket.style.display = 'none'
        photoVolley.style.display = 'none'
    }
    else if(command == 'sport')
    {
        photowf.style.display = 'none'
        phototf.style.display = 'none'
        photoGithub.style.display = 'none'
        myGithub.style.display = 'none'
    }

}
