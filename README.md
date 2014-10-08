
# broccoli-coco
A Coco filter for Broccoli.

## Installation

    npm install --save-dev broccoli-coco

## Usage

```javascript
var filterCoco = require('broccoli-coco');
tree = filterCoco(tree, options);
```

## Options

### bare

If set to _true_, Coco will not wrap the output in a top-level function.

