/* global define */
define([
    'components/background',
    'components/speedrun'
], function(setBackground, setSpeedRunDimensions) {
    'use strict';

    var LAYOUT_NAME = '4x3_3';

    return function() {
        setBackground(LAYOUT_NAME);
        setSpeedRunDimensions(442, 154, 396, 179, {
            nameY: 17,
            categoryY: 84,
            showEstimate: true,
            nameMaxHeight: 80
        });
    };
});
