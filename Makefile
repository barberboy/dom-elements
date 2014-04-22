PHANTOMJS:=$(shell which phantomjs)
UGLIFY:=./node_modules/uglify-js/bin/uglifyjs
QUNITJS:=./node_modules/qunit-tap/sample/js/run_qunit.js

LIB:=lib
TEST:=test
SRC:=src

build: lib/dom-elements.js lib/dom-elements.min.js

$(LIB)/%.js: $(SRC)/%.js
	cp $< $@

$(LIB)/%.min.js : $(LIB)/%.js
	$(UGLIFY) $< --output $@

test: build
	$(PHANTOMJS) $(QUNITJS) $(TEST)/index.html 2> /dev/null

init:
	npm install

.PHONY: test init
