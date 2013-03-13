## Presentations

This is my personal presentations repository, and a simple presentation workflow/framework.

It uses [Grunt Livereload](https://github.com/gruntjs/grunt-contrib-livereload),
enabling you to see the changes made to your presentations immediately.

Presentations are based on the excellent [Reveal.js](https://github.com/hakimel/reveal.js).

## Usage

It is very simple to use this as a bootstrap for your own presentations!

Simply clone the repository:

	git clone git://github.com/gadr90/presentations.git

And install the [npm](https://github.com/isaacs/npm) depencies:

	npm install

You're done! Now run grunt:

	grunt

And you can access your presentations under `localhost:9001/folder/index.html`

## Structure

	css/
		css files and fonts

	lib/
		all reveal files, dependencies and plugins

	other-folders/
		Presentations!

**Note**: Reveal.js `@imports` Google's web fonts for ease of use. However, for quicker reloading and
comfortable offline development, I have downloaded my preferred fonts to the css folder and created a custom
`fonts.css`. To do so, simply follow the links on the `@imports` on Reveals themes and change the urls on the css files.