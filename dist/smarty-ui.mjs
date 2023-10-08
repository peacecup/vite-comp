import { defineComponent, createVNode } from "vue";
const props$1 = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "VCButton",
  props: props$1,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          py-${size[props2.size].y}
          px-${size[props2.size].x}
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? props2.color + "-500" : "white"}
          text-${size[props2.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const props = {
  type: {
    type: String,
    default: "default"
  },
  underline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: "_self"
  }
};
const typeColorMap = {
  primary: "blue",
  success: "green",
  warning: "yellow",
  danger: "red",
  info: "gray",
  default: "black"
};
const Link = defineComponent({
  name: "VCLink",
  props,
  setup(props2, {
    slots,
    emit
  }) {
    const handleClick = (event) => {
      if (!props2.disabled) {
        emit("click", event);
      }
    };
    return () => createVNode("a", {
      "class": `
            ${props2.disabled ? "cursor-not-allowed" : "cursor-pointer"}
            ${props2.underline && !props2.disabled ? "decoration" : ""}
            text-${props2.type ? typeColorMap[props2.type] + "-500" : "black"}
            m-r-1
            vc-link
        `,
      "href": props2.disabled || !props2.href ? void 0 : props2.href,
      "onClick": handleClick.bind(this),
      "target": props2.target,
      "rel": "noopener"
    }, [createVNode("span", null, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""])]);
  }
});
const __uno = "";
const _public = "";
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(Link.name, Link);
  }
};
export {
  Button as VCButton,
  Link as VCLink,
  entry as default
};
//# sourceMappingURL=smarty-ui.mjs.map
