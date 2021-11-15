import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService'

export class MailerSend extends Component {
  static displayName = MailerSend.name;

  constructor(props) {
    super(props);
    this.state = {
      mailingLists: undefined,
      templates: undefined
    };
  }

  componentDidMount() {
    this.populateMailingLists();
    this.populateTemplates();
  }

  renderMailingLists() {
    return (
      <div>MailingLists</div>
    );
  }

  renderTemplates() {
    return (
      <div>Templates</div>
    );
  }

  render() {
    let loading = <p><em>Loading...</em></p>;
    let mailingListsContent = this.state.mailingLists
      ? loading
      : this.renderMailingLists();

    let templatesContent = this.state.templates
      ? loading
      : this.renderTemplates();

    return (
      <div>
        <h1 id="tabelLabel">Mailer</h1>
        <h2>Mailing Lists</h2>
        {mailingListsContent}
        <h2>Mailing Lists</h2>
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
    this.setState({ mailingLists: data });
  }

  async populateTemplates() {
    const token = await authService.getAccessToken();
    const response = await fetch('template', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ templates: data });
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
