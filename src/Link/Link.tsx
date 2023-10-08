import { defineComponent, PropType } from "vue";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export type IType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "default";

export const props = {
  type: {
    type: String as PropType<IType>,
    default: "default",
  },

  underline: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  href: {
    type: String,
    default: "",
  },

  icon: {
    type: String,
    default: "",
  },

  target: {
    type: String,
    default: "_self",
  },
} as const;

const typeColorMap = {
  primary: "blue",
  success: "green",
  warning: "yellow",
  danger: "red",
  info: "gray",
  default: "black",
};

export default defineComponent({
  name: "VCLink",
  props,
  setup(props, { slots, emit }) {
    const handleClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit("click", event);
      }
    };
    return () => (
      <a
        class={`
            ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}
            ${props.underline && !props.disabled ? "decoration" : ""}
            text-${props.type ? typeColorMap[props.type] + "-500" : "black"}
            m-r-1
            vc-link
        `}
        href={props.disabled || !props.href ? undefined : props.href}
        onClick={handleClick.bind(this)}
        target={props.target}
        rel="noopener"
      >
        <span>
          {props.icon !== "" ? (
            <i class={`i-ic-baseline-${props.icon} p-3`}></i>
          ) : (
            ""
          )}
          {slots.default ? slots.default() : ""}
        </span>
      </a>
    );
  },
});
