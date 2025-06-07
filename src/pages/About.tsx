import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">{t('about.title')}</h1>
      
      {/* Presidency Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-blue-600 dark:bg-blue-400 mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('about.presidency.title', 'The Presidency')}</h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t('about.presidency.description', 'The Head of State of the Republic of Sri Lanka is the President. The President is also the Head of the Executive, the Head of the Government, and the Commander in Chief of the Armed Forces.')}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t('about.presidency.term', 'The President is elected by the people and holds office for a period of five years. The President has the right to attend, address and send messages to Parliament at any time. The President is also entitled to all the privileges, immunities and powers of a Member of Parliament other than the right to vote, and shall not be liable for any breach of the privileges of Parliament, or of its Members.')}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t('about.presidency.cabinet', 'The President is the Head of the Cabinet of Ministers, presides at meeting of the Cabinet and appoints the Prime Minister from among the members elected to Parliament.')}</p>
          </div>
        </div>
      </section>

      {/* Powers Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-red-600 dark:bg-red-400 mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('about.powers.title', 'Powers of the President')}</h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{t('about.powers.description', 'The powers of the President include that of summoning, proroguing and dissolving Parliament and calling for a Referendum, in keeping with the relevant provisions of law.')}</p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border-l-4 border-red-500 dark:border-red-400">
              <p className="text-gray-800 dark:text-gray-200 mb-4 font-medium">{t('about.powers.constitution', 'The Constitution also confers upon an elected President the power to:')}</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="leading-relaxed">{t('about.powers.list.policy', 'Make the Statement of Government Policy in Parliament at the commencement of each parliamentary session')}</li>
                <li className="leading-relaxed">{t('about.powers.list.preside', 'Preside at ceremonial sittings of Parliament')}</li>
                <li className="leading-relaxed">{t('about.powers.list.diplomatic', 'Receive and recognize, and to appoint and accredit Ambassadors, High Commissioners, Plenipotentiaries and other diplomatic agents')}</li>
                <li className="leading-relaxed">{t('about.powers.list.seal', 'Keep the Public Seal of the Republic and to make and execute under the Public Seal the Acts of Appointment of the Prime Minister and other Ministers of the Cabinet of Ministers, the Chief Justice and other Judges of the Supreme Court')}</li>
                <li className="leading-relaxed">{t('about.powers.list.war', 'Declare War and Peace')}</li>
                <li className="leading-relaxed">{t('about.powers.list.international', 'Perform all such acts and things, not being inconsistent with the provisions of the Constitution or written law, as by international law, custom or usage The President is required or authorized to do')}</li>
                <li className="leading-relaxed">{t('about.powers.list.pardon', 'Grant pardon, grant any respite, substitute a less severe form of punishment for any punishment and remit the whole or any part of any punishment imposed')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Immunities Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-green-600 dark:bg-green-400 mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('about.immunities.title', 'Immunities and Succession')}</h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t('about.immunities.description', 'Under the immunities granted to the President, no legal proceedings may be initiated or continued with regard to official or private matters against the President while in office. If the President is unable to perform his duties due to illness or absence from the country, the Prime Minister will be appointed to exercise, perform and discharge the powers, duties and functions of the President. A Minister of the Cabinet will then be appointed to act for the Prime Minister.')}</p>
          </div>
        </div>
      </section>

      {/* Elections Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-purple-600 dark:bg-purple-400 mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('about.elections.title', 'Presidential Elections')}</h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t('about.elections.description', 'The Commissioner General of Elections conducts the Presidential Elections where the entire country is considered to be a single constituency. The winner is required to receive more than 50% of votes and takes his oaths as President before the Chief Justice.')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;