let hrefs = document.querySelectorAll('.header-menu a');
for(let elem of hrefs)
{
    elem.addEventListener('click',transition);
}

function transition()
{
    let id = this.href.match(/[A-Za-z0-9]+$/)[0];
    let elem = document.getElementById(id);
    let lastChild = elem.children[elem.children.length-1];
    lastChild.style.border = '1px solid black';
}

