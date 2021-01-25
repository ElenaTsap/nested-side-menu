function expand(e) {
    e.stopPropagation();
    console.log(e.target +`expand`, "i am expanding");
    for (let i = 0; i < e.target.children.length; i++) {
        e.target.children[i].classList.toggle("collapsed");
    }
}

document.addEventListener('click', expand);
