import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import '../../css/mailer.css';

export class MailerSend extends Component {
  static displayName = MailerSend.name;

  constructor(props) {
    super(props);
    this.state = {
      mailingLists: undefined,
      templates: undefined,
      selectedMailingList: undefined,
      selectedTemplate: undefined,
      message: "",
      isSignedIn: false
    };
  }

  componentDidMount() {
    this.populateMailingLists();
    this.populateTemplates();

    const element = document.getElementsByTagName("script")[0];
    const fjs = element;
    let js = document.createElement("script");
    js.id = "google-mail";
    js.src = "https://apis.google.com/js/api.js";
    if (fjs && fjs.parentNode) {
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      document.head.appendChild(js);
    }
    js.onload = this.callback.bind(this)
  }

  callback() {
    window.gapi.load('client:auth2', this.initClient.bind(this));
  }

  updateSigninStatus(isSignedIn) {
    this.setState({
      isSignedIn: isSignedIn
    });
  }

  send() {
    let template = this.state.selectedTemplate;
    let fromEmail = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()
    this.state.selectedMailingList.mailingLists.forEach((mailingListContactLink) => {
      let contact = mailingListContactLink.contact;
      let emailBody = template.body
        .replace("{firstName}", contact.firstName)
        .replace("{lastName}", contact.lastName)
        .replace("{phone}", contact.phone)
        .replace("{email}", contact.email)
        .replace("{company}", contact.company);

      const message =
        "From: " + fromEmail + "\r\n" +
        "To: " + contact.email + "\r\n" +
        "Subject: " + template.subject + "\r\n\r\n" +
        emailBody;

      // The body needs to be base64url encoded.
      const encodedMessage = btoa(message).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

      window.gapi.client.gmail.users.messages.send({
        'userId': 'me',
        resource: {
          raw: encodedMessage
        }
      }).then(function (response) {
        console.log('Message sent.');
      }, function (error) {
        console.log(error);
      });
    });
  }

  getAuthButton() {
    return !this.state.isSignedIn ?
      <button className="btn btn-primary" onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>Authorize</button> :
      (
        <div>
          <button className="btn btn-primary" onClick={this.send.bind(this)}>Send</button>
          <button className="btn" onClick={() => window.gapi.auth2.getAuthInstance().signOut()}>Sign Out</button>
        </div>
      );
  }

  initClient() {
    let mailerPage = this;
    window.gapi.client.init({
      clientId: "", //REPLACE WITH YOUR OWN CLIENT ID
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
      scope: "https://mail.google.com/"
    }).then(function () {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(mailerPage.updateSigninStatus.bind(mailerPage));

      // Handle the initial sign-in state.
      mailerPage.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function (error) {
        this.setState({
          message: error.details
        });
    });
  }

  setSelectedMailingList(value) {
    let selectedMailingList = this.state.mailingLists.find(mailingList => mailingList.id === parseInt(value));
    this.setState({
      selectedMailingList: selectedMailingList
    });
  }

  renderMailingLists() {
    return (
      <div>
        <select class="custom-select" value={this.state.selectedMailingList.id} onChange={e => this.setSelectedMailingList(e.target.value)}>
          {this.renderMailingListOptions()}
        </select>
        <h2>Contacts</h2>
        {this.state.selectedMailingList.mailingLists.map(mailingListContactLink => <p>{mailingListContactLink.contact.firstName} {mailingListContactLink.contact.lastName} - {mailingListContactLink.contact.email}</p>)}
      </div>
    );
  }

  renderMailingListOptions() {
    return this.state.mailingLists.map((mailingList) => {
      return <option value={mailingList.id} key={mailingList.id}>{mailingList.name}</ option>
    });
  }

  setSelectedTemplate(value) {
    let selectedTemplate = this.state.templates.find(template => template.id === parseInt(value));
    this.setState({
      selectedTemplate: selectedTemplate
    });
  }

  renderTemplates() {
    return (
      <div className="template-display">
        <select class="custom-select" value={this.state.selectedTemplate.id} onChange={e => this.setSelectedTemplate(e.target.value)}>
          {this.renderTemplateOptions()}
        </select>
        <h3>{this.state.selectedTemplate.name}</h3>
        <p>{this.state.selectedTemplate.subject}</p>
        <p>{this.state.selectedTemplate.body}</p>
      </div>
    );
  }

  renderTemplateOptions() {
    return this.state.templates.map((template) => {
      return <option value={template.id} key={template.id}>{template.name}</ option>
    });
  }

  render() {
    let loading = <p><em>Loading...</em></p>;
    let mailingListsContent = this.state.mailingLists === undefined
      ? loading
      : this.renderMailingLists();

    let templatesContent = this.state.templates === undefined
      ? loading
      : this.renderTemplates();

    return (
      <div>
        <h1 id="tabelLabel">Mailer</h1>
        {this.getAuthButton()}
        <h2>Mailing Lists</h2>
        {mailingListsContent}
        <h2>Templates</h2>
        {templatesContent}
      </div>
    );
  }

  async populateMailingLists() {
    const token = await authService.getAccessToken();
    const response = await fetch('mailinglist', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({
      mailingLists: data,
      selectedMailingList: data.length > 0 ? data[0] : undefined
    });
  }

  async populateTemplates() {
    const token = await authService.getAccessToken();
    const response = await fetch('template', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({
      templates: data,
      selectedTemplate: data.length > 0 ? data[0] : undefined
    });
  }

  async populateContacts() {
    const token = await authService.getAccessToken();
    const response = await fetch('contact', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ contacts: data });
  }
}
