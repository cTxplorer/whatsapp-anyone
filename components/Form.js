import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import CountryDropdown from './CountryDropdown';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactVal: '',
      contact: '',
      showCCPrompt: false,
    }
  }

  onSelectFlag = (inputVal, countryDetails, number, isValid) => {
    this.setState({
      contactVal: inputVal.replace(/[^0-9]/g, ''),
      contact: number.replace(/[^0-9]/g, ''),
      isValid,
      showCCPrompt: false,
    });
  }

  onPhoneNumberChange = (isValid, inputVal, countryDetails, number) => {
    this.setState({
      contactVal: inputVal.replace(/[^0-9]/g, ''),
      contact: number.replace(/[^0-9]/g, ''),
      isValid,
      showCCPrompt: false,
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    if (this.state.isValid) {
      const fullContact = this.state.contact;
      const waLink = `https://wa.me/${fullContact}`;
      window.open(waLink, "_blank");
    } else {
      document
        .getElementsByClassName('wa-form')[0]
        .getElementsByTagName('input')[0]
        .focus();
      this.setState({ showCCPrompt: true });
    }
  }

  render() {
    return (

      <form className="wa-form" onSubmit={this.handleSubmit}>

        <IntlTelInput
          preferredCountries={['in','us','ca','de']}
          containerClassName="intl-tel-input"
          inputClassName={this.state.showCCPrompt ? 'show-error' : ''}
          fieldName="contact"
          onPhoneNumberChange={this.onPhoneNumberChange}
          onSelectFlag={this.onSelectFlag}
        />

        <input
          type="submit"
          value=""
          className="submit-btn"
          style={{opacity: this.state.isValid ? 1 : 0.95}}
        />

      </form>
    )
  }
}

export default Form;