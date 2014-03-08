install:
	@npm install

install-dev:
	@npm install
	@cd node_modules/asimov.js && npm install

start:
	@node main.js

test:
	@node main.js --test

publish:
	@git tag "v$(shell node -e "var config = require('./package.json'); console.log(config.version);")"
	@git push --tags
	@git push heroku master

.PHONY: install start test publish