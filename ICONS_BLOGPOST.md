# Tips for your Site's Iconography

## Choosing your Iconongraphy Approach

At the beginning of every web app's development there is the question of iconography. Which icon library do we use? There's lots to choose from: [Font Awesome](https://fontawesome.com/), [Fort Awesome](https://fortawesome.com/), [The Noun Project](https://thenounproject.com/), [Material Desion Icons](https://material.io/tools/icons/), [IcoMoon](https://icomoon.io/). Generally this choice is up to the designer (if you have one), but as a developer your choice is going to be between using SVG's as icons or Icon fonts. There are a number of pros and cons to SVGs vs Icon fonts that you can find better articles on such as [this one](https://css-tricks.com/icon-fonts-vs-svg/). Here's my quick comparison:

SVG Pros:
- SVGs are generally sharper than fonts.
- You are able to specifically pick out and download only the SVGs you want. 
- Aligning SVGs is simpler and more predictable because they aren't susceptible to wierd font rules such as line height which can add unwanted white space.

SVG Cons:
- Coloring external SVGs can't be done in CSS in a way that's supported in all browsers.

Icon Font Pros:
- Can be colored easily by setting the containing elements 'color' property.

Icon Font Cons:
- While the font is loading up, or if it fails to load, you will see squares like this &#9633; or the ligature of the icon. Eg, you will see the text 'get_app' where the ![get_app icon](https://material.io/tools/icons/static/icons/baseline-get_app-24px.svg) icon should appear.
- Fonts Icons can be trickier to align due to font rules applied to them (mentioned above).
- More difficult to hide from screen readers.

With that brief comparison, it's up to you to decide but I'm going with SVG icons, at least for the rest of this article ;)

## Inline SVGs vs External SVGs
Inline SVGs, where the SVG definition is part of the [html document](https://css-tricks.com/using-svg/#article-header-id-7), vs External SVGs is the next choice to make.

Mostly this choice comes down to your school of thought on iconography: Is iconography part of the style/theme of your web application, aimed to be fully controlled by CSS? Or is iconography a part of the web app's makeup, meaning your html has additional markup just to support icons?

If your school of thought is the former, then congratulations you've made the right choice! Or at least you have from a purists point of view (you know, like those people who use to say using tables for layouts was bad. Even before we had real solutions like Flexbox or even Bootstrap to help us).

Inline SVGs are still great in the sense that you get the flexibility to use CSS to select and color their elements. Or that they can be animated, but a lot of iconography on the web today is static and monochrome. If you don't need multicolored, animated icons then you don't need to pollute your HTML with extra inline SVG markup and blur the lines between theme and content structure.

## Working with External SVG Icons
Generally the best way to work with SVG Icons is to load them in as background images. This way screen readers will avoid them and we don't need to add extra [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes to say that they're presentation only.

Why are icons presentation only you say? Well an icon itself doesn't have any meaning to a screenreader. It's either something that's meant to convey meaning of an operation to a sighted user without having to clog the screen with ugly text. So it's useful to have on a button for example, but that button should already have ARIA attributes to describe its meaning. The other purpose of an icon is just decoration, again there's no need have an extra element here we have to add ARIA attributes to.

<!-- Something here about inlining and webpack? -->

<!-- Something here about setting up a base class? -->

### SVG Icon as a Background Image

For things like buttons that we're adding SVG icons to, we'll start by setting up a reusable mixin that takes as an argument the path to the icon, and the size of the icon (assuming square dimensions). This mixin will cover all of the properties we'll typically apply to every icon:

```Sass
@mixin createIconStyle($path-to-svg, $icon-size) {
  background-image: url('~/../src/#{$path-to-svg}');
  background-repeat: no-repeat;
  background-size: $icon-size auto;
  background-position: center;
  height: $icon-size;
  width: $icon-size;
}
```

Then we can setup a specific css class for an icon using that mixin:

```Sass
.download-icon {
  @include createIconStyle('/assets/baseline-get_app-24px.svg', 2rem)
}
```

*Note: My example is using [webpack](https://webpack.js.org/) which is why it has the wierd '~/..' prepended to the icon path.*

Now we're free to add this style class to a download button:

```HTML
<button class="download-icon"></button>
```

<!-- Add image example of Button with download icon -->

#### Data URLs for Icons
[Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are a nice way to bundle your CSS and icons together into the same HTTP request, though there are some good and some vague reasons why [this is bad](https://github.com/angular/angular-cli/issues/13355#issuecomment-451089973). If handled properly, this can be a good thing. Especially if you're not using HTTP/2. The main concern is to avoid duplicate data URLs.

With Sass we can avoid this duplication pretty easily with inheritance. Let's say we want to make a `.download-icon-large` which is twice as big as the original, then we just inherit the original and override the properties. It's possible to make a mixin of this if it's a common enough occurence:

```Sass
@mixin overrideIconSize($extends-class, $icon-size) {
  @extend .#{$extends-class};
  background-size: $icon-size auto;
  height: $icon-size;
  width: $icon-size;
}

.download-icon-large {
  @include overrideIconSize(download-icon, 3rem);
}
```

<!-- Add image example of large icon -->

### SVG Icon as a Side Image
A popular use for icons to put them beside some text for a link or a button to give a bit more of a hint to what will happen when it's clicked. Some examples might include a down arrow beside a menu item to hint that it will expand into a submenu. Or a download icon beside the link to a file to hint that it will download instead of open.

These are situations where it's common for developers to add extra markup, usually in the form of an `<i>` tag or worse an `<img>` tag. Yuck! Let's keep it all in the CSS please! Remember icons are presentation only, no need for extra markup in our content. That's also [not the purpose of an `<i>` tag](https://www.w3schools.com/tags/tag_i.asp) and `<img>` tags download images regardless of visibility which is inefficient, and looks bad if the download fails.

### Coloring External SVG Icons