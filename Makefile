install:
	@npm install

start:
	@node main.js

test:
	@node main.js --test

publish:
	@make test && make force-publish

force-publish:
	@git tag "v$(shell node -e "var config = require('./package.json'); console.log(config.version);")" && git push --tags && git push heroku master

.PHONY: install start test publish force-publish