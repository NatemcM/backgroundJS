# backgroundJS
We're programmers, we're lazy! So instead of writing out inline CSS why not just define some data-attributes in your HTML. backgroundJS is a super simple jQuery plugin (for now, a standalone JS version is in the works) that allows you to use HTML5 data attributes to define a background image.

## Usage 
```HTML 
<div class="box" data-src="/path/to/img.png" data-height="20vh" data-attachment="fixed"></div>
```

```javascript
	$('.box').dataBg();
```

### Options 
- **data-src:** path/to/image.jpg
- **data-height:** [default: `auto`] Height of the elm i.e. 200px / 50% / 20em
- **data-attachment:** [default: `scroll`] CSS attachment i.e. fixed / scroll
- **data-position:** [default: `center`]Takes css background positions i.e. top / center / bottom / 200px etc
- **data-repeat:** [default: `auto`] Background repeat

## Plugin options 
Already have a plugin that uses the `data-src` attribute? No problem, just tell the plugin you want to use a different name. 

```javascript
	$('.elm').dataBg({
    	dataSrc: 'url',
        dataAttachment: 'attach',
        dataHeight: 'y-axis',
        dataPosition: 'pos',
        dataSize: 'bigness',
        dataRepeat: 'do-over'
    });
```

```HTML
 	<div class="elm" 
    	data-url="/path/to/img.png" 
        data-attach="scroll" 
        data-y-axis="200px" 
        data-pos="bottom" 
        data-bigness="cover"
        data-do-over="repeat">
    </div>
```

## Roadmap 
- Lazy loading 
- Stand alone JS version
- CSS Overrides	