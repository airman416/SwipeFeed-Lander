import { FC } from "react";
import { Link } from "wouter";

const FeedShareSupport: FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans text-gray-900">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="/feedshare.png"
                        alt="FeedShare App Icon"
                        className="w-32 h-32 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className="text-3xl font-bold tracking-tight">FeedShare Support</h1>
                    <p className="text-gray-500">
                        For any questions or assistance, please reach out to us or review our policies below.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link href="/feedshare/terms">
                        <a className="block w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 text-left group">
                            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">Terms of Service</h3>
                            <p className="text-sm text-gray-500">Read our terms and conditions</p>
                        </a>
                    </Link>

                    <Link href="/feedshare/privacy">
                        <a className="block w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 text-left group">
                            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">Privacy Policy</h3>
                            <p className="text-sm text-gray-500">Learn how we handle your data</p>
                        </a>
                    </Link>

                    <a
                        href="mailto:swipefeedlive@gmail.com"
                        className="block w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 text-left group"
                    >
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">Contact Support</h3>
                        <p className="text-sm text-gray-500">swipefeedlive@gmail.com</p>
                    </a>
                </div>

                <div className="pt-8">
                    <p className="text-xs text-gray-400">
                        © 2026 SwipeFeed LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedShareSupport;
