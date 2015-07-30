$(function() {
    //Get the HTML from the template in the script tag
    var navbarTemplateSource = $("#navbar-template").html();
    var indexTemplateSource = $("#index-template").html();
    //Compile the template
    var navbarTemplate = Handlebars.compile(navbarTemplateSource);
    var indexTemplate = Handlebars.compile(indexTemplateSource);
    // The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string. Then we use jQuery to append the resulting HTML string into the page
    $(document.body).append(indexTemplate());
    console.log("script finished");
});
