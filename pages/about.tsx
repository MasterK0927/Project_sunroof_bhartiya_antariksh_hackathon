import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutHeader = styled.header`
  background-color: #f7c948;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  color: #333;
`;

const HeaderSubtitle = styled.p`
  margin: 0;
  color: #555;
`;

const AboutContent = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
`;

const About: React.FC = () => {
    return (
        <AboutContainer>
            <AboutHeader>
                <HeaderTitle>Project Sunroof India</HeaderTitle>
                <HeaderSubtitle>Empowering India with Solar Energy</HeaderSubtitle>
            </AboutHeader>
            <AboutContent>
                <Section>
                    <SectionTitle>About the Project</SectionTitle>
                    <p>
                        Project Sunroof India is an initiative to help individuals and organizations in India to harness the power of solar energy.
                        Our goal is to make it easier for everyone to switch to solar energy and contribute to a greener planet.
                    </p>
                </Section>
                <Section>
                    <SectionTitle>Features</SectionTitle>
                    <FeatureList>
                        <FeatureItem>Calculate potential solar savings</FeatureItem>
                        <FeatureItem>Find local solar providers</FeatureItem>
                        <FeatureItem>Get personalized solar recommendations</FeatureItem>
                    </FeatureList>
                </Section>
                <Section>
                    <SectionTitle>Our Team</SectionTitle>
                    <p>
                        Our team is comprised of experts in renewable energy, technology, and data analysis. We are passionate about making solar energy accessible to everyone in India.
                    </p>
                </Section>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
