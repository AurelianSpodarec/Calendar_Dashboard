const selector = "[data-ref]";

const createElement = () => {
    return component => {
        const element = document.querySelectorAll(selector);

        elements.forEach(element => {
            const ref = element.getAttribute("data-ref");
            if (ref) {
                component.refs[ref] = element;
            }
        })
    }
}