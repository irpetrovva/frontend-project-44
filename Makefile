install:
	nmp ci
brain_games:
	node bin/brain_games.js
publish: 
	npm publish --dry-run
