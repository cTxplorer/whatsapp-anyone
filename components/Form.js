import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { posthog } from 'posthog-js';
import { isPossibleNumber } from 'libphonenumber-js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactVal: '',
      contact: '',
      messageText: 'Hi!',
      showCCPrompt: false,
    }
  }

  onPhoneChange = (value, country) => {
    let isValid = false // Basic validation
    if (country.countryCode) {
      localStorage.setItem("lastSelectedCountryIso2", country.countryCode);
      isValid = isPossibleNumber(value, country.countryCode?.toUpperCase());
    }
    this.setState({
      contactVal: value,
      contact: value,
      isValid,
      showCCPrompt: false,
    });
    this.forceUpdate();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    if (this.state.isValid) {
      const fullContact = this.state.contact;
      const encodedMsg = encodeURIComponent(this.state.messageText);
      const waLink = `https://wa.me/${fullContact}?text=${encodedMsg}`;
      posthog.capture('WA - Opened WA chat');
      window.open(waLink, "_blank");
    } else {
      document
        .getElementsByClassName('wa-form')[0]
        .getElementsByTagName('input')[0]
        .focus();
      posthog.capture('WA - Viewed Phone Input Error');
      this.setState({ showCCPrompt: true });
    }
  }

  render() {
    const { country } = this.props;
    return (
      <form className="wa-form" onSubmit={this.handleSubmit}>
        <div className={`error ${this.state.showCCPrompt ? 'visible show-error' : ''}`}>
          <div className="error-arrow">⤴</div>
          <div className='error-text'>the phone number seems correct!</div>
        </div>
        <div className="form-inputs">
          <div className="phone-input-container-1">
            <PhoneInput
              country={country || 'in'}
              value={this.state.contactVal}
              onChange={this.onPhoneChange}
              preferredCountries={['in', 'ca', 'my', 'sg', 'gb', 'us']}
              dropdownClass='country-list-custom'
              buttonClass='selected-flag-btn-custom'
              searchClass='search-container-custom'
              inputProps={{
                name: 'phone',
              }}
              enableSearch={true}
              searchPlaceholder="Search country"
              jumpCursorToEnd
            />
          </div>
          <button type="submit" id="primary-cta" style={{ opacity: this.state.isValid ? 1 : 0.9 }}>
            Open in WhatsApp
          </button>
        </div>
      </form>
    )
  }
}

export default Form;