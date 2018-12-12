# Snow-Particles

Dom based snow particle animation class. Create snowfall in any dom element!

### Depends on GSAP

* [TweenMax](https://greensock.com/docs/TweenMax) 
* [Physics2D plugin](https://greensock.com/Physics2DPlugin) 


```
var snow = new Snow({ target:'anyDomElement', intensity:1, pause:true, img1:'img1.png', img2:'img2.png'});
```

### Target
pass a string representing a path to any block level DOM element. Default is "body"

### Intensity
Pass a whole integer between 1-3 to increase the number of snow particles. Default is 1.

### pause 
Boolean. True will pause animation when window loses focus. Default is false. You should probably set to true so you don't melt proples computers.

### img1 & img2
String - must be a valid path to image element.
