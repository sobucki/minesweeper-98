/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test Environment</title>
        </head>
        <body>
          <div id="game-container">
            <div class="mines-area"></div>
          </div>
        </body>
      </html>
    `,
  },
};

export default config;
