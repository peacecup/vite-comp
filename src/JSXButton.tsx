import { defineComponent } from "vue";
import "uno.css";

export default defineComponent({
  name: "JSXButton",
  props: {
    color: {
      type: String,
      default: "blue", // 设定默认颜色
    },
  },
  render() {
    return (
      <button
        class={`
                mr-1
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${this.color}-500 
                hover:bg-${this.color}-700 
                border-none 
                cursor-pointer 
            `}
      >
        JSX Button
      </button>
    );
  },
});
