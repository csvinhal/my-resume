import React, { Component } from 'react';
import Layout from '../../../hoc/Layout';

class MyResume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div>
          My resumes
        </div>
      </Layout>
    );
  }
}

export default MyResume;
