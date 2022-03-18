var activeSection;

function setActiveSection(selection) {
    activeSection = selection;

    switch(selection) {
        case 'education':
            document.getElementById('menu-professional').classList.remove('menu-active');
            document.getElementById('menu-links').classList.remove('menu-active');
            document.getElementById('menu-education').classList.add('menu-active');
            document.getElementById('text-education').classList.remove('hidden');
            document.getElementById('text-professional').classList.add('hidden');
            document.getElementById('text-links').classList.add('hidden');
            break;
        case 'professional':
            document.getElementById('menu-professional').classList.add('menu-active');
            document.getElementById('menu-links').classList.remove('menu-active');
            document.getElementById('menu-education').classList.remove('menu-active');
            document.getElementById('text-professional').classList.remove('hidden');
            document.getElementById('text-education').classList.add('hidden');
            document.getElementById('text-links').classList.add('hidden');

            break;
        case 'links':
            document.getElementById('menu-professional').classList.remove('menu-active');
            document.getElementById('menu-links').classList.add('menu-active');
            document.getElementById('menu-education').classList.remove('menu-active');
            document.getElementById('text-links').classList.remove('hidden');
            document.getElementById('text-professional').classList.add('hidden');
            document.getElementById('text-education').classList.add('hidden');
            break;       
    }
    console.log(activeSection);
}
