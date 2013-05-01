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

        this.contentIsDraggable = opts.contentIsDraggable || false;
        this._addedElementsToLayout = [];
        this._addTimeout = null;

        $(this.el).addClass('streamhub-packery');
    };
    PackeryView.prototype = $.extend(new View(), Packery.prototype);

    /**
     * Add a piece of Content to the MediaWallView
     * @param content {Content} A Content model to add to the MediaWallView
     * @return the newly created ContentView
     */
    PackeryView.prototype.add = function(content, stream) {
        var self = this,
            contentView = this.createContentView(content);
        contentView.render();

        if (this.contentIsDraggable) {
            var draggie = new Draggabilly(contentView.el);
            this.bindDraggabillyEvents(draggie);
        }

        $(this.el).prepend(contentView.el);
        this._addedElementsToLayout.push(contentView.el);

        // When .add hasn't been called for 200ms, then tell Packery
        // to .layout() via .prepended(elems)
        if (this._addTimeout) {
            this._addTimeout = clearTimeout(this._addTimeout);
        }
        this._addTimeout = setTimeout(function () {
            self.prepended(self._addedElementsToLayout);
            self._addedElementsToLayout = [];
        }, 200);
    };

    return PackeryView;
});
