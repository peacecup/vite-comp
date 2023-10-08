import Link from "../Link";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Link", () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Link, {
      slots: { default: "primary" },
    });
    expect(wrapper.text()).toBe("primary");
  });
});

describe("link", () => {
  test("disable", () => {
    const wrapper = shallowMount(Link, {
      slots: {
        default: "disable",
      },
      props: {
        disabled: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("cursor-not-allowed")
    ).toBe(true);
  });
  test("underline", () => {
    const wrapper = shallowMount(Link, {
      slots: {
        default: "underline",
      },
      props: {
        underline: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("decoration")
    ).toBe(true);
  });
  test("icon", () => {
    const wrapper = shallowMount(Link, {
      slots: {
        default: "icon",
      },
      props: {
        icon: "edit",
      },
    });
    expect(wrapper.find(".i-ic-baseline-edit").exists()).toBe(true);
  });
});
