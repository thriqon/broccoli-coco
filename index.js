
var Filter = require('broccoli-filter'),
    coco = require('coco');

function CocoFilter(inputTree, options) {
	if (!(this instanceof CocoFilter)) {
		return new CocoFilter(inputTree, options);
	}

	Filter.apply(this, arguments);
	this.bare = (options || {}).bare;
}
CocoFilter.prototype = Object.create(Filter.prototype);
CocoFilter.prototype.constructor = CocoFilter;

CocoFilter.prototype.extensions = ['co'];
CocoFilter.prototype.targetExtension = 'js';

CocoFilter.prototype.processString = function processCocoString (string) {
	try {
		return coco.compile(string, {bare: this.bare});
	} catch (err) {
		err.line = err.location && err.location.first_line;
		err.column = err.location && err.location.first_column;
		throw err;
	}
};

module.exports = CocoFilter;
