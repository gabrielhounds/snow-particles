# Snow-Particles

Dom based snow particle animation class. Create festive snowfall inside any element you want! Anytime of year! Climate change is no concern! You can be indoors or outdoors.

The goal was to create a responsive but lightweight reusable DOM based particle system for snowfall with an emphasis on depth with parallax motion and simulated depth of field blur. Since this is DOM based, as opposed to canvas or webGL, you are going to inject several hundred ```<div>``` elements into your document. This may not be appropriate for your project. 

Here's an example in [Sparkfow](https://bit.ly/2RITRb9)  

### Depends on GSAP

* [TweenMax](https://greensock.com/docs/TweenMax) 
* [Physics2D plugin](https://greensock.com/Physics2DPlugin) [the minified file includes the Physics2D plugin]

### Making snow is easy - just create a new Snow instance:

```
var snow = new Snow({ target:'anyDomElement', intensity:1, pause:true});
```

### There are a few optional parameters for customization. 

#### target 
```string``` : Pass a string representing a path to any block level DOM element. Default is ```"body"```

#### intensity
```integer``` : Pass a whole number between 1-3 to increase the number of snow particles. Default is 1.

#### pause 
```boolean``` : Setting ```true``` will pause animation when window loses focus. Default is ```false```. You should probably set to ```true``` so you don't melt proples computers.

#### img1 & img2
```string``` : If you want to use your own snowflakes just provide a valid path to up to two images like ```img1:'img1.png'``` If not, there is a pair of default images all ready to go in some fast & robust Amazon S3 servers. 
