//acortamos codigo html

async function agregarHtml(file, elementId) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}