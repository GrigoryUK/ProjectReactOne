export function buildSvgLoader(isDev: boolean) {
  return {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              "preset-default",
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
              {
                name: "addClassesToSVGElement",
                params: {
                  className: "app-icon",
                },
              },
            ],
          },
        },
      },
    ],
  };
}
