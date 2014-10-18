# jquery-citeify

a jQuery plugin that embeds [`<q>`](http://www.w3.org/TR/2012/WD-html5-20121025/the-q-element.html) elements that contain a `cite` attribute with a clickable link. Because it seemed necessary.

## usage

```html
<p>This is a <q>quotation</q> without a citation.</p>
<p><q cite="http://cite.com">But this is quotation w/ a citation</q></p>

<script src="path/to/jquery"></script>
<script src="path/to/jquery-citeify"></script>
<script>
$('p').citeify();
// will change the second to be:
// <p><q cite="http://cite.com"><a href="http://cite.com">But this is quotation w/ a citation</a></q></p>
</script>
```

## license
MIT