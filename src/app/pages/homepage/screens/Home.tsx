import React from "react";
import { appDiscription } from "../variables/homevariables";
import hometargetIcon from "../../../assets/home_target_icon.png";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../components/buttons/Buttons";

function HomePage() {
  return (
    <main className="flex">
      <div className=" w-7/12">
        <section className="flex justify-start pt-3 pb-0 px-4">
          <h1 className="text-appLightBlue tracking-wide font-appfontsInter text-6xl font-bold">
            Task
          </h1>
          <h1 className="text-appDarkOrange px-1 py-1 tracking-wide font-appfontsInter text-6xl font-bold">
            Master
          </h1>
        </section>
        <section className="px-6 pb-3">
          <h2 className="text-4xl tracking-wide font-appfontsPoppins text-appLightOrange font-bold">
            Make Things Happen
          </h2>
          <p className="w-11/12 text-justify text-sm font-appfontsPoppins">
            {appDiscription}
          </p>
        </section>
        <section className="px-6 flex gap-3">
          <PrimaryButton>Sign In</PrimaryButton>
          <SecondaryButton>Sign Up</SecondaryButton>
        </section>
      </div>
      <div className="float-right   flex-1">
        <img alt="" src={hometargetIcon} className="h-full w-3/4"></img>
      </div>
    </main>
  );
}

export default HomePage;
