/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 jQuery: false,
 */
$(function ($) {
    /**
     * @desc - used a function, so it could be reused in multiple places
     */
    Visa.TimeDisplayView = function () {
        this.__el = $('<form></form>');
    };

    Visa.TimeDisplayView.prototype = {
        __id: '#stage', // could be replaced with const if older browsers can be ignored
        /**
         * jQuery Elements for reference
         */
        __el: $(),
        __askForTimeButtonEl: $(),
        __timeResponseEl: $(),
        __clearResponseButtonEl: $(),

        getAskForTimeButtonEl: function () {
            return this.__askForTimeButtonEl;
        },

        getTimeResponseEl: function () {
            return this.__timeResponseEl;
        },

        getClearResponseEl: function () {
            return this.__clearResponseButtonEl;
        },

        render: function () {

            this.__renderAskForTimeButtonEl();
            this.__renderTimeResponseEl();
            this.__renderClearResponseButtonEl();

            this.__el.append(this.__askForTimeButtonEl);
            this.__el.append(this.__timeResponseEl);
            this.__el.append(this.__clearResponseButtonEl);

            $(this.__id).append(this.__el);

        },

        /**
         * private methods
         */
        __renderAskForTimeButtonEl: function () {
            this.__askForTimeButtonEl = $('<input name ="askForTimeButton" type = "submit" value="ask for the time"/>');
            this.__askForTimeButtonEl.click(function (event) {
                event.preventDefault();
            });
        },

        __renderTimeResponseEl: function () {
            this.__timeResponseEl = $('<input name = "timeResponse" type = "text" readonly />');
        },

        __renderClearResponseButtonEl: function () {
            this.__clearResponseButtonEl = $('<input name ="clearTimeResponse" type = "submit" value="clear response"/>');
            this.__clearResponseButtonEl.click(function (event) {
                event.preventDefault();
            });
        }
    };
});