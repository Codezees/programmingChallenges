function saveToCookie(key, value, onCompletion) {
    var cookieValue = key + ':' + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveSong() {
    var songValue = document.getElementsByName('song')[0].value;
    saveToCookie('Song', songValue, showSongSuccess);
}

function showSongSuccess (result) {
    window.alert('You successfully saved [' + result + '] from the text input to your cookie.');
}

function saveSinger() {
    var singerValue;
    var singerOptions = document.getElementsByName('singer');
    for (var i = 0; i < singerOptions.length; i++) {
        if (singerOptions[i].checked) {
            singerValue = singerOptions[i].value;
            break;
        }
    }
    saveToCookie('Singer', singerValue, function (result) {
       window.alert('You did it! You saved [' + result + ']');
    });
}