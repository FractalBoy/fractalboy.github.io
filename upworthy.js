Array.prototype.slice.call(document.getElementsBiyClassName('_4-u2 mbm _5jmm _5pat _5v3q _5sq8 _5x16')).forEach(function(div) {
    var found = false;
    Array.prototype.slice.call(div.getElementsByClassName('_6lz _6mb ellipsis')).forEach(function(div1) {
        if(div1.textContent.indexOf('Upworthy') > -1) {
            found = true;
        }
    });
    if(found === true) {
        div.parentElement.removeChild(div);
    }
});
