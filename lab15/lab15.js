function validateForm() {
    console.log("alo");

    document.querySelectorAll('.error').forEach(errorElem => errorElem.innerHTML = '');
    
    var nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    let hasError = false;
    let firstName = document.getElementById('name').value;
    let lastName = document.getElementById('surname').value;

    if (!nameRegex.test(firstName) || firstName.length > 20) {
        hasError = true;
        document.getElementById('name_err').innerText = 'имя содержит только буквы русского и англ. алфавита и не превышает 20 символов';
    }

    if (!nameRegex.test(lastName) || lastName.length > 20) {
        hasError = true;
        document.getElementById('surname_err').innerText = 'фамилия содержит только буквы русского и англ. алфавита и не превышает 20 символов';
    }

    var emailRegex = /^[^@]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,3}$/;
    let emailAddress = document.getElementById('email').value;

    if (!emailRegex.test(emailAddress)) {
        hasError = true;
        document.getElementById('email_err').innerText = 'ошибка в записи почты';
    }

    var phoneRegex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
    let phoneNumber = document.getElementById('phone').value;

    if (!phoneRegex.test(phoneNumber)) {
        hasError = true;
        document.getElementById('phone_err').innerText = 'ошибка в записи телефона';
    }

    let aboutText = document.getElementById('about').value;
    if (aboutText.length > 250) {
        hasError = true;
        document.getElementById('textarea_err').innerText = 'длина не может превышать 250';
    }

    let cityName = document.getElementById('city').value;
    console.log(cityName);
    let bstuCheckbox = document.getElementById('bstu');
    console.log(bstuCheckbox.checked);

    let selectedCourse = document.querySelector('input[name="course"]:checked');
    console.log(selectedCourse.value);

    if (!selectedCourse) {
        hasError = true;
        document.getElementById('course_err').innerText = 'выберите курс';
    } 
    else if (!((selectedCourse.value == 3) || (bstuCheckbox.checked == true) || (cityName == 'Минск'))) {
        if (!confirm("вы уверены в выборе курса, университета и города??")) {
            hasError = true;
            return;
        }
    }

    if (!hasError) {
        alert("форма отправлена");
    }
}