"use client"

import store from "@/store";
import { Provider } from "react-redux";

export default function ResumeBuilderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            > <Provider store={store}>
                    {children}
                </Provider>
            </body>
        </html>
    );
}