import * as React from "react";
import "./faq.scss";

import Loading from "../../Components/Loading/Loading";
import { useState, useEffect } from "react";
import Accordion from "../Accordion";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export default function Faq() {
  const [faqs1, setfaqs1] = useState([
    {
      question: "Which material types can you work with?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Is smart lock required for instant apps?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Can I have multiple activities in a single feature?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Which material types can you work with?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Why choose our services in your business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "How to get start with us?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Why choose our services in your business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
  ]);

  const [faqs2, setfaqs2] = useState([
    {
      question: "Why choose our services in your business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Which material types can you work with?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Is smart lock required for instant apps?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Why choose our services in your business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },

    {
      question: "Can I have multiple activities in a single feature?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "Which material types can you work with?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
    {
      question: "How to get start with us?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      open: false,
    },
  ]);

  const toggleFAQ1 = (index) => {
    setfaqs1(
      faqs1.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  const toggleFAQ2 = (index) => {
    setfaqs2(
      faqs1.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // const Accordion = styled((props) => (
  //   <MuiAccordion disableGutters elevation={0} square {...props} />
  // ))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  //   '&:not(:last-child)': {
  //     borderBottom: 0,
  //   },
  //   '&:before': {
  //     display: 'none',
  //   },
  // }))

  // const AccordionSummary = styled((props) => (
  //   <MuiAccordionSummary
  //     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
  //     {...props}
  //   />
  // ))(({ theme }) => ({
  //   backgroundColor:
  //     theme.palette.mode === 'dark'
  //       ? 'rgba(255, 255, 255, .05)'
  //       : 'rgba(0, 0, 0, .03)',
  //   flexDirection: 'row-reverse',
  //   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //     transform: 'rotate(90deg)',
  //   },
  //   '& .MuiAccordionSummary-content': {
  //     marginLeft: theme.spacing(1),
  //   },
  // }))

  // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  // }))

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="faqSection-1">
            <div className="faqHeader">
              <div className="container">
                <div className="faqTitle">
                  <h2>
                    F<span>A</span>Q
                  </h2>
                </div>
              </div>
              <div className="faqLinks">
                <Link to="/home" className="homeLink">
                  Home
                </Link>
                <FaAngleRight className="angleIcon" />
                <Link to="faq">FAQ</Link>
              </div>
            </div>
            <div className="faqTitleBottom">
              <p className="about-description">ABOUT OUR SERVICES</p>
              <h2>Frequently asked questions</h2>
              <p className="faqDescription">
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication.
              </p>
            </div>
            <div className="container">
              <div className="faqsContainer">
                <div className="faqs">
                  {faqs1.map((faq, i) => (
                    <Accordion faq={faq} index={i} toggleFAQ1={toggleFAQ1} />
                  ))}
                </div>
                <div className="faqs">
                  {faqs2.map((faq, i) => (
                    <Accordion faq={faq} index={i} toggleFAQ2={toggleFAQ2} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            
          </div>
          
        </>
      )}
    </>
  );
}
