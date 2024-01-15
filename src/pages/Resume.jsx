import React, { Component } from 'react';
import * as stylex from '@stylexjs/stylex';
import '../assets/resume.css';

// Icons
import { EnvelopeAt, GeoAlt, Telephone } from 'react-bootstrap-icons';


const styles = stylex.create({
  resumeBase: {
    fontFamily: 'Times New Roman, Times, serif',
    backgroundColor: 'antiquewhite',
    height: '100vh',
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    overflowY: 'auto',

  },
  resumeContainer: {
    maxWidth: '950px',
    width: '100%',
    margin: '0 auto',
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: {
      'default': '0px',
      '@media (max-width: 715px)': '20px',
    },
  },
  resumeCLeft: {
    backgroundColor: 'rgb(64, 64, 64)',
    flexGrow: {
      'default': '0',
      '@media (max-width: 715px)': '1',
    },
    flexBasis: {
      'default': '300px',
      '@media (max-width: 715px)': '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    color: 'white',
    borderTopLeftRadius: {
      'default': '5px',
      '@media (max-width: 715px)': '0px',
    },
    borderBottomLeftRadius: {
      'default': '5px',
      '@media (max-width: 715px)': '0px',
    },
    padding: '20px',
    margin: '0 auto',
  },
  resumeCLHeadshot: {
    borderRadius: '50%',
    border: '5px solid white',
    margin: '20px 0px',
  },
  resumeCRight: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '300px',
    padding: '20px',
    gap: '20px',
    borderTopRightRadius: {
      'default': '5px',
      '@media (max-width: 715px)': '0px',
    },
    borderBottomRightRadius: {
      'default': '5px',
      '@media (max-width: 715px)': '0px',
    },
  },
  link: (color) => ({
    color: color ? color : 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  }),
  alignCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '5px',
  },
  hr: (color) => ({
    borderTop: color ? `1px solid ${color}` : '1px solid black',
    width: '100%',
    margin: '0',
    padding: '0',
    display: 'flex',
  }),
  alignLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: {
      'default': 'flex-start',
      '@media (max-width: 715px)': 'center',
    },
    flexDirection: 'column',
    gap: '5px',
    width: '100%',
  },
  ul: {
    marginLeft: '20px',
  },
  heading: {
    fontFamily: 'IM Fell English, serif',
    textTransform: 'uppercase',
    margin: '0',
    padding: '0',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  width50: {
    width: '50%',
  },
});

export default class Resume extends Component {
  render() {
    return (
      <div
        {...stylex.props(styles.resumeBase)}
      >
        <div
          {...stylex.props(styles.resumeContainer)}
        >
          <div
            {...stylex.props(styles.resumeCLeft)}
          >
            <img src="headshot.jpg" alt="Aaron K. Henderson" {...stylex.props(styles.resumeCLHeadshot)} />
            <hr
              {...stylex.props(styles.hr('white'))}
            />
            <div {...stylex.props(styles.alignCenter)}>
              <EnvelopeAt size={24}/>
              <a
                {...stylex.props(styles.link('white'))}
                href="mailto:resume@henderson5.com?subject=Online%20Resume">resume@henderson5.com</a>
            </div>
            <div {...stylex.props(styles.alignCenter)}>
              <Telephone size={24}/>
              <a
                {...stylex.props(styles.link('white'))}
                href="tel:9893151295">989-315-1295</a>
            </div>
            <div {...stylex.props(styles.alignCenter)}>
              <GeoAlt size={24}/>
              <a
                {...stylex.props(styles.link('white'))}
                href="https://www.google.com/maps/place/Bad+Axe,+MI+48413/@43.8041381,-83.0179099,14z/"
                target='_blank'
                rel='noreferrer'
              >Bad Axe, MI</a>
            </div>
            <hr
              {...stylex.props(styles.hr('white'))}
            />
            <div {...stylex.props(styles.alignLeft)}>
              <h2
                {...stylex.props(styles.heading)}
              >Education</h2>
              <ul
                {...stylex.props(styles.ul)}
              >
                <li>Master&apos;s from Baker College<br /><small>Computer Information Sciences (2019)</small></li>
                <li>Bachelor&apos;s from Baker College<br /><small>Computer Information Sciences (2016)</small></li>
                <li>Associate&apos;s from Baker College<br /><small>Computer Information Sciences (2013)</small></li>
              </ul>
            </div>
            <hr
              {...stylex.props(styles.hr('white'))}
            />
          </div>
          <div
            {...stylex.props(styles.resumeCRight)}
          >
            <h1
              {...stylex.props(styles.heading)}
            >Aaron K. Henderson</h1>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <h2
              {...stylex.props(styles.heading)}
            >Professional Experience</h2>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <div {...stylex.props(styles.spaceBetween)}>
              <h4
                {...stylex.props(styles.heading)}
              >IT Systems Administrator</h4>
              <h5
                {...stylex.props(styles.heading, styles.textAlignRight)}
              >
                <a
                  {...stylex.props(styles.link('darkblue'))}
                  href="https://srspharmacy.com"
                  target='_blank'
                  rel='noreferrer'
                >SRS Pharmacy Systems Inc.</a><br />
                Sept. 2020 - Present</h5>
            </div>
            <ul
              {...stylex.props(styles.ul)}
            >
              <li>Assist IT Manager in daily, weekly, and monthly duties</li>
              <li>Maintain internal and external networks</li>
              <li>Deploy and update CentOS and Debian servers, AWS, physical, and vCenter</li>
              <li>Configure and maintain MacOS workstations</li>
              <li>Assist in development of web software and services for internal and external use</li>
            </ul>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <div {...stylex.props(styles.spaceBetween)}>
              <h4
                {...stylex.props(styles.heading)}
              >IT Manager</h4>
              <h5
                {...stylex.props(styles.heading, styles.textAlignRight)}
              >
                <a
                  {...stylex.props(styles.link('darkblue'))}
                  href="https://www.scheurer.org/"
                  target='_blank'
                  rel='noreferrer'
                >Scheurer Hospital</a><br />
                Dec. 2019 - Sept. 2020</h5>
            </div>
            <ul
              {...stylex.props(styles.ul)}
            >
              { /* eslint-disable-next-line max-len */ }
              <li>Effectively manage IT Support staff in day-to-day operations, including help desk, network administration, and server administration</li>
              <li>Deployed new Electronic Health Record system</li>
              { /* eslint-disable-next-line max-len */ }
              <li>Design and deploy IT infrastructure for two new building projects:<br />Scheurer Health FastCare Bad Axe and Scheurer Primary Care Bad Axe</li>
            </ul>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <div {...stylex.props(styles.spaceBetween)}>
              <h4
                {...stylex.props(styles.heading)}
              >Network Administrator</h4>
              <h5
                {...stylex.props(styles.heading, styles.textAlignRight)}
              >
                <a
                  {...stylex.props(styles.link('darkblue'))}
                  href="https://avci.net/"
                  target='_blank'
                  rel='noreferrer'
                >Agri-Valley Communications Inc.</a><br />
                Oct. 2017 - Dec. 2019</h5>
            </div>
            <ul
              {...stylex.props(styles.ul)}
            >
              <li>Implement, configured, and maintain all aspects of network infrastructure</li>
              { /* eslint-disable-next-line max-len */ }
              <li>Work closely with NOC on monitoring all servers, applications, network devices, and connections along with customer traffic, using specific custom built tools</li>
              <li>Serve as Tier I response for network issues and as Tier III for all escalated customer complaints</li>
              { /* eslint-disable-next-line max-len */ }
              <li>Responsible for administering all security measures to control internal/external access to the corporate network</li>
            </ul>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <div {...stylex.props(styles.spaceBetween)}>
              <h4
                {...stylex.props(styles.heading)}
              >Systems Analyst / Programmer</h4>
              <h5
                {...stylex.props(styles.heading, styles.textAlignRight)}
              >
                <a
                  {...stylex.props(styles.link('darkblue'))}
                  href="https://www.co.huron.mi.us/"
                  target='_blank'
                  rel='noreferrer'
                >Huron County</a><br />
                Jan. 2015 - Oct. 2017</h5>
            </div>
            <ul
              {...stylex.props(styles.ul)}
            >
              <li>Provide analysis of computer information systems</li>
              <li>Research and implement new systems</li>
              { /* eslint-disable-next-line max-len */ }
              <li>Manage Active Directory and Exchange servers</li>
              <li>Manage network infrastructure</li>
              <li>General IT Services</li>
            </ul>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <h2
              {...stylex.props(styles.heading)}
            >Notable Skills</h2>
            <hr
              {...stylex.props(styles.hr('black'))}
            />
            <div {...stylex.props(styles.spaceBetween)}>
              <ul
                {...stylex.props(styles.ul, styles.width50)}
              >
                <li>Computer Information Systems
                  <ul {...stylex.props(styles.ul)}>
                    <li>Windows 10/11</li>
                    <li>Linux (CentOS, Debian, RHEL)</li>
                    <li>MacOS</li>
                  </ul>
                </li>
                <li>Networking
                  <ul {...stylex.props(styles.ul)}>
                    <li>Firewalls</li>
                    <li>Wireless</li>
                    <li>VPN</li>
                  </ul>
                </li>
                <li>Virtualization
                  <ul {...stylex.props(styles.ul)}>
                    <li>AWS E2</li>
                    <li>VMWare</li>
                  </ul>
                </li>
              </ul>
              <ul
                {...stylex.props(styles.ul, styles.width50)}
              >
                <li>Web Development
                  <ul {...stylex.props(styles.ul)}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
