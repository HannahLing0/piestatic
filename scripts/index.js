$(function() {
    //Get the HTML from the template in the script tag
    var navbarTemplateSource = $("#navbar-template").html();
    console.log("script started");
    var indexTemplateSource = $("#index-template").html();
    //Compile the template
    // var navbarTemplate = Handlebars.compile(navbarTemplateSource);
    var indexTemplate = Handlebars.compile(indexTemplateSource);

    // var data = {};

    // The function will insert all the values from the objects in their r
    // espective places in the HTML and returned HTML as a string. Then we use
    // jQuery to append the resulting HTML string into the page
    Handlebars.registerPartial("navbar", navbarTemplateSource);
    $("body").append(indexTemplate({}));
    console.log("script finished");
});
