

import React, { useState } from 'react';

function MultiStepForm() {


    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personal: { firstName: '', lastName: '', age: '' },
        contact: { email: '', phone: '' },
        address: { street: '', city: '', zip: '' }
    });
    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    }




}export default MultiStepForm;