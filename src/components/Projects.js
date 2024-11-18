import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png"; // Replace with real images
import projImg2 from "../assets/img/project-img2.png"; // Replace with real images
import projImg3 from "../assets/img/project-img3.png"; // Replace with real images
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // Web Projects
    {
      title: "E-Commerce Website",
      description: "Design & Development of a fully functional online store with a user-friendly interface.",
      imgUrl: projImg1,
      link: "https://github.com/your-username/e-commerce-website"  // Add the actual link
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills in web development and design.",
      imgUrl: projImg2,
      link: "https://github.com/your-username/portfolio-website"  // Add the actual link
    },
    {
      title: "Weather Forecast Website",
      description: "A website that provides real-time weather data, forecasts, and interactive maps.",
      imgUrl: projImg3,
      link: "https://github.com/your-username/weather-forecast-website"  // Add the actual link
    },
    // Mobile Apps
    {
      title: "Mobile App for Fitness",
      description: "A fitness tracking mobile app built for users to monitor their daily activity and workouts.",
      imgUrl: projImg1,
      link: "https://github.com/your-username/fitness-mobile-app"  // Add the actual link
    },
    {
      title: "Real Estate App",
      description: "A real estate mobile app that helps users search for properties and contact agents directly.",
      imgUrl: projImg2,
      link: "https://github.com/your-username/real-estate-app"  // Add the actual link
    },
    {
      title: "Task Management App",
      description: "An app designed for task management, allowing teams to organize, assign, and track tasks.",
      imgUrl: projImg3,
      link: "https://github.com/your-username/task-management-app"  // Add the actual link
    },
    // Other Projects
    {
      title: "Machine Learning Model",
      description: "A predictive model for detecting patterns in large datasets.",
      imgUrl: projImg1,
      link: "https://github.com/your-username/machine-learning-model"  // Add the actual link
    },
    {
      title: "Chatbot for Customer Support",
      description: "A chatbot application that automates customer support and improves user experience.",
      imgUrl: projImg2,
      link: "https://github.com/your-username/chatbot-customer-support"  // Add the actual link
    },
    {
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard displaying key metrics and insights from big data.",
      imgUrl: projImg3,
      link: "https://github.com/your-username/data-analytics-dashboard"  // Add the actual link
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>Explore some of the exciting projects I've worked on, showcasing my skills in web development, app development, and more. Each project reflects my passion for creating innovative solutions and my commitment to excellence in every aspect of design and functionality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>Other Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.filter(project => project.title.includes("Website")).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.filter(project => project.title.includes("App")).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.filter(project => !project.title.includes("App") && !project.title.includes("Website")).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
