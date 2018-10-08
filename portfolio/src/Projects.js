import React from "react";
import {
  Image,
  Grid,
  Container,
  Modal,
  Responsive,
  Label,
  Icon,
  Header,
  Transition
} from "semantic-ui-react";
let drippyDesktop = require("./assets/drippyclub-desktop.png");
let drippyMobile1 = require("./assets/drippyclub-mobile1.png");
let drippyMobile2 = require("./assets/drippyclub-mobile2.png");
let lacHongDesktop = require("./assets/lachong-desktop.png");
let lacHongMobile1 = require("./assets/lachong-mobile1.png");
let lacHongMobile2 = require("./assets/lachong-mobile2.png");
let ephDesktop = require("./assets/epicpethealth-desktop.png");
let ephMobile1 = require("./assets/epicpethealth-mobile1.png");
let ephMobile2 = require("./assets/epicpethealth-mobile2.png");
let breakDesktop = require("./assets/huskybreak-desktop.png");
let breakMobile1 = require("./assets/huskybreak-mobile1.png");
let breakMobile2 = require("./assets/huskybreak-mobile2.png");
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectIndex: 0,
      modalOpen: false,
      visible: true,
      projects: [
        {
          name: "drippy chat",
          description:
            "Drippy is an instant messaging application \
                    similar to slack. Allows users to signup/signin, create channels, \
                    and post messages in real time.  Features user login with HTTPS \
                    authentication, CORS middleware, local caching, and sessions / \
                    credentials encryption.",
          desktop: drippyDesktop,
          mobile1: drippyMobile1,
          mobile2: drippyMobile2,
          labels: [
            "React",
            "Node",
            "Go",
            "MongoDB",
            "Websocket",
            "RabbitMQ",
            "Redis"
          ],
          github: "https://github.com/andrenguyener/drippy-chat",
          livedemo: "https://drippy.club"
        },
        {
          name: "lac hong",
          description:
            "Lac Hong is a Vietnamese non-profit organization that \
                    I developed the front end for. Migrated over their previous files and \
                    document to work with a new system. Redesigned their pages and layout \
                    to communicate the information more effectively.",
          desktop: lacHongDesktop,
          mobile1: lacHongMobile1,
          mobile2: lacHongMobile2,
          labels: ["React", "HTML", "CSS", "Javascript"],
          github: "https://github.com/andrenguyener/lac-hong",
          livedemo: "https://andrenguyener.github.io/lac-hong/"
        },
        {
          name: "epic pet health",
          description:
            "Epic Pet Health is a Seattle based company that team members \
                    and I reached out to remodel their website. We redesigned their layout of \
                    information to help customers find products catered to their preferences",
          desktop: ephDesktop,
          mobile1: ephMobile1,
          mobile2: ephMobile2,
          labels: ["React", "HTML", "CSS", "Javascript"],
          github: "https://github.com/andrenguyener/epic-pet-health",
          livedemo: "https://andrenguyener.github.io/epic-pet-health/#/"
        },
        {
          name: "husky break",
          description:
            "Husky Break is a student organization at the University of \
                    Washington. Developed their site to inform the public about them, showcase \
                    their members, and recruit more members.",
          desktop: breakDesktop,
          mobile1: breakMobile1,
          mobile2: breakMobile2,
          labels: ["HTML", "CSS", "Javascript"],
          github: "https://github.com/andrenguyener/husky-break",
          livedemo: "https://huskybreakclub.com"
        }
      ]
    };
    this.changeProject = this.changeProject.bind(this);
  }

  changeProject(index) {
    const promise = new Promise(resolve => {
      this.setState({ visible: !this.state.visible });
      setTimeout(() => {
        resolve();
      }, 500);
    });
    promise.then(() => {
      this.setState({ currentProjectIndex: index });
      this.setState({ visible: true });
    });
  }

  show = dimmer => () => this.setState({ dimmer, modalOpen: true });
  open = () => this.setState({ modalOpen: true });
  close = () => this.setState({ modalOpen: false });

  render() {
    var projectListMobile;
    var projectListDesktop;

    if (this.state.projects) {
      projectListDesktop = this.state.projects.map((project, index) => (
        <p
          key={index}
          onClick={e => {
            this.changeProject(index);
          }}
        >
          {" "}
          {project.name}{" "}
        </p>
      ));
      projectListMobile = this.state.projects.map((project, index) => (
        <Modal
          key={index}
          dimmer={this.state.dimmer}
          trigger={<p onClick={this.show("blurring")}> {project.name} </p>}
          closeIcon
        >
          <Modal.Content scrolling>
            <Header> {project.name} </Header>
            <Container className="modal-container">
              <div>
                <Image src={project.desktop} />
                <Image className="modal-mobile-img" src={project.mobile1} />
                <Image className="modal-mobile-img" src={project.mobile2} />
              </div>
              <Modal.Description>
                <div className="modal-description">{project.description}</div>
                <div className="modal-built-with">
                  <h4> built with </h4>
                  {project.labels.map((label, index) => (
                    <Label key={index}> {label} </Label>
                  ))}
                </div>
                <div className="modal-previews">
                  <Icon
                    name="github"
                    size="big"
                    onClick={() => window.open(project.github, "_blank")}
                  />{" "}
                  <h4> github </h4>
                  <Icon
                    name="eye"
                    size="big"
                    onClick={() => window.open(project.livedemo, "_blank")}
                  />{" "}
                  <h4> live demo </h4>
                </div>
              </Modal.Description>
            </Container>
          </Modal.Content>
        </Modal>
      ));
    }

    return (
      <section id="work-section">
        <Grid>
          <Grid.Column mobile={16} tablet={4} computer={4} stretched>
            <div className="page-box">
              <Transition transitionOnMount animation="fade" duration={1300}>
                <h3> projects </h3>
              </Transition>
              <Transition transitionOnMount animation="fade" duration={2900}>
                <div className="page-description project-list">
                  <Responsive maxWidth={768}> {projectListMobile} </Responsive>
                  <Responsive minWidth={768}> {projectListDesktop} </Responsive>
                </div>
              </Transition>
            </div>
          </Grid.Column>
          <Responsive minWidth={768}>
            <Grid.Column floated="right" tablet={12}>
              <Transition
                transitionOnMount
                visible={this.state.visible}
                animation="fade"
                duration={500}
              >
                <Container className="project-image-container">
                  <div id="project-title">
                    {" "}
                    <h3>
                      {" "}
                      {
                        this.state.projects[this.state.currentProjectIndex].name
                      }{" "}
                    </h3>{" "}
                  </div>
                  <div className="desktop-svg-bg">
                    <Image
                      src={
                        this.state.projects[this.state.currentProjectIndex]
                          .desktop
                      }
                      fluid
                    />
                  </div>
                  <div id="mobile1" className="mobile-svg-bg">
                    <Image
                      src={
                        this.state.projects[this.state.currentProjectIndex]
                          .mobile1
                      }
                      fluid
                    />
                  </div>
                  <div id="mobile2" className="mobile-svg-bg">
                    <Image
                      src={
                        this.state.projects[this.state.currentProjectIndex]
                          .mobile2
                      }
                      fluid
                    />
                  </div>
                  <div id="desktop-description">
                    {
                      this.state.projects[this.state.currentProjectIndex]
                        .description
                    }
                    <div className="built-with">
                      <h4> built with </h4>
                      {this.state.projects[
                        this.state.currentProjectIndex
                      ].labels.map((label, index) => (
                        <Label key={index}> {label} </Label>
                      ))}
                    </div>
                    <div className="previews">
                      <Icon
                        name="github"
                        size="big"
                        onClick={() =>
                          window.open(
                            this.state.projects[this.state.currentProjectIndex]
                              .github,
                            "_blank"
                          )
                        }
                      />{" "}
                      <h4> github </h4>
                      <Icon
                        name="eye"
                        size="big"
                        onClick={() =>
                          window.open(
                            this.state.projects[this.state.currentProjectIndex]
                              .livedemo,
                            "_blank"
                          )
                        }
                      />{" "}
                      <h4> live demo </h4>
                    </div>
                  </div>
                </Container>
              </Transition>
            </Grid.Column>
          </Responsive>
        </Grid>
      </section>
    );
  }
}

export default Projects;
