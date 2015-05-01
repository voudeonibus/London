# London
:uk:

[![npm version](https://img.shields.io/npm/v/london.svg?style=flat)](https://www.npmjs.com/package/london)
[![dependency Status](https://img.shields.io/david/voudeonibus/london.svg?style=flat)](https://david-dm.org/voudeonibus/london#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/voudeonibus/london.svg?style=flat)](https://david-dm.org/voudeonibus/london#info=devDependencies)
![download github](https://img.shields.io/github/downloads/voudeonibus/London/latest/total.svg)
![download npm month](https://img.shields.io/npm/dm/london.svg)
![license](https://img.shields.io/npm/l/london.svg)

London is a module for maps all URL's for Hapi.

## Table of contents

- [Quick start](#quick-start)
- [Starting](#starting)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/voudeonibus/London.git`.
- Install with [npm](https://www.npmjs.com): `npm install london`.

## Starting

```javascript
var london = require('london');
var Hapi = require('hapi');
var server = new Hapi.Server();
var path = require('path');

london({
  server: server,
  prefix_path: '/api',
  read_dir: path.join(__dirname, '/actions'),
  host: 'http://localhost',
  port: 8080
});

```

### Options

- **server:** server of Hapi
- **prefix_path:** prefix for path on each URL
- **read_dir:** dir where the Londo read each file as URL
- **host:** host for route 'all_methods'
- **port** port for router 'all_methods'


## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/voudeonibus/London/issues/new).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, London is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

[MIT](https://github.com/voudeonibus/London/blob/master/LICENSE)
