/**
 * Is local storage supported?
 * @link https://gist.github.com/paulirish/5558557
 * @return {Boolean} Returns true if localStorage is supported
 */
module.exports = function(){

  try {

    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;

  } catch(e) {

    return false;

  }

};