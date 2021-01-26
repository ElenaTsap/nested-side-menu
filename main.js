function expand(e) {
    if (e.target.id == 'menu-container') {
        return e;
    }

    console.log(e.target +`expand`, "i am expanding");
    for (let i = 0; i < e.target.children.length; i++) {
        e.target.children[i].classList.toggle("collapsed");
    } 
}

document.addEventListener('click', expand);
