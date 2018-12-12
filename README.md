# Snow-Particles

Dom based snow particle animation class. Create festive snowfall in any dom element!

### Depends on GSAP

* [TweenMax](https://greensock.com/docs/TweenMax) 
* [Physics2D plugin](https://greensock.com/Physics2DPlugin) 

### Creating snow is easy! Just make a new Snow instance:

```
var snow = new Snow({ target:'anyDomElement', intensity:1, pause:true});
```

### There are a few optional parameters for customization.

#### Target 
```string``` : Pass a string representing a path to any block level DOM element. Default is ```"body"```

#### Intensity
```integer``` : Pass a whole number between 1-3. It just increase the number of snow particles. Default is 1.

#### pause 
```boolean``` : Setting ```true``` will pause animation when window loses focus. Default is ```false```. You should probably set to ```true``` so you don't melt proples computers.

#### img1 & img2
```string``` : If you want to use your own snowflakes just provide a valid path to some images like so ```img1:'img1.png'``` If not, there are a pair of default images ready to go in some fast & robust Amazon S3 servers.
