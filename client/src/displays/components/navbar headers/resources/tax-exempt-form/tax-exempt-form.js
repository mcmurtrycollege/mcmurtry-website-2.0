import React from 'react';
import Title from '../../../title';
import './tax-exempt-form.css';


const TaxExempt = () => (
    <div className='tax-exempt-page'>
        <Title width={260} title="Tax Exempt Form" />
        <div className='tax-exempt-pdf'>
            <iframe src="https://mcmurtry.rice.edu/assets/files/tax_exempt_form.pdf" width="600" height="820" frameBorder="0" scrolling="yes" title="Tax-Exempt Form"></iframe>
        </div>
    </div>
)

export default TaxExempt;