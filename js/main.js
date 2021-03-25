(function() {
    $(function() {
        // $(".search__frm input").focus(function() { $(this).parents(".search").width(400); });
        // $(".search__frm input").blur(function() { $(this).parents(".search").width(200); });
        $(".good-tabs li").first().addClass("current");
        $(".tabs-content .box").first().addClass("box--visible");
        var $w = $(window);
        var win_w = $(window).width();
        var screenWidth = $(document).width();
        var delta = ((win_w - 1170) / 2 + 300) * -1;
        if ($(".wrap").width() == 750) { delta = ((win_w - 811) / 2) * -1; }
        var $advBg = $(".advantages__bg");
        $advBg.width(win_w);
        $advBg.css({ left: delta });
        $(".ph").inputmask({ mask: "+7 (999)-999-99-99", clearMaskOnLostFocus: false });
        $(".open-inline-popup").on("click", function(e) {
            e.preventDefault();
            var $this = $(this);
            var $popup = $this.parents(".popup-wrap").find(".popup--inline");
            $this.toggleClass("active");
            $popup.toggleClass("opened");
            $(".overlay").toggleClass("active");
            var firstClick = true;
            $(document).bind("click.myEvent1", function(e) {
                if (!firstClick && $(e.target).closest(".popup-wrap").length == 0) {
                    $this.removeClass("active");
                    $popup.removeClass("opened");
                    $(".overlay").removeClass("active");
                    $(document).unbind("click.myEvent1");
                }
                firstClick = false;
            });
        });
        $(".order-link").on("click", function(e) { $("#good-input").val($(this).data("good")); });
        $(".filter-reset").on("click", function(e) {});
        $(".input-wrap input").on("focus", function() { $(this).parents("div").find(".error_message").removeClass("error_message--visible"); });

        function checkInput() {
            var $input = $("#subs_email");
            if ($input.val() != "") {
                alert($input.val());
                $input.removeClass("error");
                return false;
            } else {
                alert($input.val());
                $input.addClass("error");
                return false;
            }
        }
        $(".price-input").ionRangeSlider({ type: "double", grid: false, min: 1000, max: 10000, from: 1120, to: 8000 });
        var slider = $(".price-input").data("ionRangeSlider");
        $("#price-1").on("change", function() {
            var val = $(this).val() * 1;
            slider.update({ from: val });
        });
        $("#price-2").on("change", function() {
            var val = $(this).val() * 1;
            slider.update({ to: val });
        });
        $("#price-1").val($(".irs-from").text());
        $("#price-2").val($(".irs-to").text());
        $(window).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
            var top = $("body").scrollTop();
            var $top = $(".top.fixed");
            var delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
            if (top > 430) {
                if (delta >= 0) {
                    screenWidth = $(document).width();
                    $top.width(screenWidth);
                    $top.addClass("scroll-fixed");
                } else { $top.removeClass("scroll-fixed"); }
            } else { $top.removeClass("scroll-fixed"); }
        });
        $(".open-popup").magnificPopup({ type: "inline", midClick: true, showCloseBtn: false, removalDelay: 300, mainClass: "mfp-fade", fixedContentPos: true });
        $(".zoom-gallery").each(function() { $(this).magnificPopup({ delegate: "a", type: "image", midClick: true, closeBtnInside: true, removalDelay: 300, mainClass: "mfp-with-zoom mfp-img-mobile", fixedContentPos: true, gallery: { enabled: true, tPrev: "Назад", tNext: "Вперёд", tCounter: '<span class="mfp-counter">%curr% из %total%</span>' }, zoom: { enabled: true, duration: 300, opener: function(element) { return element.find("img"); } }, callbacks: { open: function() {}, close: function() {} } }); });
        $(document.body).delegate(".close-popup", "click", function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
        $("ul.tabs").on("click", "li:not(.current)",
            function() { $(this).addClass("current").siblings().removeClass("current").parents("div.tabs-wrap").find("div.box").eq($(this).index()).fadeIn(100).addClass("box--visible").siblings("div.box").hide().removeClass("box--visible"); });
        $(".acc-title").on("click", function(e) {
            var $this = $(this);
            var $block = $this.parents(".acc-block");
            var $siblingsBlocks = $(".acc-block").not($block);
            var $content = $block.find(".acc-content");
            var $all = $(".acc-content").not($content);
            $all.slideUp(300);
            $content.slideToggle(300, function() {
                $siblingsBlocks.removeClass("acc-block--opened");
                $block.toggleClass("acc-block--opened");
            });
        });
        $(".data_agreement").each(function(i, el) {
            var $el = $(el);
            $el.closest("form").submit(function(e) {
                $el.find(".error").remove();
                var $this = $(this);
                if (!$el.find("input").is(":checked")) {
                    $('<span class="error">Необходимо  согласие на обработку данных</span>').appendTo($el);
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        });
    });
})();