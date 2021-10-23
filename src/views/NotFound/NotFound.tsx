/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import { Link } from "react-router-dom";
import * as React from "react";
import RHeader from "../../components/RHeader/RHeader";

export default function NotFound() {
  return (
    <>
      <RHeader
        title={
          <span className={"has-text-danger"}>
            Oops, this page was not found
          </span>
        }
        customRightHand={
          <>
            <h1
              className={"title"}
              style={{
                fontFamily: "monospace",
                fontSize: "8rem",
              }}
            >
              404
            </h1>
            <h1 className={"subtitle"}>Not Found</h1>
          </>
        }
      >
        We could not find the page you were looking for. Try going&nbsp;
        <Link to="/">Home</Link>
      </RHeader>
    </>
  );
}
