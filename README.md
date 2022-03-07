<h1 align="center">MTW-CANVAS-DISKS</h1>

<table>
<td align="center">
<div align="right"><a href="https://github.com/MyThemeWay/mtw-canvas-disks" title="Stars & Forks of Disks Header" target="_blank"> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/star-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/stars/MyThemeWay/mtw-canvas-disks?label="/></img> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/code-branch-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/forks/MyThemeWay/mtw-canvas-disks?label="/></img></a></div>

https://user-images.githubusercontent.com/16251546/146669386-89b3ad17-6424-47a3-9f23-f779eeb2db2d.mp4

</td>
</table>

### Note:
> * Preview shows the [boilerplate-website](#directory-boilerplate-website "Check it out") usage
> * Fragment shader is based on [CoordSys - intersection](https://www.shadertoy.com/view/lsfGDB "Check it out") [License: [MIT](https://www.shadertoy.com/view/lsfGDB "Go there"); Copyright: ©️ 2013 Inigo Quilez; Changes: made]

## | Usage

E.&nbsp;g. as an animated 3D background

### Directory: [boilerplate-canvas](https://github.com/MyThemeWay/mtw-canvas-disks/tree/main/boilerplate-canvas "Check it out")

In this directory, you will find the files for the pure background. You can quickly and easily adapt the GLSLX shader files with [mtw-boilerplate-canvas](https://github.com/mythemeway/mtw-boilerplate-canvas "Check it out") or embed the already minimized canvas bundles directly on a website.

#### Embed via [jsDelivr](https://github.com/jsdelivr/jsdelivr "Check it out")

```html
<script src="https://cdn.jsdelivr.net/gh/mythemeway/mtw-canvas-disks/boilerplate-canvas/twgl/canvas.bundle.min.js"></script>
<canvas id="mtw-canvas" style="width:100vw;height:100vh;left:0;top:0;position:fixed;"></canvas>
```

#### Self Hosting

```html
<script src="./canvas.bundle.min.js"></script>
<canvas id="mtw-canvas" style="width:100vw;height:100vh;left:0;top:0;position:fixed;"></canvas>
```

> <b>Note</b>: WebGL canvases can make your CPU sweat. For the environment, stop the requestAnimationFrame loop when the canvas isn't visible <b>#GreenCoding</b>. See my [website-boilerplate](https://github.com/MyThemeWay/Dark-Particle/blob/master/src/canvas/mtw-canvas-disks/main.js "Check it out") for an example.

#### <a href="https://github.com/greggman/twgl.js" title="Check it out" target="_blank">TWGL</a> or <a href="https://github.com/mrdoob/three.js" title="Check it out" target="_blank">three.js</a>

There are two types of minimized bundles available. One contains <a href="https://github.com/greggman/twgl.js" title="Check it out" target="_blank">TWGL</a> and one contains <a href="https://github.com/mrdoob/three.js" title="Check it out" target="_blank">three.js</a> instead. I recommend using the TWGL bundle because it is much smaller as you can see in the table below. 

<table>
<tr>
	<th>Bundle Sizes</th>
	<th><a href="https://github.com/greggman/twgl.js" title="Check it out" target="_blank">TWGL</a></th>
	<th><a href="https://github.com/mrdoob/three.js" title="Check it out" target="_blank">three.js</a></th>
</tr>
<tr align="center">
	<th><a href="https://github.com/MyThemeWay/mtw-canvas-disks" title="Check it out" target="_blank">disks</a></th>
	<td>
		<a href="https://github.com/MyThemeWay/mtw-canvas-disks/tree/main/boilerplate-canvas/twgl/canvas.bundle.min.js" title="Get it" target="_blank"><img src="https://img.shields.io/github/size/mythemeway/mtw-canvas-disks/boilerplate-canvas/twgl/canvas.bundle.min.js?label=&color=brightgreen" /></a>
	</td>
	<td>
		<a href="https://github.com/MyThemeWay/mtw-canvas-disks/tree/main/boilerplate-canvas/three/canvas.bundle.min.js" title="Get it" target="_blank"><img src="https://img.shields.io/github/size/mythemeway/mtw-canvas-disks/boilerplate-canvas/three/canvas.bundle.min.js?label=&color=darkred" /></a>
	</td>
</tr>
</table>

> <b>Note</b>: Badges are clickable and linked to the corresponding minimized bundle.

### Directory: [boilerplate-website](https://github.com/MyThemeWay/mtw-canvas-disks/tree/main/boilerplate-website "Check it out")

In this directory, you will find the files for the exchangeable WebGL canvas headers of the [MyThemeWay](https://github.com/MyThemeWay "Go there") Website-Boilerplates:

<a href="https://github.com/mythemeway" title="Explore this" target="_blank"><img src="https://i.redd.it/txxr1z113ib61.gif" /></a>

#### <b>Explore</b>: [Demo](https://mythemeway.github.io/mtw-canvas-disks/ "Check it out") with Website-Boilerplate [Dark-Particle v4.0](https://github.com/MyThemeWay/Dark-Particle "Check it out")

## | Other WebGL Canvases

<table>
<td align="center" width="500px">
<div align="right"><a href="https://github.com/MyThemeWay/mtw-canvas-malachite" title="Stars & Forks of Malachite Header" target="_blank"> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/star-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/stars/MyThemeWay/mtw-canvas-malachite?label="/></img> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/code-branch-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/forks/MyThemeWay/mtw-canvas-malachite?label="/></img></a></div>

https://user-images.githubusercontent.com/16251546/146669429-ae1dc399-cd7a-4c6e-9135-2c8a6e298df7.mp4

<div><a href="https://github.com/MyThemeWay/mtw-canvas-malachite" title="Explore Malachite Header" target="_blank"><img height="30" src="https://raw.githubusercontent.com/sitdisch/cloud/master/badges/particle/Explore-2A2E30.svg"/></img></div>

</td>
</table>

<div align="right">
<table>
<td align="center" width="500px">
<div align="right"><a href="https://github.com/MyThemeWay/mtw-canvas-spiral" title="Stars & Forks of Spiral Header" target="_blank"> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/star-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/stars/MyThemeWay/mtw-canvas-spiral?label="/></img> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/code-branch-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/forks/MyThemeWay/mtw-canvas-spiral?label="/></img></a></div>

https://user-images.githubusercontent.com/16251546/146669436-dff614aa-2ce5-46cc-8163-db73b2c2570e.mp4

<div><a href="https://github.com/MyThemeWay/mtw-canvas-spiral" title="Explore Spiral Header" target="_blank"><img height="30" src="https://raw.githubusercontent.com/sitdisch/cloud/master/badges/particle/Explore-grey.svg"/></img></div>

</td>
</table>
</div>

<table>
<td align="center" width="500px">
<div align="right"><a href="https://github.com/MyThemeWay/mtw-canvas-blacksea" title="Stars & Forks of Blacksea Header" target="_blank"> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/star-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/stars/MyThemeWay/mtw-canvas-blacksea?label="/></img> <img src="https://raw.githubusercontent.com/sitdisch/cloud/master/3parties/code-branch-solid.svg"/></img> <img height="17" src="https://img.shields.io/github/forks/MyThemeWay/mtw-canvas-blacksea?label="/></img></a></div>

https://user-images.githubusercontent.com/16251546/146669441-251d9545-0164-442b-8de4-3a6148481e20.mp4

<div><a href="https://github.com/MyThemeWay/mtw-canvas-blacksea" title="Explore Blacksea Header" target="_blank"><img height="30" src="https://raw.githubusercontent.com/sitdisch/cloud/master/badges/particle/Explore-2A2E30.svg"/></img></div>

</td>
</table>

## | Appendix
### Note on protected brand names and logos
> * The use of protected brand names, trade names, utility models and brand logos on this website does not constitute an infringement of copyright; rather, it serves as an illustrative note. Even if this is not marked as such at the respective points, the corresponding legal provisions always apply.
> * The brand names and logos used are the property of their respective owners and are subject to their copyright provisions.
> * This offer is in no way related to the legal entities of the protected brand names and logos used.

### Note on liability for links
> * This README contains links to external third-party websites. The README operator has no influence on the content of these sites. Therefore, he cannot assume any liability. Instead, the respective provider is always responsible for the content.
> * The linked pages were checked for possible legal violations at the time of linking and illegal content wasn't discernible. A permanent control of the linked pages is unreasonable without concrete evidence of an infringement. However, if the README operator becomes aware of such a violation, he will act immediately. 

### Readme uses
> * [star-solid.svg](https://fontawesome.com/v5.15/icons/star?style=solid "Check it out") & [code-branch-solid.svg](https://fontawesome.com/v5.15/icons/code-branch?style=solid "Check it out") [License: [CC&nbsp;BY&nbsp;4.0](https://fontawesome.com/license/free "Check it out"); Copyright: ©️  Fonticons, Inc.; Changes: made]
> * [Shields.io](https://github.com/badges/shields "Check it out") [License: [CC0&nbsp;1.0](https://github.com/badges/shields/blob/master/LICENSE "Go there")]
