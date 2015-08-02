// function source: http://stackoverflow.com/questions/8366733/external-template-in-underscore
function render(tmpl_name, tmpl_data) {
  if (!render.tmpl_cache) {
    render.tmpl_cache = {};
  }
  if (!render.tmpl_cache[tmpl_name]) {
    var tmpl_dir = '../templates';
    var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';
    var tmpl_string;
    $.ajax({
      url: tmpl_url,
      dataType: 'html',
      method: 'GET',
      async: false,
      success: function(data) {
        tmpl_string = data;
      }
    });
    render.tmpl_cache[tmpl_name] = Handlebars.compile(tmpl_string);
  }
  var rendered = render.tmpl_cache[tmpl_name](tmpl_data);
  console.log('rendered ' + tmpl_name);
  return rendered;
}

$(function() {
  Handlebars.registerHelper('renderPartial', function(tmpl_name, tmpl_data) {
    return render(tmpl_name, tmpl_data);
  });

  //Get the HTML from the template in the script tag
  // var navbarTemplateSource = $('#navbar-template').html();
  // var indexTemplateSource = $('#index-template').html();
  //Compile the template
  var navbarTemplate = render('navbar', {});
  var indexTemplate = render('index', {});

  // The function will insert all the values from the objects in their
  // respective places in the HTML and returned HTML as a string. Then we use
  // jQuery to append the resulting HTML string into the page
  // Handlebars.registerPartial('navbar', navbarTemplate);
  $('body').append(indexTemplate());
});
