import React from "react";
import { types } from "util";
import { assertEvent, assign, setup } from "xstate";
import { createActorContext } from "@xstate/react";
import { HomeContext } from "../interfaces/IHome";

const HomeMachine = setup({
  types: {
    context: {} as HomeContext,
    events: {} as { type: "SIGNUP"; value: boolean } | { type: "SIGNIN" },
  },
  actions: {
    OpenSignUpModal: assign(({ event }) => {
      assertEvent(event, "SIGNUP");
      return {
        openSignUpModal: event.value,
      };
    }),
  },
}).createMachine({
  id: "homemachine",
  context: {
    sample: "",
    openSignUpModal: false,
  },
  initial: "idle",
  states: {
    idle: {},
  },
});

export default createActorContext(HomeMachine);
