import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import { Link } from 'react-router-dom';

export class MailerHome extends Component {
  static displayName = MailerHome.name;

  constructor(props) {
    super(props);
    this.state = {
      mailingLists: undefined,
      templates: undefined,
      contacts: undefined
    };
  }

  componentDidMount() {
    this.populateMailingLists();
    this.populateContacts();
    this.populateTemplates();
  }

  renderMailingLists() {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {this.state.mailingLists.map(mailingList =>
            <tr key={mailingList.id}>
              <td>{mailingList.name}</td>
              <td>{mailingList.mailingLists.length}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  renderContacts() {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(contact =>
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.company}</td>
              <td>{contact.phone}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  renderTemplates() {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {this.state.templates.map(template =>
            <tr key={template.id}>
              <td>{template.name}</td>
              <td>{template.subject}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let loading = <p><em>Loading...</em></p>;
    let mailingListsContent = this.state.mailingLists === undefined
      ? loading
      : this.renderMailingLists();

    let contactsContent = this.state.contacts === undefined
      ? loading
      : this.renderContacts();

    let templatesContent = this.state.templates === undefined
      ? loading
      : this.renderTemplates();

    return (
      <div>
        <h1 id="tabelLabel">Mailer</h1>
        <Link className="btn btn-primary" to="/mailer/send">Send Mail</Link>
        <h2>Mailing Lists</h2>
        {mailingListsContent}
        <h2>Contacts</h2>
        {contactsContent}
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
