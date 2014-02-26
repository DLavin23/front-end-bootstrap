##Shame File - via <a href="http://csswizardry.com/2013/04/shame-css/">Harry Roberts & Chris Coyier</a>

The idea of a shame file is a create a specific place/stylesheet specifically reserved for quick fixes, hacks, and/or questionable css code we will inevitablly write in order to meet tight deadlines. We are all forced to write shameful code, this is not meant to shame developers, rather it is meant to make the team aware of hacky code that we'll inevitably have to write and help us control it.

Here's why:

1. You make them stick out like a sore thumb
2. You keep your ‘main’ codebase clean
3. You make developers aware that their hacks are made very visible
4. You make them easier to isolate and fix.
5. $ git blame shame.css

###The Rules
1. If it’s a hack, it goes in `shame.css`.
2. Document all hacks fully
	a. What part of the code base does it relate to?
	b. Why was this needed?
	c. How does this fix it?
	d. How might you fix it properly, given more time?
3. Do not blame the developer; if they explained why they had to do it then their reasons are probably valid.
4. Try and clean up `shame.css` when you have down time.
	a. even better, get a tech debt story in asana and actually get time to resolve it.

###Example
```css
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a{}`) which trumps the
 * nav selectors (`.site-nav a{}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a{
    color:#BADA55!important;
}
```
