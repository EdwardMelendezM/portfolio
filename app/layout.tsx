import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/providers/modal-provider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "You're welcome!!",
    description: "Software engineer and systems developer",
    keywords: "sistemas, programas, desarrollo, web, apps, moviles, android, ios, windows, linux, mac, os, x, ios, android, flutter, react, angular, vue, svelte, next, nuxt, gatsby, ionic, cordova, phonegap, electron, desktop, web, mobile, pwa, spa, mpa, ssr, ssg, jss, css, html, js, ts, dart, python, php, ruby, go, rust, c, c++, c#, java, kotlin, swift, objective-c, sql, nosql, graphql, rest, api, restful, soap, json, xml, yaml, ini, toml, csv, excel, word, powerpoint, pdf, jpg, png, gif, svg, mp4, mp3, avi, mov, flv, webm, ogg, wmv, aac, wav, flac, aiff, m4a, m4v, mkv, vtt, s",
    author: "Edward M.M.",
    twitter: {
        card: "summary_large_image",
        site: "@EMendigure58493",
        creator: "@EMendigure58493",
        title: "InfoCode19",
        description: "Ingenierio en informatica y sistemas",
        images: ["https://pbs.twimg.com/profile_images/1756483768271974400/5OQZqNBs_400x400.jpg"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />
                <meta name="twitter:card" content={metadata.twitter.card} />
                <meta name="twitter:site" content={metadata.twitter.site} />
                <meta name="twitter:creator" content={metadata.twitter.creator} />
                <meta name="twitter:title" content={metadata.twitter.title} />
                <meta name="twitter:description" content={metadata.twitter.description} />
                <meta name="twitter:image" content={metadata.twitter.images[0]} />
                <title>{metadata.title}</title>
            </head>
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                >
                    {children}
                    <ModalProvider />
                </ThemeProvider>

            </body>
        </html>
    );
}
