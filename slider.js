var i=0;
var images=['Image/s1.png','Image/s2.png','Image/s3.png'];

var time =2000;

function slideImg() 
{
	document.slider.src=images[i];

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
