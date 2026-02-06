import { FC } from "react";

const FeedShareTerms: FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                    <p className="text-gray-600 mb-8">
                        <strong>Last updated:</strong> February 2026
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>

                    <p className="mb-6">
                        By using FeedShare 2.0, you agree to these Terms of Service. If you do not agree, please do not use the app.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Eligibility</h2>

                    <p className="mb-6">
                        FeedShare is intended for students. You must be at least 18 years old.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. User Conduct</h2>

                    <p className="mb-4">You agree to:</p>

                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Post only accurate information about food availability</li>
                        <li>Not post inappropriate, offensive, or harmful content</li>
                        <li>Not misuse the notification system</li>
                        <li>Respect other users and their content</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Content Ownership</h2>

                    <p className="mb-6">
                        You retain ownership of content you post. By posting, you grant FeedShare a license to display your content within the app.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Food Safety Disclaimer</h2>

                    <p className="mb-6">
                        <strong>IMPORTANT:</strong> FeedShare does not guarantee the quality, safety, or availability of food posted by users. Consume food at your own risk. We are not responsible for any illness or injury resulting from food consumption.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">6. Account Termination</h2>

                    <p className="mb-6">
                        We reserve the right to terminate accounts that violate these terms. You may delete your account at any time from the Profile screen.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>

                    <p className="mb-6">
                        FeedShare and SwipeFeed LLC are not liable for any damages arising from your use of this app.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to Terms</h2>

                    <p className="mb-6">
                        We may update these terms at any time. Continued use of the app constitutes acceptance of updated terms.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>

                    <p className="mb-4">Questions? Contact us at:</p>

                    <p className="mb-6">
                        <strong>Email:</strong> swipefeedlive@gmail.com
                    </p>

                    <hr className="my-8 border-gray-300" />

                    <p className="text-gray-600">© 2026 SwipeFeed LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default FeedShareTerms;
