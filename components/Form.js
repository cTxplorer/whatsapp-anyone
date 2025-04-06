import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import { posthog } from 'posthog-js'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactVal: '',
      contact: '',
      messageText: 'Hello 👋',
      showCCPrompt: false,
    }
  }

  onSelectFlag = (inputVal, countryDetails, number, isValid) => {
    if (countryDetails.iso2)
      localStorage.setItem("lastSelectedCountryIso2", countryDetails.iso2);
    this.setState({
      contactVal: inputVal.replace(/[^0-9]/g, ''),
      contact: number.replace(/[^0-9]/g, ''),
      isValid,
      showCCPrompt: false,
    });
    this.forceUpdate();
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
    const { country} = this.props;
    return (
      <form className="wa-form" onSubmit={this.handleSubmit}>
        {/* <div className={`error ${this.state.showCCPrompt ? 'visible' : ''}`}>
          <div className="arrow">⤴</div> <div> contact seems to be incorrect 👀</div>
        </div> */}
        <div className="form-inputs">
          <IntlTelInput
            key={country}
            defaultCountry={country}
            autoFocus
            preferredCountries={['in', 'ca','my','sg','gb','us']}
            containerClassName="intl-tel-input"
            inputClassName={this.state.showCCPrompt ? 'show-error' : ''}
            fieldName="contact"
            onPhoneNumberChange={this.onPhoneNumberChange}
            onSelectFlag={this.onSelectFlag}
          />
          <button type="submit" id="primary-cta" style={{opacity: this.state.isValid ? 1 : 0.7}}>Open WhatsApp Chat</button>
        </div>
      </form>
      // <>
      // <style jsx global>{`
      //   #wa-form > * {
      //     max-width: 100%;
      //     width: 400px;
      //   }
      // `}</style>

      // <form onSubmit={this.handleSubmit} id="wa-form" className="my-5 d-flex flex-column align-items-center">
      //   {/* <CountryDropdown
      //     name="countryCode"
      //     value={this.state.countryCode}
      //     onChange={this.handleInputChange}
      //   /> */}

      //   <div className="form-group">
      //     <div className="input-group">
      //       {/* <div className="input-group-prepend">
      //         <span className="input-group-text">{this.state.countryCode}</span>
      //       </div> */}
      //       <input
      //         name="contact"
      //         type="tel"
      //         onChange={this.handleInputChange}
      //         className="form-control form-control-lg"
      //         placeholder="contact number"
      //       />
      //     </div>
      //   </div>

      //   {/* <div className="form-group">
      //     <textarea
      //       className="form-control"
      //       onChange={this.handleInputChange}
      //       name="messageText"
      //       rows="3"
      //       placeholder="Message (Optional)"></textarea>
      //   </div> */}

      //   <button type="submit" className="btn btn-success" >Start WhatsApp Chat</button>
      // </form>
      // </>
    )
  }
}

export default Form;