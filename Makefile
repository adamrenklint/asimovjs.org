install:
	@npm install

install-dev:
	@npm install && npm install -g nodemon
	@cd node_modules/asimov.js && npm install

start:
	@node main.js

debug:
	@VERBOSE=true node main.js

open:
	@node main.js --open

test:
	@node main.js --test

test-watch:
	@nodemon main.js --test

publish:
	@make test && make force-publish

force-publish:
	@git tag "v$(shell node -e "var config = require('./package.json'); console.log(config.version);")" && git push --tags && git push heroku master

.PHONY: install install-dev start test test-watch publish force-publish