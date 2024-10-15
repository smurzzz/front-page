/* Select inputs from HTML */
const fullname = document.getElementById('full-name');
const studentId = document.getElementById('student-id');
const section = document.getElementById('section');
const email = document.getElementById('email');
/* End */

/* Select Error Forms from HTML */
const nameError = document.getElementById('name-error');
const studentidError = document.getElementById('studentid-error');
const sectionError = document.getElementById('section-error');
const emailError = document.getElementById('email-error');
const submitError = document.getElementById('submit-error');
/* End */

/* Select buttons from HTML */
const submitBtn = document.getElementById('submit-btn');
const okBtn = document.getElementById('okBtn');
/* End */

/* Creating function to validate forms */

/* Validate fullname */
function validateName () {

    fullnameValue = fullname.value.trim();

    if(fullnameValue.length == 0){
        nameError.innerHTML = '<p>fill in your full name</p>'
        return false
    };

    if(!fullnameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '<p>enter a valid full name</p>'
        return false
    };

    nameError.innerHTML = '<p class="valid">valid fullname</p>'
    return true;

}
/* End */

/* Validate Student Id */
function validateStudentId () {

    const idValue = studentId.value.trim();

    if(idValue.length == 0){
        studentidError.innerHTML = '<p>fill in your student id</p>'
        return false
    };
    
    if(idValue.length > 11){
        studentidError.innerHTML = '<p>nter a valid full student id</p>'
        return false
    };

    if (/[a-z]/.test(idValue)) {
        studentidError.innerHTML = '<p>Student ID must not contain lowercase letters</p>';
        return false;
    };

    studentidError.innerHTML = '<p class="valid">valid student id</p>'
    return true;

}
/* End */

/* Validate Section */
function validateSection () {

    const sectionValue = section.value.trim()

    if(sectionValue.length == 0){
        sectionError.innerHTML = '<p>fill in your section</p>'
        return false
    };

    if (/[a-z]/.test(sectionValue)) {
        sectionError.innerHTML = '<p>Student ID must not contain lowercase letters</p>';
        return false;
    };

    sectionError.innerHTML = '<p class="valid">valid section</p>'
    return true;

}
/* End */

/* Validate email */

function validateEmail () {

    const emailValue = email.value.trim();

    if(emailValue.length == 9){
        emailError.innerHTML = '<p>fill in your email</p>'
        return false
    }

    if(!emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
          emailError.innerHTML = '<p>enter a valid email</p>'
          return false
    }

    emailError.innerHTML = '<p class="valid">valid email</p>'
    return true;

}

/* End */


/* Validate all froms to submit */
function validateForm(e) {
    e.preventDefault();

    if(validateName()&& validateStudentId() && validateSection() && validateEmail()){
        successfulPopup()
    }
    else{
        submitError.style.display = "block"
        submitError.innerHTML = '<p>Filled all the blanks</p>'

        setTimeout(() => {
            submitError.style.display = "none"
        }, 3000)
        return false
    }

}

/* End */


/* Input all the functions on event listeners */
fullname.addEventListener('keyup', validateName);
studentId.addEventListener('keyup', validateStudentId);
section.addEventListener('keyup', validateSection);
email.addEventListener('keyup', validateEmail);
submitBtn.addEventListener('click', validateForm)
okBtn.addEventListener('click', closePopup)


/* Creating function for confirmation form */
function successfulPopup() {
    const open = document.querySelector('.pop-up');
    open.classList.add('show');
}

function closePopup(){
    const open = document.querySelector('.pop-up');
    open.classList.remove('show');

    fullname.value = "";
    studentId.value = "";
    section.value = "";

    nameError = "";
    studentidError = "";
    sectionError = "";
    emailError = "";
    submitError = "";

};
/* End */


