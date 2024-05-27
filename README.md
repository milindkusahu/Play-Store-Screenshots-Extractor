# Play Store App Screenshots

A simple web-based tool to fetch and download screenshots of Google Play Store apps. Simply enter the app URL and get high-quality screenshots in a grid view.

## Features

- Fetch screenshots of any Google Play Store app by entering its URL
- Display screenshots in a responsive grid layout
- Click on a screenshot to view it in a larger preview
- Download individual screenshots with the correct file extension
- Responsive and user-friendly design

## Getting Started

To use the Play Store App Screenshots tool, follow these steps:

1. Open the tool in your web browser by visiting: [https://milindkusahu.github.io/Play-Store-Screenshots-Extractor/](https://milindkusahu.github.io/Play-Store-Screenshots-Extractor/)
   - Replace `milindkusahu` with your GitHub username and `Play-Store-Screenshots-Extractor` with the name of your repository.

2. Enter the Google Play Store app URL in the input field.
   - Example: `https://play.google.com/store/apps/details?id=com.example.app`

3. Click on the "Get Screenshots" button to fetch the screenshots of the app.

4. The screenshots will be displayed in a grid layout.
   - Click on a screenshot to view it in a larger preview.
   - Click on the "Download" button below each screenshot to download it with the correct file extension.

5. To close the screenshot preview, click on the close button or anywhere outside the preview image.

## Hosting

The web-based frontend of the Play Store App Screenshots tool is hosted on GitHub Pages. However, the server-side component that fetches and downloads the screenshots needs to be hosted separately.

To host the server component, follow these steps:

1. Clone the repository:

git clone https://github.com/milindkusahu/Play-Store-Screenshots-Extractor.git

2. Install the required dependencies:

cd your-repository
npm install

3. Start the server:
node app.mjs

4. Deploy the server to a hosting platform of your choice (e.g., Heroku, AWS, Google Cloud Platform).

5. Update the URLs in the `index.html` file to point to your hosted server.

## Dependencies

The Play Store App Screenshots tool relies on the following dependencies:

- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [google-play-scraper](https://www.npmjs.com/package/google-play-scraper) - Library to scrape data from the Google Play Store
- [Axios](https://www.npmjs.com/package/axios) - Promise-based HTTP client for making requests

## Contributing

Contributions to the Play Store App Screenshots tool are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/your-repository).

## License

This project is licensed under the [MIT License](LICENSE).
