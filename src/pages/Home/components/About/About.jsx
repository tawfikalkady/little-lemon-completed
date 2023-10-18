import { Heading, Stack } from '../../../../components';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="3rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading>Little Lemon Restaurant</Heading>
            <p>Cairo</p>
          </Stack.Item>

          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pastas_-BfcomSI5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273746"
                alt="Little Lemon - Burritos"
              />
            </div>
            <div id="about-second-image">
              <img
                src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-hero_szKmkAXsc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675005773288"
                alt="Little Lemon - Pastas"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
