/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import Typing from "react-typing-animation";
import * as React from "react";
import { ReactElement } from "react";
import "./Header.scss";

export interface RProps {
  animation?: boolean;
}

export interface Props {
  title: string | ReactElement;
  image?: string;
  imageAlt?: string;
  imageStyle?: object;
  customRightHand?: ReactElement;
  rtl?: boolean;
  children: any;
  noAnimation?: boolean;
}

export default function RHeader(props: Props) {
  const dContent = (
    <>
      <h1 className="title" style={{ display: "inline-block" }}>
        {props.title}
      </h1>
      <h1 className="header-subtitle">
        {props.noAnimation ? (
          props.children
        ) : (
          <Typing speed={10}>{props.children}</Typing>
        )}
      </h1>
    </>
  );

  let iContent = <></>;

  if (props.customRightHand) {
    iContent = props.customRightHand;
  } else {
    iContent = (
      <img src={props.image} alt={props.imageAlt} style={props.imageStyle} />
    );
  }

  return (
    <>
      <div
        className={"header"}
        style={{
          gridTemplateColumns: props.rtl ? "60%" : "40%",
        }}
      >
        <div className="header-left">{props.rtl ? iContent : dContent}</div>
        <div
          className="header-right"
          style={{ textAlign: props.rtl ? "left" : "center" }}
        >
          {props.rtl ? dContent : iContent}
        </div>
      </div>
    </>
  );
}
