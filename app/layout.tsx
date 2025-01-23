import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/providers/modal-provider";
import { useTheme } from "next-themes";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "InfoCode19",
    description: "Mejora tus proyectos con info code 19",
    keywords: "sistemas, programas, desarrollo, web, apps, moviles, android, ios, windows, linux, mac, os, x, ios, android, flutter, react, angular, vue, svelte, next, nuxt, gatsby, ionic, cordova, phonegap, electron, desktop, web, mobile, pwa, spa, mpa, ssr, ssg, jss, css, html, js, ts, dart, python, php, ruby, go, rust, c, c++, c#, java, kotlin, swift, objective-c, sql, nosql, graphql, rest, api, restful, soap, json, xml, yaml, ini, toml, csv, excel, word, powerpoint, pdf, jpg, png, gif, svg, mp4, mp3, avi, mov, flv, webm, ogg, wmv, aac, wav, flac, aiff, m4a, m4v, mkv, vtt, s",
    author: "Edward M.M.",
    openGraph: {
        title: "InfoCode19",
        description: "Mejora tus proyectos con info code 19",
        url: "https://edwardmelendezm.github.io/Portafolio-Personal/",
        siteName: "INFO CODE 19",
        images: [
            {
                url: "https://yt3.googleusercontent.com/CTePme4lQZ7lSAeyDpQ0-rwqJXUJihx-rMBzWv-bzreQjVm9UQhdcK6yZjVWKoJChx85JzQHkA=s160-c-k-c0x00ffffff-no-rj",
                width: 800,
                height: 600,
                alt: "InfoCode19",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
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
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta property="og:description" content={metadata.openGraph.description} />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta property="og:site_name" content={metadata.openGraph.siteName} />
                <meta property="og:image" content={metadata.openGraph.images[0].url} />
                <meta property="og:image:width" content={String(metadata.openGraph.images[0].width)} />
                <meta property="og:image:height" content={String(metadata.openGraph.images[0].height)} />
                <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
                <meta property="og:locale" content={metadata.openGraph.locale} />
                <meta property="og:type" content={metadata.openGraph.type} />
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
