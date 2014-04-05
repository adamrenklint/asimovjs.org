publish:
	@make test && make force-publish

force-publish:
	@echo "\n[make] Publishing version $(shell node -e "var config = require('./package.json'); console.log(config.version);") to Heroku...\n"
	@git tag "v$(shell node -e "var config = require('./package.json'); console.log(config.version);")" && git push --tags && git push heroku master

.PHONY: install install-dev start debug test test-verbose coverage generate-coverage view-coverage publish force-publish