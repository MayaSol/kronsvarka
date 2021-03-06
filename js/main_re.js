$(".info").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  if ($(".blue-border").hasClass("active")) {
    $(".blue-border").removeClass("active");
  }
  else {
    $(".blue-border").addClass("active");
  }
  $(document).click(function (e) {
    if (!$(".blue-border").find(e.target).length) {
      $(".blue-border").removeClass("active");
    }
  });
});

$(document).ready(function () {
  svg4everybody();
  objectFitImages();
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: false,
    focusOnSelect: true
  });
  $(".img_res").imagezoomsl({
    innerzoommagnifier: true,
    classmagnifier: window.external ? window.navigator.vendor === "Yandex" ? "" : "round-loupe" : "",
    magnifierborder: "5px solid #F0F0F0",                               // fix для Opera, Safary, Yandex
    zoomrange: [2, 8],
    zoomstart: 4,
    magnifiersize: [250, 250]
  });
  $(".display_filter").click(function(){
    $('.filter').toggle();
  });
  // $('.basket').click(function (e) {
  //   e.preventDefault();
  //   $(this).parent('.basket_block').toggleClass("open");
  //   $(document).click(function (e) {
  //     if (!$(".basket_block").find(e.target).length) {
  //       $(".basket_block").removeClass("open");
  //     }
  //   });
  // });
  // if (!$('body').hasClass('index')) {
  //   $('.sidebar-menu').slideUp(0);
  // }
  // $('.sidebar-menu').slideUp(0);
  if ($('.sidebar-menu').hasClass('open')) {
    $('.sidebar-menu').slideDown(300);
  }
  if ($('.wrap').width() != 300) {
    $('.menu').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      if ($('.sidebar-menu').hasClass('open')) {
        $('.sidebar-menu').slideUp(300);
        $('.sidebar-menu').removeClass("open");
      } else {
        $('.sidebar-menu').slideDown(300);
        $('.sidebar-menu').addClass("open");
      }
    });
  } else {
    // $('.sidebar').slideUp(300);
    $('.menu').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      if ($('.sidebar').hasClass('open')) {
        $('.sidebar').removeClass("open");
        $('.sidebar').slideUp(300);
      } else {
        $('.sidebar').addClass("open");
        $('.sidebar').slideDown(300);
      }
    });
  }
  // $('.share > p').click(function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $('.share_block').toggleClass("open");
  //   $(document).click(function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     if (!$(".share_block").find(e.target).length) {
  //       $(".share_block").removeClass("open");
  //     }
  //   });
  // });
  $('.zakaz > p').click(function (e) {
    e.preventDefault();
    // e.stopPropagation();
    $(this).parent('.zakaz').toggleClass("open");
    $('.overlay').toggleClass('active');

    $('.overlay').click(function (e) {
      e.preventDefault();
      $('.zakaz').removeClass("open");
      $('.overlay').removeClass('active');
    });
  });
  append_filters();
  $(window).resize(function() {
     append_filters();
  });
  // var tab = $('#delivery_select option:selected').data('tab');
  // $('.delivery_tab').hide();
  // $('.delivery_tab.'+tab).show();
  $('#delivery_select').change(function (e) {
    var $this = $(this);
    var tab = $this.find('option:selected').data('tab');
    $('.delivery_tab').hide();
    $('.delivery_tab.' + tab).show();
    if (tab === 'pickup') {
      $('.delivery_form').hide();
    } else {
      $('.delivery_form').show();
      $('.delivery_form label').hide();
      if (tab === 'courier') {
        $('.delivery_form label:not(.transport)').show();
      }
      if (tab === 'transport') {
        $('.delivery_form label').show();
      }
    }
  });
  $('#delivery_select').trigger('change');
  $('#cart_order_form').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();
    createOrder();
  });

  $('#type_client_select').change(function (e) {
    var $this = $(this);
    var type = $this.val();
    if (type == 2) {
      $('.requisites_form').show();
    } else {
      $('.requisites_form').hide();
    }
  });
  $('#type_client_select').trigger('change');


  $('.popular .h2_span').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    var index = $('.popular .h2_span').index($this);
    $('#featured_blocks').slick('slickGoTo', index, false);
  });
  $('#featured_blocks').slick({
    prevArrow: $('.rectangle.prev')[0],
    nextArrow: $('.rectangle.next')[0]
  }).on('beforeChange', function (event, $this, current, next) {
    $($('.popular .h2_span').removeClass('active').get(next)).addClass('active');
  });

  if (!$('.basket_cont .product').length) {
    $('.basket_cont .button').on('click.cartempty', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this);
      alert('Невозможно оформить, корзина пуста');
    });
  }

  var filterSelects = document.querySelectorAll('.sort-select select');

  choices = [];
  for (i=0; i<filterSelects.length; i++) {
    choices[i] = new Choices(filterSelects[i],{
      searchEnabled: false,
      shouldSort: false
    });
  }

  var btnsGridToggle = document.querySelectorAll('.catalog-btns .btn');
  for (var i=0; i<btnsGridToggle.length; i++) {
    btnsGridToggle[i].addEventListener('click', function (event) {
      var containerClass = this.dataset.container;
      var container = document.querySelector('.' + containerClass);
      container.dataset.grid="";
      container.dataset.grid=this.dataset.grid;
      var parent = this.closest('.catalog-btns');
      var btns = parent.querySelectorAll('.btn');
      for (var i=0; i<btns.length; i++) {
        btns[i].classList.remove('active');
      }
      this.classList.add('active');
    });
  };
  $( '.btn[data-grid="grid"]' ).trigger( "click" );

  $('[data-tab-link]').click(function(event) {
    event.preventDefault();
    console.log($(this).data('tabLink'));
    var tab = $($(this).data('tabLink'));
    console.log(tab);
    if (tab.length > 0) {
      tab[0].scrollIntoView();
      tab.trigger('click');
    }
    // $($(this).data('tabLink'))[0].scrollIntoView();
  })

// var stretchBtns = document.querySelectorAll('[data-stretch-selector]');
// console.log('stretchBtns');
// console.log(stretchBtns);
// for (var i=0; i<stretchBtns.length; i++) {
//   stretchBtns[i].addEventListener('click',function(event) {
//     console.log('click stretch');
//     stretch(event.target);
//   });
// }


})

function cartAdd(id, qty) {
  if (typeof qty === 'undefined') {
    qty = 1;
  }

  $.ajax({
    type: "post",
    url: '/kronsvarka/connectors/cart.php',
    data: {action: "add", qty: qty, id: id},
    dataType: "json", // xml, html, script, json, jsonp, text
    success: function (data) {
      console.dir(data);
      updateCart(data.data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.dir(jqXHR);
      console.error(textStatus);
    }
  });
}

function cartSet(id, qty) {
  if (typeof qty === 'undefined') {
    qty = 1;
  }

  $.ajax({
    type: "post",
    url: '/kronsvarka/connectors/cart.php',
    data: {action: "set", qty: qty, id: id},
    dataType: "json", // xml, html, script, json, jsonp, text
    success: function (data) {
      console.dir(data);
      updateCart(data.data);

    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.dir(jqXHR);
      console.error(textStatus);
    }
  });

}

function cartDelete(id) {
  $.ajax({
    type: "post",
    url: '/kronsvarka/connectors/cart.php',
    data: {action: "delete", id: id},
    dataType: "json",
    success: function (data) {
      console.dir(data);
      updateCart(data.data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.dir(jqXHR);
      console.error(textStatus);
    }
  });

}

function updateCart(data) {
  $('.basket .price').text(data.total_string + 'р.');
  $('.basket_cont .product').remove();
  $('.basket_cont .button').off('click.cartempty');
  if (!data.qty) {
    $('.basket_cont .button').on('click.cartempty', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this);
      alert('Невозможно оформить, корзина пуста');
    });
  }
  $.each(data.products, function (i, product) {
    var $product = $('<div class="product" data-id="' + product.id + '"></div>');
    var $img = $('<div class="img"> <img src="' + product.thumb + '" alt=""> </div>').appendTo($product);
    var $price = $('<div class="price"></div>').appendTo($product);
    var $title = $('<p><span>' + product.good_cat + '</span>' + product.pagetitle + '</p>').appendTo($price);
    var $value = $('<p class="value">' + product.price_string + ' p.</p>').appendTo($price);
    var $actions = $('<span class="f-12">Кол-во</span>' +
      '<input type="text" onchange="cartSet(' + product.id + ', $(this).val());" value="' + product.qty + '">' +
      '<div class="close" onclick="cartDelete(' + product.id + ');"></div>').appendTo($price);
    $product.prependTo($('.basket_cont'));
  });
  $('.basket .counter span').text(data.qty);
  updateCartPage(data);
}

function updateCartPage(data) {
  if (!$('.cart_page.products table').length) {
    return;
  }
  $('.cart_page.products table tfoot  td:last').text(data.total_string + ' руб');
  $('.cart_page.products table tbody tr').remove();
  $.each(data.products, function (i, product) {
    var $product = $('<tr data-id="' + product.id + '"></tr>');
    var $img = $('<td><a href ="' + product.href + '" <div class="img"> <img src="' + product.thumb + '" alt=""> </div></a></td>').appendTo($product);
    var $title = $('<td><a href="' + product.href + '">' + product.pagetitle + '</a></td>').appendTo($product);
    var $price = $('<td><span class="value">' + product.price_string + ' p.</span>').appendTo($product);
    var $value = $('<td><input type="text" onchange="cartSet(' + product.id + ', $(this).val());" value="' + product.qty + '">').appendTo($product);
    var $actions = $('<td><div class="close" onclick="cartDelete(' + product.id + ');"></div></td>').appendTo($product);
    $product.appendTo($('.cart_page.products table tbody'));
  });
}

function createOrder() {
  var $form = $('#cart_order_form');
  if (!$form.length) {
    alert('Форма заказа не найдена');
    return;
  }
  var action = $form.attr('action');
  if (!action || !action.length) {
    alert('Не найден обработчик заказа');
    return;
  }
  //var postData = $form.serializeArray();
  var postData = new FormData($form.get(0));
  $.ajax({
    type: "post",
    url: action,
    data: postData,
    dataType: "json", // xml, html, script, json, jsonp, text
	enctype: 'multipart/form-data',
	contentType:false,
	processData:false,
    success: function (data) {
      console.dir(data);
      if (data.status === 'OK') {
        if (typeof data.data.redirect !== 'undefined') {
          document.location.href = data.data.redirect;
        } else {
          if (data.msg.length) {
            showMessage(data.msg);
          }
        }
      } else {
        showMessage(data.msg);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.dir(jqXHR);
      console.error(textStatus);
    }
  });
}

function showMessage(msg, msg_class) {
  if (typeof msg_class === 'undefined') {
    msg_class = ''
  }
  msg = '<div class="popup ' + msg_class + ' ">' + msg + '</div>';
  $.magnificPopup.open({
    items: {
      src: msg, // can be a HTML string, jQuery object, or CSS selector
      type: 'inline'
    }
  });
}

function append_filters() {
  if ($(window).width() > 767.98) {
    $('#filtr_form_mobile').find('.display_filter').appendTo('#filter_form');
    $('#filtr_form_mobile').find('#mse2_filters').appendTo('#filter_form');
  }else {
    $('#filter_form').find('.display_filter').appendTo('#filtr_form_mobile');
    $('#filter_form').find('#mse2_filters').appendTo('#filtr_form_mobile');
  }
}

function stretch(elem) {
    console.log('stretch');
    var parent = elem.parentElement.querySelector(elem.dataset.stretchSelector);
    console.log(parent);
    if (parent.classList.contains('open')) {
      parent.classList.remove('open');
      parent.style.height="";
    }
    else {
      parent.classList.add('open');
      parent.style.height = "auto";
    }
}


