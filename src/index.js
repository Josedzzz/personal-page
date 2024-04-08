document.addEventListener('DOMContentLoaded', function() {
    //change the content of the interface
    const handleLinkClick = (event) => {
        event.preventDefault();
        const link = event.target;
        const formId = link.getAttribute('data-form-id');
        //Shows the form and hide the rest
        const forms = document.querySelectorAll('.form-container');
        forms.forEach(form => {
            if (form.id === formId) {
                form.style.display = "block";
            } else {
                form.style.display = "none";
            }
        });
    
        switch (formId) {
            case 'about-me':
                showForm(formId);
                break;
            case 'projects':
                showForm(formId);
                break
            case 'github':
                window.open("https://github.com/Josedzzz", "_blank");
                break
            default:
                break;
        }
    };

    //shows the content of a form
    const showForm = (formId) => {
        const form = document.getElementById(formId);
        form.style.display = "block";
        const otherForms = document.querySelectorAll(".form-container:not(#" + formId + ")");
        for (const otherForm of otherForms) {
            otherForm.style.display = "none";
        }
    };

    //Associate the handleLinkClick function to the click event of all elements of the "links" class
    const links = document.querySelectorAll(".links a");
    links.forEach(link => {
        link.addEventListener("click", handleLinkClick);
    });
    showForm('about-me');
});