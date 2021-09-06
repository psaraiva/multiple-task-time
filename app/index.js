import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Timer from 'easytimer.js';

$(function() {
    $('#grid').find('div[id^=time]').each(function(){
        let target = $(this).find('.values');
        if (target.length < 1) return;

        let timer = new Timer();
        timer.addEventListener('secondTenthsUpdated', function (e) {
            target.html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']));
        });

        timer.addEventListener('started', function (e) {
            target.html(timer.getTimeValues().toString());
        });

        timer.addEventListener('reset', function (e) {
            target.html(timer.getTimeValues().toString());
        });

        $(this).find('.startButton').click(function () {
            timer.start({precision: 'secondTenths'});
        });

        $(this).find('.pauseButton').click(function () {
            timer.pause();
        });

        $(this).find('.stopButton').click(function () {
            timer.stop();
        });

        $(this).find('.resetButton').click(function () {
            timer.reset();
        });
    });
});
