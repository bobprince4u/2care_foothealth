/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.2carefoothealth.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/private", "/drafts"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
