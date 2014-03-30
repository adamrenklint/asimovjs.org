install:
	@echo "\n[make] Installing project dependencies...\n";
	@npm install --quiet && npm install --quiet -g mocha istanbul

start:
	@node main.js

debug:
	@echo "\n[make] Starting project in debug mode...\n"
	@VERBOSE=true node main.js

test:
	@echo "\n[make] Running all tests...\n"
	@mocha tests/*/**.test.js -R dot

test-verbose:
	@echo "\n[make] Running all tests...\n"
	@mocha tests/*/**.test.js -R spec

coverage:
	@make generate-coverage && make view-coverage || make view-coverage

generate-coverage:
	@echo "\n[make] Generating coverage report using Istanbul...\n"
	@istanbul cover _mocha -- tests/*/**.test.js -R dot

view-coverage:
	@open coverage/lcov-report/index.html

publish:
	@make test && make force-publish

force-publish:
	@echo "\n[make] Publishing version $(shell node -e "var config = require('./package.json'); console.log(config.version);") to Heroku...\n"
	@git tag "v$(shell node -e "var config = require('./package.json'); console.log(config.version);")" && git push --tags && git push heroku master

.PHONY: install install-dev start debug test test-verbose coverage generate-coverage view-coverage publish force-publish