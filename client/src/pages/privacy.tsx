import { FC } from "react";

const Privacy: FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy for SwipeFeed LLC</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> December 20, 2024
          </p>

          <p className="mb-6">
            SwipeFeed LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application SwipeFeed (the "App").
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information We Collect</h3>

          <p className="mb-4">When you use our App, we may collect the following personal information:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Account Information</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Email address</strong> (used for account creation and authentication)</li>
            <li><strong>Name</strong> (optional, provided during account setup)</li>
            <li><strong>User ID</strong> (unique identifier assigned to your account)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Preferences and Settings</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>News preferences</strong> (categories, sources you select during onboarding)</li>
            <li><strong>Notification settings</strong> (whether you have enabled push notifications)</li>
            <li><strong>Subscription information</strong> (your subscription tier: Free, Plus, or Pro)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Usage and Activity Data</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Article interactions</strong> (news articles you view, save, or mark as "read more")</li>
            <li><strong>Swipe activity</strong> (your swipes on news cards for personalization)</li>
            <li><strong>Session data</strong> (app usage frequency, time spent in app)</li>
            <li><strong>Daily activity limits</strong> (number of articles viewed per day based on subscription tier)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Technical Information We Collect</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Device and Technical Data</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Device identifiers</strong> (for app functionality and personalization)</li>
            <li><strong>Push notification tokens</strong> (for sending notifications when enabled)</li>
            <li><strong>IP address</strong> (temporarily, for API requests and security)</li>
            <li><strong>App performance data</strong> (crash reports and error logs for debugging)</li>
            <li><strong>Usage analytics</strong> (to improve app performance and user experience)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Location Information</h4>
          <p className="mb-4">We do not collect precise or coarse location data. However, news content may be geographically relevant based on your language and country settings.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Content</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">News Content</h4>
          <p className="mb-4">We gather news articles from third-party news services to provide you with current news content. This includes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>News article content, titles, descriptions, and images</li>
            <li>Publisher information and source attribution</li>
            <li>Publication timestamps and categorization</li>
          </ul>
          <p className="mb-6">We do not share your personal information with news content providers; we only receive publicly available news content.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>

          <p className="mb-4">We use the information we collect for the following purposes:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Core App Functionality</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Authentication and account management</strong> (securely logging you in and maintaining your session)</li>
            <li><strong>Content personalization</strong> (showing you news articles based on your selected preferences)</li>
            <li><strong>Subscription management</strong> (providing access to features based on your subscription tier)</li>
            <li><strong>Saved articles management</strong> (storing and retrieving articles you choose to save)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">App Improvement and Analytics</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Performance monitoring</strong> (identifying and fixing crashes and technical issues)</li>
            <li><strong>Usage analytics</strong> (understanding how users interact with the app to improve features)</li>
            <li><strong>Feature development</strong> (analyzing usage patterns to develop new features)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Communication</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Push notifications</strong> (sending you relevant news updates if you've opted in)</li>
            <li><strong>Service communications</strong> (important updates about the app or your account)</li>
            <li><strong>Customer support</strong> (responding to your questions and providing assistance)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Processing Legal Basis (GDPR)</h3>
          <p className="mb-4">Where applicable under GDPR, we process your data based on:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Consent</strong> (for optional features like notifications and analytics)</li>
            <li><strong>Contract performance</strong> (for providing the news service you've subscribed to)</li>
            <li><strong>Legitimate interests</strong> (for app security, fraud prevention, and service improvement)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Storage and Security</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Cloud storage</strong>: Your account data is securely stored using industry-standard cloud database services</li>
            <li><strong>Local caching</strong>: Temporary data may be cached locally on your device for improved app performance</li>
            <li><strong>Backup and redundancy</strong>: We maintain automated backups and data redundancy for reliability</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Security Measures</h3>
          <p className="mb-4">We implement industry-standard security measures to protect your information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Encryption in transit</strong> (all data transmitted using secure protocols)</li>
            <li><strong>Encryption at rest</strong> (stored data is encrypted using industry standards)</li>
            <li><strong>Authentication controls</strong> (secure authentication systems for account access)</li>
            <li><strong>Access controls</strong> (limited access to personal data on a need-to-know basis)</li>
            <li><strong>Regular security monitoring</strong> (continuous monitoring for potential security threats)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Retention</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Account data</strong>: Retained while your account is active and for a reasonable period after account deletion</li>
            <li><strong>Usage analytics</strong>: Aggregated and anonymized data may be retained longer for service improvement</li>
            <li><strong>Cached data</strong>: Automatically expires and is deleted based on usage patterns</li>
            <li><strong>Error logs</strong>: Technical logs are retained for a limited time for debugging purposes</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Sharing and Disclosure</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Service Providers</h3>
          <p className="mb-4">We share limited data with trusted service providers who assist us in operating the App:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Cloud Infrastructure Providers</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Data shared</strong>: Account information, user preferences, usage data</li>
            <li><strong>Purpose</strong>: Data storage, authentication, and basic app analytics</li>
            <li><strong>Privacy protection</strong>: All providers are bound by strict data protection agreements</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Error Monitoring Services</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Data shared</strong>: Technical error logs and performance data (no personal identification)</li>
            <li><strong>Purpose</strong>: App performance monitoring and bug fixes</li>
            <li><strong>Privacy protection</strong>: Error reports are anonymized and contain no personal information</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">News Content Providers</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Data shared</strong>: None (we only receive public news content from them)</li>
            <li><strong>Purpose</strong>: Providing current news articles for the app</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
          <p className="mb-4">We may disclose your information if required by law, such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>In response to legal process (subpoenas, court orders)</li>
            <li>To protect our rights, property, or safety</li>
            <li>To protect the rights, property, or safety of our users</li>
            <li>To prevent fraud or security threats</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Business Transfers</h3>
          <p className="mb-6">If SwipeFeed is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your personal information is transferred and becomes subject to a different privacy policy.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Account Management</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Access</strong>: You can view and edit your profile information within the app</li>
            <li><strong>Correction</strong>: You can update your preferences, categories, and settings at any time</li>
            <li><strong>Account deletion</strong>: You can delete your account directly through the app, which will remove all associated personal data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Portability</h3>
          <p className="mb-4">Upon request, we can provide you with a copy of your personal data in a structured, machine-readable format.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Notification Controls</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Push notifications</strong>: You can disable notifications through your device settings or app preferences</li>
            <li><strong>Marketing communications</strong>: You can opt out of promotional emails (when applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Privacy Controls</h3>
          <p className="mb-4">We do not use tracking technologies or cookies in our mobile app. All data collection is transparent and controllable through your app settings.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Rights Under Privacy Laws</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">For EU Users (GDPR)</h4>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Erase your personal data ("right to be forgotten")</li>
            <li>Restrict processing of your personal data</li>
            <li>Data portability</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">For California Users (CCPA)</h4>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Know what personal information is collected about you</li>
            <li>Know whether your personal information is sold or disclosed and to whom</li>
            <li>Say no to the sale of personal information</li>
            <li>Access your personal information</li>
            <li>Equal service and price, even if you exercise your privacy rights</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>

          <p className="mb-6">SwipeFeed is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">International Data Transfers</h2>

          <p className="mb-6">Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Apple App Store Compliance</h2>

          <p className="mb-4">In compliance with Apple's App Store guidelines, we:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide this privacy policy link in our App Store metadata</li>
            <li>Clearly disclose all data collection practices</li>
            <li>Do not require personal information for non-account-based features</li>
            <li>Allow users to delete their accounts and associated data</li>
            <li>Respect user permission settings for notifications and data access</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>

          <p className="mb-4">We may update our Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Posting the new Privacy Policy in the app</li>
            <li>Updating the "Effective Date" at the top of this policy</li>
            <li>Sending you a notification through the app (for significant changes)</li>
          </ul>

          <p className="mb-6">Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>

          <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>

          <p className="mb-2"><strong>SwipeFeed LLC</strong></p>
          <p className="mb-2">Email: swipefeedlive@gmail.com</p>
          <p className="mb-4">Address: 7 Speare Pl, Boston, MA, 02115, United States</p>

          <p className="mb-6">For data protection requests or to exercise your privacy rights, please email us with "Privacy Request" in the subject line.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection Officer</h2>

          <p className="mb-6">For users in the European Union, if you have questions about data protection or wish to exercise your rights under GDPR, you may contact our Data Protection Officer at: swipefeedlive@gmail.com</p>

          <hr className="my-8 border-gray-300" />

          <p className="mb-4">By using the SwipeFeed App, you acknowledge that you have read and understood this Privacy Policy and agree to our collection and use of information in accordance with this Privacy Policy.</p>

          <p className="text-gray-600 mb-2"><strong>Last Updated:</strong> June 7, 2025</p>

          <p className="text-gray-600">© SwipeFeed LLC 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

