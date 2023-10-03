import React from 'react';

import { MainSection } from './Section.styled';

class Section extends React.Component {
  render() {
    return (
      <MainSection>
        <h1>Please leave a feedback</h1>
        {this.props.children}
      </MainSection>
    );
  }
}

export default Section;
