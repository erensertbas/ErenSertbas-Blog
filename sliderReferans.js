var i=0;
var images=['Image/1.png','Image/2.png','Image/3.png','Image/4.png','Image/5.png','Image/6.png'];

var time =1000;

function slideImg() 
{
	document.sliderRef.src=images[i];

	if (i<images.length-1)
	 {
		i++;
     }
     else
     {
     	i=0;
     }

   setTimeout("slideImg()",time);

}

window.onload=slideImg;
