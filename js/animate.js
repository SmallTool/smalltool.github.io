$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});

$(function() {
    var animateObj = {
        init: function() {
            var self = this;
            setTimeout(function() {
                self.text();
            }, 1000);
            self.text();
        },
        text: function() {
            var self = this;
            $('.myad').animateCss('bounceInLeft', function() {
                setTimeout(function() {
                    self.title();
                }, 1800);
            });
        },
        title: function() {
            var self = this;
            $('#dcad').animateCss('shake', function() {
                setTimeout(function() {
                    self.title();
                }, 2800);
            });
        }
    }
    animateObj.init();
});