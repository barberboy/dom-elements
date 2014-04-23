PHANTOMJS:=$(shell which phantomjs)
UGLIFY:=./node_modules/uglify-js/bin/uglifyjs
QUNIT:=./node_modules/qunit-tap/sample/js/run_qunit.js

LIB:=lib
TEST:=test
SRC:=src

build: lib/dom-elements.js lib/dom-elements.min.js

$(LIB)/%.js: $(SRC)/%.js
	cp $< $@

$(LIB)/%.min.js: $(LIB)/%.js
	$(UGLIFY) $< --output $@

test: build phantomjs
	$(PHANTOMJS) $(QUNIT) $(TEST)/index.html 2> /dev/null

init:
	npm install

phantomjs:
ifndef PHANTOMJS
	$(error phantomjs is required to run the unit tests. Install from \
            http://phantomjs.org/download.html or `npm install phantomjs`)
endif

.PHONY: test init phantomjs
