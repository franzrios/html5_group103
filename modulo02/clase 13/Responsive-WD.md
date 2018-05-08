# Responsive Web Design
- Viewport Meta (HTML)
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- Picture Tag (HTML)
```
<picture>
  <source srcset="img_smallflower.jpg"
  	media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" 
  	media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>
```

- MediaQueries (CSS)
```
@media screen and (max-width:600px) {
	.selector1{
		color: red;
	}
}
```