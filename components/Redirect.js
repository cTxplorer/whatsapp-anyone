import React from 'react';
import { removeWhitespaces, looksValidContact, generateWaLink } from '../utils';

class Redirect extends React.Component {
  componentDidMount() {
    const parsedUrl = new URL(window.location.toString());
    const contact = removeWhitespaces(parsedUrl.searchParams.get('text'));


    document.querySelector('#__next').append(
      `Text shared: ${parsedUrl.searchParams.get('text')}`
    );

    document.querySelector('#__next').append(
      `Cleaned contact: ${contact}`
    );

    if (looksValidContact(contact)) {
      document.querySelector('#__next').append('Looks like a valid contact');
      const waLink = generateWaLink(contact.replaceAll(/[^0-9]/g, ''));
      window.open(generateWaLink(contact), '_blank');
    } else {
      document.querySelector('#__next').append('Seems like the contact number is not proper. Confirm once, maybe?');
      // window.alert('Seems like the contact number is not proper. Confirm once, maybe?');
    }
  }
  render() {
    return (
      'Opening in whatsapp...'
    );
  }
}

export default Redirect;