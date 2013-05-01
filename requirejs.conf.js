require.config({
  baseUrl: '/',
  paths: {
    jquery: 'lib/jquery/jquery',
    'jquery-imagesloaded': 'lib/imagesloaded/jquery.imagesloaded',
    text: 'lib/requirejs-text/text',
    base64: 'lib/base64/base64',
    hogan: 'lib/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
    hgn: 'lib/requirejs-hogan-plugin/hgn',
    jasmine: 'lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': 'lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': 'lib/jasmine-jquery/lib/jasmine-jquery',
    packery: 'lib/packery/js/packery',
    'packery-packer': 'lib/packery/js/packer',
    'packery-item': '/lib/packery/js/item',
    'packery-rect': '/lib/packery/js/rect',
    'eventEmitter': 'lib/eventEmitter/EventEmitter',
    'event-emitter': 'src/event-emitter',
    'doc-ready': 'lib/doc-ready/doc-ready',
    'eventie': 'lib/eventie/eventie'
  },
  packages: [{
     name: "streamhub-packery",
     location: "src/"
  },{
     name: "streamhub-sdk",
     location: "lib/streamhub-sdk/src/"
  }],
  shim: {
    jquery: {
        exports: '$'
    },
    'jquery-imagesloaded': {
        deps: ['jquery']
    },
    jasmine: {
        exports: 'jasmine'
    },
    'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
    },
    'jasmine-jquery': {
        deps: ['jquery', 'jasmine']
    },
    packery: {
        exports: 'Packery',
        deps: [
        'event-emitter',
        'packery-packer',
        'packery-item',
        'packery-rect',
        'doc-ready']
    },
    'packery-packer': {
        deps: ['packery-rect']
    },
    'packery-item': {
        deps: ['packery-rect', 'event-emitter']
    },
    'doc-ready': {
        exports: 'docReady',
        deps: ['eventie', 'event-emitter']
    },
    'event-emitter': {
        exports: 'EventEmitter',
        deps: ['eventEmitter']
    }
  }
});
