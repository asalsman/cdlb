//<![CDATA[
//alert ("ready");
$(document).ready (function () {

$(".expander .controls").on("click", function (e) {
var id = this.id;
var $content = $(this).next (".content");
//var expanded = $content.is(":visible");
var expanded = $content.hasClass ("shown");

// hide/show content
if (expanded) {
$content.removeClass ("shown");
$content.addClass ("hidden");

} else {
$content.removeClass ("hidden");
$content.addClass ("shown");
} // if

//alert ("trigger: " + $(this).text());
// state indicator
// aria
$(this).find ("[aria-expanded]")
.attr ("aria-expanded", !expanded);

$(this).find ("[aria-pressed]")
.attr ("aria-pressed", !expanded);

// images with class imageIndicator
$(this).find (".imageIndicator").attr ({
"src":
(expanded)? "collapsed.jpg" : "expanded.jpg",
"alt":
(expanded)? "collapsed" : "expanded"
}); // image

// text
$(this).find ("span")
.text (
(expanded)? '\u25B6' : '\u25BC'
); // text

// focus
$(this).focus ();

}); // click .trigger

$("#automaticallyRead").on ("click", function () {
if (this.checked) {
$("#expandingSectionsContainer").attr ("aria-live", "polite");
} else {
$("#expandingSectionsContainer").attr ("aria-live", "off");
} // if
}); // click #automaticallyRead


}); // ready

// alert("loaded");
