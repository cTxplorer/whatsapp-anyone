export const removeWhitespaces = (str) => {
  return typeof str === 'string' && !!str ? str.replace(/ /g,'') : str;
}

export const generateWaLink = (fullContact, msg = '') => {
  if(typeof fullContact !== 'string' || typeof msg !== 'string') {
    return false;
  }

  const encodedMsg = encodeURIComponent(msg);
  return `https://wa.me/${fullContact}?text=${encodedMsg}`;
}

export const looksValidContact = (contact) => {
  return typeof contact !== 'string' ?
    false : true;
    // /^\+?[0-9]{6,20}$/.test(removeWhitespaces(contact).replaceAll(/[()-]/g, ''));
}
