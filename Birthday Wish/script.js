function showSurprise() {
    var surpriseElement = document.getElementById('surprise');
    var imgElement = surpriseElement.querySelector('img');
    imgElement.style.width = '300px'; // Set the width
    imgElement.style.height = 'auto'; // Maintain aspect ratio
    surpriseElement.style.display = 'block';
}
