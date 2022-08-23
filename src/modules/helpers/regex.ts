export const firstNameRegexp = /^[А-ЯёЁ\_][а-яА-ЯёЁ\_]{2,19}/;
export const secondNameRegexp = /^[А-ЯёЁ][а-яА-ЯёЁ]{2,19}/;
export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const phoneRegexp = /^\+?\d{9,15}$/;
export const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const loginRegexp = /(?=.*[a-zA-Z])[a-zA-Z\_\-0-9]{2,19}/;