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
     * Singleton may as well work fine here, as it is not a reusable class - used function for demo purposes
     */
    Visa.TimeDisplayController = function () {
        var timeDisplayView = new Visa.TimeDisplayView();
        timeDisplayView.render();

        this.__askForTimeButton = timeDisplayView.getAskForTimeButtonEl();
        this.__clearResponseButton = timeDisplayView.getClearResponseEl();
        this.__timeResponse = timeDisplayView.getTimeResponseEl();
        this.__timeToStringConverter = new Visa.timeToStringConvertor(new Date());
    };

    Visa.TimeDisplayController.prototype = {
        __askForTimeButton: null,
        __clearResponseButton: null,
        __timeResponse: null,
        __timeToStringConverter: null,

        run: function () {
            var self = this, // better way to do this is possible e.g. using _.bind() external underscore js library
                bindToEvents = function () {

                    self.__clearResponseButton.bind('click', function () {
                        //ideally val should be a function abstracted away from jquery in its own timeResponse class perhaps
                        //TODO Manipulation of values should be bound to changes on the model itself, rather than directly - short of time to do so
                        self.__timeResponse.val('');
                    });

                    self.__askForTimeButton.bind('click', function () {
                        //ideally val should be a function abstracted away from jquery in its own timeResponse class perhaps

                        var time  = self.__timeToStringConverter.getConvertedTime();
                        self.__timeResponse.val(time);
                    });
                },
                bindToModelsChanges = function () {
                    //TODO - implement view to model changes bindings
                }; // etc more private functions to be added if needed

            bindToEvents();
            bindToModelsChanges();
        }
    };
});


