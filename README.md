# sticky-menu
A fixed menu jQuery plugin that attaches itself to a chosen element.

## Demo
[plugins.getdans.info/sticky-menu](http://plugins.getdans.info/sticky-menu)

## Installation
Download from GitHub

### Requirements
jQuery

### Use
```html
<script>
    $(document).ready(function(){
        $('.section-link').stickyMenu();
    });
</script>
```
### Description

This simple plugin fixes a list to the window. You can attach sticky-menu to one or multiple elements. Those elements will be fixed to the bottom of the screen, spaced evenly. They are then attached to your chosen elements. When the elements come to view, the sticky element will follow it to the top of the page and stick there.

### Example

```html
<div class="menu">
    <a href="#section1" class="section-link">Section 1</a>
    <a href="#section2" class="section-link">Section 2</a>
    <a href="#section3" class="section-link">Section 3</a>
    <a href="#section4" class="section-link">Section 4</a>
    <a href="#section5" class="section-link">Section 5</a>
    <a href="#section6" class="section-link">Section 6</a>
    <a href="#section7" class="section-link">Section 7</a>
</div>
<section id="section1">
    <h2>Section 1</h2>
</section>
<section id="section2">
    <h2>Section 2</h2>
</section>
<section id="section3">
    <h2>Section 3</h2>
</section>
<section id="section4">
    <h2>Section 4</h2>
</section>
<section id="section5">
    <h2>Section 5</h2>
</section>
<section id="section6">
    <h2>Section 6</h2>
</section>
<section id="section7">
    <h2>Section 7</h2>
</section>

<script>
    $(document).ready(function(){
        $('.section-link').stickyMenu({
            top: 100,
            bottom: 20,
            left: 20,
            spaceBetween: 9,
            topOffset: 10,
            attachment: 'href'
        });
    });
</script>
```

### Options

Options         | Definition
--------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
`top`           | Distance from top of window for first sticky element.<br>`default: 0`
`bottom`        | Distance from bottom of window for last sticky element.<br>`default: 0`
`left`          | Distance from left of window for sticky elements.<br>`default: 0`
`right`         | Distance from right of window for sticky elements.<br>`default: 0`
`spaceBetween`  | Distance between sticky elements.<br>`default: 0`
`topOffset`     | Distance sticky element has from top of attached element when scrolled into view;
`attachment`    | Sticky element attribute that points to the attached element.<br>i.e.<br>`<a class="sticky-element" href="#cookie">cookie</a>`<br>`<div id="cookie">Attached Element</div>`<br>`attachment: 'href'`<br><br>`default: 'parent'`
