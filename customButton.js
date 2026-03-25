unlayer.registerTool({
  name: "custom_analytic_button",
  label: "My Analytic Button",
  icon: "fa-face-smile",
  supportedDisplayModes: ["web", "email"],

  // 1. Properties (Values that can be modified)
  options: {
    // Group: Button Options
    buttonOptions: {
      title: "Button Options",
      position: 1,
      options: {
        textJson: {
          label: "Text",
          defaultValue: "Click Me",
          widget: "rich_text", // Or 'text' for simpler input
        },
        buttonColors: {
          label: "Colors",
          defaultValue: {
            color: "#FFFFFF",
            backgroundColor: "#3AAEE0",
            hoverColor: "#FFFFFF",
            hoverBackgroundColor: "#3AAEE0",
          },
          widget: "color_picker", // Simplified; often uses special color-pair widget
        },
        textAlign: {
          label: "Alignment",
          defaultValue: "center",
          widget: "text_align", //
        },
        lineHeight: {
          label: "Line Height",
          defaultValue: "120%",
          widget: "text",
        },
      },
    },

    // Group: Size & Padding
    sizePadding: {
      title: "Size & Padding",
      position: 2,
      options: {
        size: {
          label: "Size",
          defaultValue: {
            autoWidth: true,
            fullWidthOnMobile: false,
            width: "50%",
          },
          widget: "button_size", // Custom widget for auto/full-width
        },
        padding: {
          label: "Padding",
          defaultValue: "10px 20px",
          widget: "padding",
        },
        containerPadding: {
          label: "Container Padding",
          defaultValue: "10px",
          widget: "padding",
        },
      },
    },

    // Group: Border
    border: {
      title: "Border",
      position: 3,
      options: {
        borderRadius: {
          label: "Border Radius",
          defaultValue: "4px",
          widget: "counter",
        },
        border: {
          label: "Border",
          defaultValue: "0px solid #000000",
          widget: "border", //
        },
      },
    },

    // Group: Actions (Link type)
    action: {
      title: "Action",
      position: 4,
      options: {
        link: {
          label: "Link",
          defaultValue: {
            action: {
              type: "open_website", // 'send_email', 'call_phone', 'send_sms'
              url: "https://unlayer.com",
            },
          },
          widget: "link", //
        },
      },
    },
  },

  // 2. Default Values for the tool
  values: {
    textJson: {}, // JSON structure for Lexical/TinyMCE
    buttonColors: {
      color: "#FFFFFF",
      backgroundColor: "#3AAEE0",
      hoverColor: "#FFFFFF",
      hoverBackgroundColor: "#3AAEE0",
    },
    textAlign: "center",
    lineHeight: "120%",
    size: { autoWidth: true, fullWidthOnMobile: false, width: "50%" },
    padding: "10px 20px",
    containerPadding: "10px",
    borderRadius: "4px",
    border: "0px solid #000000",
    action: { type: "open_website", url: "" },
  },

  // 3. Renderer (How it looks in the editor and final export)
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div class="button-container" style="text-align: ${values.textAlign}; padding: ${values.containerPadding};">
                  <a href="${values.action.url}" style="background-color: ${values.buttonColors.backgroundColor}; color: ${values.buttonColors.color}; padding: ${values.padding}; border-radius: ${values.borderRadius}; display: inline-block; text-decoration: none;">
                    ${values.textJson}
                  </a>
                </div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return `<a href="${values.action.url}">...</a>`;
      },
      email: function (values) {
        return `<a href="${values.action.url}">...</a>`;
      },
    },
  },
});
