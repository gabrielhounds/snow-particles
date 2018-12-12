# snow-particles

Dom based snow particle animation class. 

Snow-particles depends on GSAP [TweenMax](https://greensock.com/docs/TweenMax) and [Physics2D plugin](https://greensock.com/Physics2DPlugin)

Create snowfall in any dom element 

```
var snow = new Snow({ target:'anyDomElement', intensity:1, pause:true, img1:'img1.png', img2:'img2.png'});
```

### Target
pass a string representing a path to any block level DOM element. Default is "body"

### Intensity
Pass a number 1-3. Default is 1.

### pause 
Boolean. Setting true will pause animation when window loses focus

### img1 & img2
Specify custom images.
