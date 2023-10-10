import React from 'react'

function Accordion ({faq, index, toggleFAQ1,toggleFAQ2}) {
	return (
	<div>
			<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ1(index)}
			// onClick={() => toggleFAQ2(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	</div>
	)
}

export default Accordion