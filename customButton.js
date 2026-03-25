(function () {
  function init() {
    if (!window.unlayer || !window.unlayer.registerTool) {
      return setTimeout(init, 200);
    }

    console.log("🔥 REGISTERING TOOL");

    window.unlayer.registerTool({
      name: "custom_analytic_button",
      label: "My Analytic Button",
      icon: "fa-smile",
      category: "Custom",
      supportedDisplayModes: ["web", "email"],

      options: {
        text: {
          title: "Text",
          position: 1,
          options: {
            text: {
              label: "Text",
              defaultValue: "Click Me",
              widget: "text",
            },
          },
        },
      },

      values: {
        text: "Click Me",
      },

      renderer: {
        Viewer: window.unlayer.createViewer({
          render(values) {
            return `<div style="text-align:center;">
                      <a href="#">${values.text}</a>
                    </div>`;
          },
        }),
        exporters: {
          web: (values) => `<a>${values.text}</a>`,
          email: (values) => `<a>${values.text}</a>`,
        },
      },
    });
  }

  init();
})();
