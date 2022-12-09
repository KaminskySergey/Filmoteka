const refs = {
    openFeedbackModalBtn: document.querySelector('[data-action="open-feedback-modal"]'),
    closeFeedbackModalBtn: document.querySelector('[data-action="close-feedback-modal"]'),
    feedbackBackdrop: document.querySelector('.js-feedback-backdrop'),
    feedbackForm: document.querySelector('.feedback-form'),
    formFieldName: document.querySelector('.feedback-form__input--name'),
    formFieldEmail: document.querySelector('.feedback-form__input--email'),
    formFieldMessage: document.querySelector('.feedback-form__input--textarea-message'),
    feedbackFormSubmitBtn: document.querySelector('.feedback-form__submit-button')
}

const STORAGE_KEY = 'feedback-form-state';

const feedbackFormData = {};


refs.openFeedbackModalBtn.addEventListener('click', onFeedbackModalOpen);

populateFeedbackForm();

function onFeedbackModalOpen() {
    refs.feedbackBackdrop.classList.remove("is-hidden");
    populateFeedbackForm()
    refs.closeFeedbackModalBtn.addEventListener('click', onFeedbackModalClose)
    document.addEventListener('keyup', onEscKeyPress);
    refs.feedbackBackdrop.addEventListener('click', onFeedbackBackdropClick)
    refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
    refs.feedbackForm.addEventListener('input', onFeedbackFormInput);
}



function onFeedbackModalClose() {
    refs.feedbackBackdrop.classList.add("is-hidden");
    refs.closeFeedbackModalBtn.removeEventListener('click', onFeedbackModalClose)
    document.removeEventListener('keyup', onEscKeyPress);
    refs.feedbackBackdrop.removeEventListener('click', onFeedbackBackdropClick)
    refs.feedbackForm.removeEventListener('submit', onFeedbackFormSubmit);
    refs.feedbackForm.removeEventListener('input', onFeedbackFormInput);
}

function onFeedbackBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onFeedbackModalClose();
    }
}

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onFeedbackModalClose()
    }
}

function onFeedbackFormSubmit(event) {
    // event.preventDefault();
    // console.log(feedbackFormData);
    
    onFeedbackModalClose()
    localStorage.removeItem(STORAGE_KEY);


}

function onFeedbackFormInput(event) {
    if (refs.formFieldName.value.trim() === '' && refs.formFieldEmail.value.trim() === '' && refs.formFieldEmail.value.trim() === '') {
        event.currentTarget.reset()
    }
   
    feedbackFormData[event.target.name] = event.target.value;
    
    const feedbackFormDataJSON = JSON.stringify(feedbackFormData);
    localStorage.setItem(STORAGE_KEY, feedbackFormDataJSON);
}

function populateFeedbackForm() {
    const savedFeedbackFormDataJSON = localStorage.getItem(STORAGE_KEY);
    const savedFeedbackFormData = JSON.parse(savedFeedbackFormDataJSON);

    if (savedFeedbackFormDataJSON) {
        if (savedFeedbackFormData.name) {
            refs.formFieldName.value = savedFeedbackFormData.name;
        }
        if (savedFeedbackFormData.email) {
            refs.formFieldEmail.value = savedFeedbackFormData.email;
        }
        if (savedFeedbackFormData.message) {
            refs.formFieldMessage.value = savedFeedbackFormData.message;
        }
    }

    
} 

    


