import { MainSection } from './Section.styled';

const Section = ({children}) =>  {

    return (
      <MainSection>
        <h1>Please leave a feedback</h1>
        {children}
      </MainSection>
    );
}

export default Section;
