## Presentations

This is my personal presentations repository, and a simple presentation workflow/framework.

It uses [Grunt Livereload](https://github.com/gruntjs/grunt-contrib-livereload),
enabling you to see the changes made to your presentations immediately.

Presentations are based on the excellent [Reveal.js](https://github.com/hakimel/reveal.js).

## Usage

It is very simple to use this as a bootstrap for your own presentations! You must have [node.js](http://nodejs.org/) installed.

Simply clone the repository and install the [npm](https://github.com/isaacs/npm) depencies:

	git clone git://github.com/gadr90/presentations.git
	cd presentations
	npm install
    npm install -g grunt-cli

You're done! Now run grunt:

	grunt

And you can access your presentations under `localhost:9001/folder/index.html`
