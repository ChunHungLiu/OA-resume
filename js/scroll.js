/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */

$(function () {
  $container = $('#container');
  $loading   = $('#loading');
  $navbar    = $('#navbar');
  $footer    = $('#footer');

  $container.imagesLoaded ()
            .always (function (instance) {
              $navbar.OAnavbar ()
                     .find ('.item')
                     .click (function () {
                        $(this).addClass ('active').siblings ().removeClass ('active');
                        window.location.assign ($(this).data ('r'));
                      });
              var now_index = 0, index = -1, range = 80, timer = null,
                  scrollTo = function (to, duration) { var start = $(window).scrollTop (),  change = to - start, currentTime = 0, increment = 20, animateScroll = function () { currentTime += increment; $(window).scrollTop (easeInOutQuad (currentTime, start, change, duration)); if(currentTime < duration) timer = setTimeout (animateScroll, increment); }; clearTimeout (timer); animateScroll (); },
                  easeInOutQuad = function (t, b, c, d) { return (t /= d / 2) < 1 ? (c / 2 * t * t + b) : (-c / 2 * (--t * (t - 2) - 1) + b); },
                  scroll_timer = setTimeout (function () { clearTimeout (scroll_timer);
                    $(window).scroll (function () {
                      $container.children ('.page').removeClass ('now').removeClass ('ed').each (function () {
                        if (($(this).offset ().top - $(window).scrollTop ()) < ($(window).height () / 2) && !$(this).hasClass ('now'))
                          now_index = $(this).index ();
                      });
                      var $ed = $container.children ('.page:lt(' + (now_index) + ')').addClass ('ed');
                      var $now = $container.children ('.page').eq (now_index).addClass ('now');
                      if (index != now_index && $now.length) {
                        index = now_index;
                        scrollTo ($now.offset ().top -  range, 100);
                      }
                    });
                  }, 100);

              $navbar.removeClass ('hide');
              $container.removeClass ('hide');
              $footer.removeClass ('hide');
              $loading.fadeOut (function () {
                $(this).remove ();
                scrollTo (1200, 100);
              });
            });

  var pictureIndex = 0;
  $('.avatar, .picture').OAimgLiquid ();
  $('.page').each (function () {
    pictureIndex += 1;
    $(this).find ('.picture').each (function () {
       $(this).attr ('data-fancybox-group', 'group_' + pictureIndex).attr ('href', $(this).find ('img').attr ('src'));
    });
  });

  $('.picture').fancybox ({
    beforeLoad: function() {
      if ($(this.element).attr ('title'))
        this.title = $(this.element).attr ('title');
      else if ($(this.element).attr ('alt'))
        this.title = $(this.element).attr ('alt');
      else if ($(this.element).data ('fancybox_title'))
        this.title = $(this.element).data ('fancybox_title');
    },
    padding : 0,
    helpers : {
      overlay: {
        locked: false
      },
      title : {
        type : 'over'
      },
      thumbs: {
        width: 50,
        height: 50
      }
    }
  });
});