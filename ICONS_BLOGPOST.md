# Tips for your Site's Iconography

## Choosing your Iconongraphy Approach

At the beginning of every web app there is the question of iconography. Which icon library do we use? There's lots to choose from: [Font Awesome](https://fontawesome.com/), [Fort Awesome](https://fortawesome.com/), [The Noun Project](https://thenounproject.com/), [Material Desion Icons](https://material.io/tools/icons/), [IcoMoon](https://icomoon.io/). There are lots to choose from. Generally this choice is up to the designer (if you have one), but as a developer your choice is going to be between using SVG's as icons or Icon fonts. There are a number of pros and cons to SVGs vs Icon fonts that you can find better articles on such as [this one](https://css-tricks.com/icon-fonts-vs-svg/). Here's my quick comparison:

SVG Pros:
- SVGs are generally sharper than fonts.
- You are able to specifically pick out and download only the SVGs you want. 
- Aligning SVGs is simpler and more predictable because they aren't susceptible to wierd font rules such as line height which can add unwanted white space.

SVG Cons:
- Coloring external SVGs can't be done in CSS in a way that's supported in all browsers.

Font Icons Pros:
- Can be colored easily by setting the containing elements 'color' property.

Font Icons Cons:
- While the font is loading up, or if it fails to load, you will see squares like this &#9633; or the ligature of the icon. Eg, you will see the text 'get_app' where the ![get_app icon](https://material.io/tools/icons/static/icons/baseline-get_app-24px.svg) icon should appear.
- Fonts Icons can be trickier to align due to font rules applied to them (mentioned above).
- More difficult to hide from screen readers.

With that brief comparison, it's up to you to decide but I'm going with SVG icons, at least for the rest of this article ;)

## Inline SVGs vs External SVGs
Inline SVGs, where the SVG definition is part of the [html document](https://css-tricks.com/using-svg/#article-header-id-7), vs External SVGs is the next choice to make.

Mostly this choice comes down to your school of thought on iconography: Is iconography part of the style/theme of your web application, aimed to be fully controlled by CSS?Or is iconography a part of the web app's makeup, your html is structured to support icons?

If your school of thought is the former, then congratulations you've made the right choice!

<!-- 
Inline SVGs are great in the sense that you get the flexibility to use CSS to select and color their elements. -->


## Working with External SVG Icons

### SVG Icon as a Background Image

### SVG Icon as a Side Image

### Coloring External SVG Icons