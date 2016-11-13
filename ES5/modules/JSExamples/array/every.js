




if (!Array.prototype.every)
{
Array.prototype.every = function(fun) {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();
var thisp = arguments[1]; for (var i = 0; i < len; i++) {
if (i in this &&
!fun.call(thisp, this[i], i, this))
        return false;
    }
    return true;
  };
}
function isBigEnough(element, index, array) {
  return (element >= 10);
  }
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
document.write("First Test Value : " + passed );
passed = [12, 54, 18, 130, 44].every(isBigEnough);
 document.write("Second Test Value : " + passed );
