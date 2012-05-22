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
    //TODO - choose a better name for this class - could also use a function instead if multiple objects instances are required
    Visa.timeToStringConvertor = function (dateObj) {
        this.__dateObj = dateObj;
    };

    Visa.timeToStringConvertor.prototype = {
        __dateObj: null,
        // TODO more mapped values are needed
        __minutesMap: { // could be extended to support different languages - e.g. by using function instead and
            0: 'o\'clock',
            1: 'just after',
            2: 'just after',
            15: 'quarter past',
            30: 'half past',
            45: 'quarter to',
            58: 'just before',
            59: 'just before'
        },

        // supports AM / PM format
        __hoursArray: [
            'midnight',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'noon',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven'
        ],

        getConvertedTime: function () {
            var currentMinute = this.__dateObj.getMinutes(),
                currentHour = this.__dateObj.getHours(),
                formattedMinute = this.__getConversationalMinutes(currentMinute),
                formattedString;

            if (currentMinute > 30) {
                if (currentHour === 23) {
                    currentHour = 0;
                } else {
                    currentHour = currentHour + 1;
                }

                if (typeof formattedMinute === "number") {
                    formattedMinute = (60 - currentMinute).toString() + ' to';
                }
            } else {
                if (typeof formattedMinute === "number") {
                    formattedMinute = currentMinute.toString() + ' past';
                }
            }

            if (currentMinute === 0) {
                formattedString = this.__getConversationalHour(currentHour) + ' ' + formattedMinute;

            } else {
                formattedString = formattedMinute + ' ' + this.__getConversationalHour(currentHour);
            }

            return formattedString;
        },
        /**
         *
         * @param hour
         * @return conversational minutes if a match is found, otherwise number of minutes
         */
        __getConversationalHour: function (hour) {
            return this.__hoursArray[hour] ? this.__hoursArray[hour] : hour;
        },
        /**
         *
         * @param minutes
         * @return conversational minutes if a match is found, otherwise number of minutes
         */
        __getConversationalMinutes: function (minutes) {
            return this.__minutesMap[minutes] ? this.__minutesMap[minutes] : minutes;
        }
    };

});

