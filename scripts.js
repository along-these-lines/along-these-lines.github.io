// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

    titleText = document.getElementById("lines");
    titleText.style.color = '#EE9D00';
    titleText.classList.add("fade");
    // document.getElementById('lines').style.setProperty("h1::before { opacity: 0;}",0);
    // document.getElementById('lines').style.setProperty("h1::after { opacity: 0;}",0);

    // var sheet = document.styleSheets[0];
    // var beforeIndex = sheet.insertRule("h1::before { opacity: 0;}", 0);
    // console.log(beforeIndex);
    // afterIndex = sheet.insertRule("h1::after { opacity: 0;}", 0);
    // console.log(afterIndex);

    // console.log(document.styleSheets[0].cssRules);

  } else {
    document.getElementById("lines").style.color = "white";
    titleText = document.getElementById("lines");
    titleText.classList.remove("fade");
    // killCSSRule('#lines')
    // killCSSRule('.lines::after')
    // var sheet = document.styleSheets[0];
    // sheet.deleteRule(0);
    // sheet.deleteRule(0);
  }
}

// function hasClass(el, className)
// {
//     if (el.classList)
//         return el.classList.contains(className);
//     return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
// }
//
// function addClass(el, className)
// {
//     if (el.classList)
//         el.classList.add(className)
//     else if (!hasClass(el, className))
//         el.className += " " + className;
// }
//
// function removeClass(el, className)
// {
//     if (el.classList)
//         el.classList.remove(className)
//     else if (hasClass(el, className))
//     {
//         var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
//         el.className = el.className.replace(reg, ' ');
//     }
// }

// function getCSSRule(ruleName, deleteFlag) {               // Return requested style obejct
//    ruleName=ruleName.toLowerCase();                       // Convert test string to lower case.
//    if (document.styleSheets) {                            // If browser can play with stylesheets
//       for (var i=0; i<document.styleSheets.length; i++) { // For each stylesheet
//          var styleSheet=document.styleSheets[i];          // Get the current Stylesheet
//          var ii=0;                                        // Initialize subCounter.
//          var cssRule=false;                               // Initialize cssRule.
//          do {                                             // For each rule in stylesheet
//             if (styleSheet.cssRules) {                    // Browser uses cssRules?
//                cssRule = styleSheet.cssRules[ii];         // Yes --Mozilla Style
//             } else {                                      // Browser usses rules?
//                cssRule = styleSheet.rules[ii];            // Yes IE style.
//             }                                             // End IE check.
//             if (cssRule)  {                               // If we found a rule...
//                if (cssRule.selectorText.toLowerCase()==ruleName) { //  match ruleName?
//                   if (deleteFlag=='delete') {             // Yes.  Are we deleteing?
//                      if (styleSheet.cssRules) {           // Yes, deleting...
//                         styleSheet.deleteRule(ii);        // Delete rule, Moz Style
//                      } else {                             // Still deleting.
//                         styleSheet.removeRule(ii);        // Delete rule IE style.
//                      }                                    // End IE check.
//                      return true;                         // return true, class deleted.
//                   } else {                                // found and not deleting.
//                      return cssRule;                      // return the style object.
//                   }                                       // End delete Check
//                }                                          // End found rule name
//             }                                             // end found cssRule
//             ii++;                                         // Increment sub-counter
//          } while (cssRule)                                // end While loop
//       }                                                   // end For loop
//    }                                                      // end styleSheet ability check
//    return false;                                          // we found NOTHING!
// }                                                         // end getCSSRule
//
// function killCSSRule(ruleName) {                          // Delete a CSS rule
//    return getCSSRule(ruleName,'delete');                  // just call getCSSRule w/delete flag.
// }                                                         // end killCSSRule
//
// function addCSSRule(ruleName) {                           // Create a new css rule
//    if (document.styleSheets) {                            // Can browser do styleSheets?
//       if (!getCSSRule(ruleName)) {                        // if rule doesn't exist...
//          if (document.styleSheets[0].addRule) {           // Browser is IE?
//             document.styleSheets[0].addRule(ruleName, null,0);      // Yes, add IE style
//          } else {                                         // Browser is IE?
//             document.styleSheets[0].insertRule(ruleName+' { }', 0); // Yes, add Moz style.
//          }                                                // End browser check
//       }                                                   // End already exist check.
//    }                                                      // End browser ability check.
//    return getCSSRule(ruleName);                           // return rule we just created.
// }
