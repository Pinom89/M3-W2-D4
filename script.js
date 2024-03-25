// collapse 
/*
document.getElementById('toggleButton').addEventListener('click', function() {
    var collapseElement = document.getElementById('collapseWidthExample');
    var isCollapsed = collapseElement.classList.contains('show');
    
    if (!isCollapsed) {
        collapseElement.classList.add('show');
    } else {
        collapseElement.classList.remove('show');
    }
});

*/

 document.getElementById('toggleButton').addEventListener('click', function() {
        var collapseElement = document.getElementById('collapseWidthExample');
        
        if (collapseElement.classList.contains('show')) {
            collapseElement.classList.remove('show');
            document.getElementById('toggleButton').innerText = 'Controlla le nostre Recensioni';
        } else {
            collapseElement.classList.add('show');
            document.getElementById('toggleButton').innerText = 'Nascondi Recensioni';
        }
    });