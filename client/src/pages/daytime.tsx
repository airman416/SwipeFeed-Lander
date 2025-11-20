import { FC } from "react";

const DayTime: FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy for DayTime</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> July 14, 2025
          </p>

          <p className="mb-6">
            SwipeFeed LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application DayTime (the "App").
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information We Collect</h3>

          <p className="mb-4">
            Currently, we do not collect any personally identifiable information. All activity logs, timers, notes, reflections, and habits you create are stored locally on your device only.
          </p>

          <p className="mb-6">
            In the future, we may introduce features such as sign-in, cloud backups, and long-term goal tracking. When those features are launched, we will update this policy and request your explicit consent.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Technical Information We Collect</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Device and Technical Data</h4>
          <p className="mb-4">We may collect limited technical data for app functionality and improvement, such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>App performance data (crash reports and error logs for debugging)</li>
            <li>Usage analytics (to improve app performance and user experience)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Optional Analytics</h4>
          <p className="mb-4">
            We may use privacy-friendly analytics (like Apple's App Analytics or anonymized event tracking) to understand general app usage — such as how often users start a session or adjust the timer — to help improve the experience.
          </p>

          <p className="mb-4">These analytics do not include your content, logs, or personal identity.</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Location Information</h4>
          <p className="mb-6">We do not collect precise or coarse location data.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>

          <p className="mb-4">We use the limited information we collect for the following purposes:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Core App Functionality</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Providing local storage for your activity logs, timers, and notes</li>
            <li>Enabling features like session tracking and habit reflections on your device</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">App Improvement and Analytics</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Performance monitoring</strong> (identifying and fixing crashes and technical issues)</li>
            <li><strong>Usage analytics</strong> (understanding how users interact with the app to improve features)</li>
            <li><strong>Feature development</strong> (analyzing anonymized usage patterns to develop new features)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Communication</h3>
          <p className="mb-6">Currently, we do not send any communications as we do not collect contact information.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Processing Legal Basis (GDPR)</h3>
          <p className="mb-4">Where applicable under GDPR, we process any limited data based on:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Consent</strong> (for optional analytics)</li>
            <li><strong>Legitimate interests</strong> (for app security, fraud prevention, and service improvement)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Storage and Security</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Local storage</strong>: All your data is stored securely on your device</li>
            <li><strong>No cloud storage</strong>: We do not store any data on our servers</li>
            <li><strong>Backup</strong>: Data backup is managed through your device's standard backup features (e.g., iCloud Backup if enabled)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Security Measures</h3>
          <p className="mb-4">While data is stored locally, we implement security best practices in the app:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Encryption at rest</strong> (data is stored using your device's encryption)</li>
            <li><strong>App security</strong> (regular updates to address potential vulnerabilities)</li>
            <li><strong>Access controls</strong> (data accessible only through the app on your device)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Retention</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Local data</strong>: Retained on your device until you delete it</li>
            <li><strong>Analytics data</strong>: Any anonymized analytics data is retained for a limited time for service improvement</li>
            <li><strong>Error logs</strong>: Technical logs are retained temporarily for debugging purposes</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Sharing and Disclosure</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Service Providers</h3>
          <p className="mb-4">
            Currently, DayTime does not use third-party services that collect user data.
          </p>

          <p className="mb-6">
            If we integrate such services (e.g., for authentication or analytics) in the future, we will clearly inform you and update this policy. Any providers would be bound by strict data protection agreements.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
          <p className="mb-4">We may disclose information if required by law, such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>In response to legal process (subpoenas, court orders)</li>
            <li>To protect our rights, property, or safety</li>
            <li>To protect the rights, property, or safety of our users</li>
            <li>To prevent fraud or security threats</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Business Transfers</h3>
          <p className="mb-6">
            If SwipeFeed LLC is involved in a merger, acquisition, or sale of assets, your information (if any is collected in the future) may be transferred as part of that transaction. We will provide notice before any personal information is transferred and becomes subject to a different privacy policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Account Management</h3>
          <p className="mb-6">Currently, there are no accounts or server-stored data. All management is local.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Portability</h3>
          <p className="mb-6">You can export your data using your device's sharing features.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Notification Controls</h3>
          <p className="mb-6">Currently, there are no notifications as we do not collect contact information.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Privacy Controls</h3>
          <p className="mb-6">
            We do not use tracking technologies in our mobile app. All data is local and controllable through your device settings.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Rights Under Privacy Laws</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">For EU Users (GDPR)</h4>
          <p className="mb-2">Since we collect no personal data, most rights are not applicable. However, you have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Object to any future processing</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">For California Users (CCPA)</h4>
          <p className="mb-6">
            Since we collect no personal information, CCPA rights are limited. We do not sell personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>

          <p className="mb-6">
            DayTime is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">International Data Transfers</h2>

          <p className="mb-6">
            Since no data is transferred to our servers, there are no international data transfers. Any future transfers would include appropriate safeguards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Apple App Store Compliance</h2>

          <p className="mb-4">In compliance with Apple's App Store guidelines, we:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide this privacy policy link in our App Store metadata</li>
            <li>Clearly disclose all data collection practices (which are minimal)</li>
            <li>Do not require personal information for any features</li>
            <li>Respect user permission settings for data access</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>

          <p className="mb-4">
            We may update our Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Posting the new Privacy Policy in the app</li>
            <li>Updating the "Effective Date" at the top of this policy</li>
            <li>Sending you a notification through the app (for significant changes, if contact features are added)</li>
          </ul>

          <p className="mb-6">
            Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>

          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>

          <p className="mb-2"><strong>SwipeFeed LLC</strong></p>
          <p className="mb-2">Email: swipefeedlive@gmail.com</p>
          <p className="mb-4">Address: 7 Speare Pl, Boston, MA, 02115, United States</p>

          <p className="mb-6">
            For data protection requests or to exercise your privacy rights, please email us with "Privacy Request" in the subject line.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection Officer</h2>

          <p className="mb-6">
            For users in the European Union, if you have questions about data protection or wish to exercise your rights under GDPR, you may contact our Data Protection Officer at: swipefeedlive@gmail.com
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="mb-4">
            By using the DayTime App, you acknowledge that you have read and understood this Privacy Policy and agree to our collection and use of information in accordance with this Privacy Policy.
          </p>

          <p className="text-gray-600 mb-2"><strong>Last Updated:</strong> July 14, 2025</p>

          <p className="text-gray-600">© SwipeFeed LLC 2025</p>
        </div>
      </div>
    </div>
  );
};

export default DayTime;

