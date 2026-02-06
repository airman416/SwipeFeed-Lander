import { FC } from "react";

const FeedSharePrivacy: FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                    <p className="text-gray-600 mb-8">
                        <strong>Last updated:</strong> February 2026
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>

                    <p className="mb-4">FeedShare 2.0 ("we", "our", or "us") collects the following information:</p>

                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Email address</li>
                        <li>Photos you choose to upload</li>
                        <li>Posts and comments you create</li>
                        <li>Device push notification tokens (if enabled)</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>

                    <p className="mb-4">We use your information to:</p>

                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Authenticate your account</li>
                        <li>Display your posts and comments to other users</li>
                        <li>Send push notifications about new food availability</li>
                        <li>Improve the app experience</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Storage</h2>

                    <p className="mb-6">
                        Your data is stored securely using Firebase services provided by Google. Photos are stored in Firebase Storage. Account information and posts are stored in Firebase Firestore.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Sharing</h2>

                    <p className="mb-6">
                        We do not sell or share your personal information with third parties. Your posts and comments are visible to other FeedShare users.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Deletion</h2>

                    <p className="mb-6">
                        You can delete your account at any time from the Profile screen. This will permanently delete all your data, including posts and comments.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">6. Children's Privacy</h2>

                    <p className="mb-6">
                        FeedShare is intended for students aged 18 and older. We do not knowingly collect information from children under 13.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>

                    <p className="mb-4">
                        If you have questions about this Privacy Policy, contact us at:
                    </p>

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

export default FeedSharePrivacy;
