import * as React from 'react'
import './faq.scss'

import Loading from '../../Components/Loading/Loading'
import { useState, useEffect } from 'react'
import Accordion from '../Accordion'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function Faq() {
  const [faqs1, setfaqs1] = useState([
    {
      question: 'Which material types can you work with?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Is smart lock required for instant apps?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Can I have multiple activities in a single feature?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Which material types can you work with?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Why choose our services in your business?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'How to get start with us?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Why choose our services in your business?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
  ])

  const [faqs2, setfaqs2] = useState([
    {
      question: 'Why choose our services in your business?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Which material types can you work with?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Is smart lock required for instant apps?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Why choose our services in your business?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },

    {
      question: 'Can I have multiple activities in a single feature?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'Which material types can you work with?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
    {
      question: 'How to get start with us?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
      open: false,
    },
  ])

  const toggleFAQ1 = (index) => {
    setfaqs1(
      faqs1.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      })
    )
  }

  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
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
        <div className='faqSection-1'>
            <div className='faqHeader'>
           
           
          <div className="container">
          <div className='faqTitle'>
                <h2>
                  F<span>A</span>Q
                </h2>
              </div>
          </div>
              <div className='faqLinks'>
                <Link to='/home' className='homeLink'>
                  Home
                </Link>
                <FaAngleRight className='angleIcon' />
                <Link to='faq'>FAQ</Link>
              </div>
        
            </div>
            <div className='faqTitleBottom'>
              <p className='about-description'>ABOUT OUR SERVICES</p>
              <h2>Frequently asked questions</h2>
              <p className='faqDescription'>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication.
              </p>
            </div>
    <div className="container">
    <div className='faqsContainer'>
              <div className='faqs'>
                {faqs1.map((faq, i) => (
                  <Accordion faq={faq} index={i} toggleFAQ1={toggleFAQ1} />
                ))}
              </div>
              <div className='faqs'>
                {faqs2.map((faq, i) => (
                  <Accordion faq={faq} index={i} toggleFAQ2={toggleFAQ1} />
                ))}
              </div>
            </div>
    </div>
          </div>
          <div className='container'>b
         <div className='faqSection-2'>
            <div className='faqTitleBottom'>
              <p className='about-description'>Contact Us</p>
              <h2>Do you have any questions?</h2>
              <p className='faqDescription'>
                Real innovations and a positive customer experience are the
                heart of successful communication. No fake products and
                services.
              </p>
              <div className='section-2-content'>
                <div className='left'>
                  <img src='https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/faq-contact-1-1.png' />
                </div>
                <div className='right'>
                  <form>
                    <div className='inputs'>
                      <input type='text' />
                      <input type='email' />
                    </div>
                    <div className='inputs'>
                      <input type='number' />
                      <input type='Subject' />
                    </div>
                    <textarea name='' id='' cols='30' rows='10'></textarea>
                    <button>
                   <span>SEND MESSAGE</span>
                      </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

         </div>
          {/* <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}

          {/* <div className="faqContainer">
           <div className='accordion'>
              <div className='accordion__accordionItem'>
                <button id='accordian-btn-1' aria-expanded='false'>
                
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                    <span className='accordion__accordianTitle'>
                    Which material types can you work with?
                  </span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-2' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                    Is smart lock required for instant apps?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
       
              <div className='accordion__accordionItem'>
                <button id='accordian-btn-3' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Can I have multiple activities in a single feature?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-4' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Which material types can you work with?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-5' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Why choose our services in your business?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-6' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  How to get start with us?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
 
              <div className='accordion__accordionItem'>
                <button id='accordian-btn-7' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Why choose our services in your business?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className='accordion'>
              <div className='accordion__accordionItem'>
                <button id='accordian-btn-1' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                    Which material types can you work with?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-2' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                    Is smart lock required for instant apps?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
       
              <div className='accordion__accordionItem'>
                <button id='accordian-btn-3' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Can I have multiple activities in a single feature?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-4' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Which material types can you work with?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-5' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Why choose our services in your business?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>

              <div className='accordion__accordionItem'>
                <button id='accordian-btn-6' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  How to get start with us?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
 
              <div className='accordion__accordionItem'>
                <button id='accordian-btn-7' aria-expanded='false'>
                  <span className='accordion__accordianTitle'>
                  Why choose our services in your business?
                  </span>
                  <span
                    className='accordion__faqIcon'
                    aria-hidden='true'
                  ></span>
                </button>
                <div className='accordion__accordianContent'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
            </div>
           </div> */}
        </>
      )}
    </>
  )
}
