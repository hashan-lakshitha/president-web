import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would submit the form data to your API
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row shadow rounded overflow-hidden">
          {/* Left Side - Contact Form */}
          <div className="col-12 col-lg-6 bg-white p-4 p-lg-5">
            <h2 className="h3 fw-bold text-dark mb-4">
              {t('contact.getInTouch', 'Get In Touch')}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name', 'Name')}
                  required
                  className="form-control rounded-pill"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email', 'Email Address')}
                  required
                  className="form-control rounded-pill"
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone', 'Phone Number')}
                  className="form-control rounded-pill"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message', 'Your Message')}
                  rows={4}
                  required
                  className="form-control rounded-4"
                  style={{ resize: 'none' }}
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  className="btn btn-dark px-4 py-2 d-flex align-items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  {t('contact.form.submit', 'Free Consultant')}
                </button>
              </div>
            </form>
          </div>
          {/* Right Side - Contact Information */}
          {/* <div className="col-12 col-lg-6 bg-dark text-white p-4 p-lg-5">
            <div className="mb-4 d-flex align-items-start">
              <div className="bg-primary p-3 rounded me-3 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="h5 fw-semibold mb-1">{t('contact.info.location', 'Company Location')}</h3>
                <p className="mb-0">{t('contact.info.address1', 'Durham Street Hialeah,')}</p>
                <p className="mb-0">{t('contact.info.address2', 'FL 33010, USA')}</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start">
              <div className="bg-primary p-3 rounded me-3 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="h5 fw-semibold mb-1">{t('contact.info.telephone', 'Telephone Number')}</h3>
                <p className="mb-0">{t('contact.info.phone1', '+880 636 524 265,')}</p>
                <p className="mb-0">{t('contact.info.phone2', '+880 636 524 265,')}</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start">
              <div className="bg-primary p-3 rounded me-3 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="h5 fw-semibold mb-1">{t('contact.info.email', 'Our Email Address')}</h3>
                <p className="mb-0">{t('contact.info.email1', 'yourinfo@gmail.com')}</p>
                <p className="mb-0">{t('contact.info.email2', 'yourmail@gmail.com')}</p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;