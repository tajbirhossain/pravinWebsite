const fs = require('fs');
const axios = require('axios');

const baseUrl = 'https://absolutemarketresearch.com';
const sitemapPath = './public/sitemap.xml';

// Make an API call to fetch all reports
axios.get('https://api.absolutemarketresearch.com/api/Report/GetAllReportsWithLimit?numberOfRecords=0')
    .then(reportsResponse => {
        const fetchedReports = reportsResponse.data || [];

        // Now make another API call to fetch categories
        axios.get('https://api.absolutemarketresearch.com/api/Category/GetAllCategories')
            .then(categoriesResponse => {
                const fetchedCategories = categoriesResponse.data || [];

                // Generate report details routes dynamically based on the fetched reports
                const reportDetailsRoutes = fetchedReports.map(val => 
                    `/${encodeURIComponent(val.reportTitle.split("Market")[0].trim().replaceAll(" ", "-") + "Market")}/${val.reportId}`
                );

                // Generate "purchase" routes dynamically based on the fetched reports
                const purchaseRoutes = fetchedReports.map(val => `/purchase/${val.reportId}`);

                const routes = [
                    '/',
                    '/about-us',
                    '/contact-us',
                    '/all-report',
                    ...fetchedCategories.map(val => `/category/${encodeURIComponent(val.categoryName.replaceAll(" ", "-"))}`),
                    ...reportDetailsRoutes.map(route => `${route}/overview`),
                    ...reportDetailsRoutes.map(route => `${route}/TOC`),
                    ...reportDetailsRoutes.map(route => `${route}/request-sample`),
                    ...purchaseRoutes, // Add dynamically generated "purchase" routes
                ];

                const links = routes.map(route => ({
                    url: `${baseUrl}${route}`,
                    changefreq: 'daily',
                    priority: 0.7,
                }));

                const sitemapXml = links
                    .map(link => 
                        `<url>
                            <loc>${link.url}</loc>
                            <changefreq>${link.changefreq}</changefreq>
                            <priority>${link.priority}</priority>
                        </url>`
                    )
                    .join('');

                const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapXml}
</urlset>`;

                fs.writeFileSync(sitemapPath, xml);
                console.log('Sitemap generated successfully.');
            })
            .catch(categoriesError => {
                console.error('Error fetching categories from the API:', categoriesError.message);
            });
    })
    .catch(reportsError => {
        console.error('Error fetching reports from the API:', reportsError.message);
    });
