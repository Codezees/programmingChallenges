var sections = document.getElementsByTagName('section');

for (var i = 0; i < sections.length; i++) {
    handleClick = sections[i].onclick;
}

function handleClick (event) {
    console.log('current element: ' + this.className + ' | target element: ' + event.target.className);

    if (this.className == 'regular') {
        event.stopPropagation();
        console.log('event propogation stopped');
    }
}