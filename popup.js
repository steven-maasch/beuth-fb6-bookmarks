var links = [
  {
    "link_name": "Moodle",
    "icon_class": "fa-graduation-cap",
    "url": "https://lms.beuth-hochschule.de/moodle/"
  },
  {
    "link_name": "Bibliothek (webOPAC)",
    "icon_class": "fa-book",
    "url": "https://webopac.beuth-hochschule.de/"
  },
  {
    "link_name": "GitLab (CGM-Labor)",
    "icon_class": "fa-git",
    "url": "https://cgmgit.beuth-hochschule.de/users/sign_in"
  },
  {
    "link_name": "Lehrkraftnews",
    "icon_class": "fa-paper-plane",
    "url": "https://fb6.beuth-hochschule.de/lehrkraftnews/user/login"
  },
  {
    "link_name": "Webmail",
    "icon_class": "fa-envelope",
    "url": "https://webmail.beuth-hochschule.de/"
  },
  {
    "link_name": "Stundenpläne",
    "icon_class": "fa-calendar",
    "url": "https://sv-online2.beuth-hochschule.de/stundenplaene/VInfoOnline/VInfoOnlineIntern.aspx"
  },
  {
    "link_name": "Belegsystem",
    "icon_class": "fa-users",
    "url": "https://sv-online2.beuth-hochschule.de/Portal/"
  },
  {
    "link_name": "DreamSpark",
    "icon_class": "fa-windows",
    "url": "http://labor.beuth-hochschule.de/pst/dreamspark/"
  }
];


$(document).ready(function() {
  $.each(links, function(index, link) {
    $("#bookmark-list").append('<li><a href="' + link.url + '" class="beuth-link"><i class="fa fa-fw ' + link.icon_class + '"></i>' + link.link_name + '</a></li>');
    if (index === 2 || index === 6) {
      $("#bookmark-list").append('<li class="list-items-seperator"></li>');
    }
  });
  $(".beuth-link").each(function() {
    $(this).click(function() {
      chrome.tabs.create({ url: $(this).attr("href") });
      window.close();
    });
  });
});
