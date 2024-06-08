import React from "react";
import { MoonIcon, SunIcon } from "../../assets/icons";
import stayles from "./index.module.scss";
import cn from "classnames";

export const IconToggle = ({ checked, onToggle }) => (
  <div
    className={cn(stayles.wrapper, { [stayles.active]: checked })}
    onClick={onToggle}
  >
    <SunIcon className={stayles.icon} />
    <MoonIcon className={stayles.icon} />
    <div className={cn(stayles.circle, { [stayles.active]: checked })}></div>
  </div>
);
