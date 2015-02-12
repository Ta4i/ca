'use strict';
$(function(){
    initMap();

    function initMap(){
        var $map = $('#map');

        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;

        $map.css({
            height: height
        });

        var map = L.map('map').setView([0,0], 2);
        L.tileLayer('http://{s}.tiles.mapbox.com/v3/ta4i.i9hi7427/{z}/{x}/{y}.png', {
            attribution: 'CA',
            maxZoom: 18
        }).addTo(map);
    }
});