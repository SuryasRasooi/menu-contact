import Head from "next/head";

const Meta = ({ title, description, image, url }) => (
    <Head>
        <title key="title">{title}</title>
        <link rel="shortcut icon" href={image} />
        <meta name="robots" content="max-image-preview:large" />
        <meta charSet="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta key="description" name="description" content={description} />
        <meta key="og:type" name="og:type" content="website" />
        <meta key="og:title" name="og:title" content={title} />
        <meta
            key="og:description"
            name="og:description"
            content={description}
        />
        <meta key="og:url" name="og:url" content={url} />
        <meta key="og:image" name="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image}></meta>
        <link
            rel="alternate"
            type="application/rss+xml"
            title={title}
            href="https://feeds.feedburner.com/blogspot/amDG"
        />
        <link rel="dns-prefetch" href="//s.w.org" />
    </Head>
);

export default Meta;
