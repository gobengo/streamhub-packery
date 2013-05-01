/** 
 * A module to render tiled walls of Content
 * @module streamhub-sdk/views/media-wall-view
 */
define([
    'jquery',
    'streamhub-sdk/view',
    'streamhub-sdk/content/views/content-view',
    'streamhub-sdk/util'
], function($, View, ContentView, Util) {
    /**
     * A view that displays Content in a media wall.
     * @alias module:streamhub-sdk/views/media-wall-view
     * @param opts {Object} A set of options to config the view with
     * @param opts.el {HTMLElement} The element in which to render the streamed content
     * @constructor
     */
    var PackeryView = function(opts) {
        var self = this;
        opts = opts || {};
        opts.el = opts.el || document.createElement('div');

        Packery.call(this, opts.el, opts);
        View.call(this, opts);

        $(this.el).addClass('streamhub-packery');
    };
    PackeryView.prototype = $.extend(new View(), Packery.prototype);

    /**
     * Add a piece of Content to the MediaWallView
     * @param content {Content} A Content model to add to the MediaWallView
     * @return the newly created ContentView
     */
    PackeryView.prototype.add = function(content, stream) {
        var contentView = this.createContentView(content);
        contentView.render();
        $(this.el).prepend(contentView.el);
    };

    return PackeryView;
});
