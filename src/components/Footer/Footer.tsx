/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";

import { Footer as BulmaFooter } from "react-bulma-components";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <BulmaFooter
        style={{
          marginTop: "3rem",
          marginBottom: "0",
        }}
      >
        <div className={"has-text-centered content"}>
          <p>
            Copyright © 2020-{new Date().getFullYear()}
            <Link to={"/"}>&nbsp;Craftions</Link>
            . All rights reserved.
            <br />
            The website is licensed&nbsp;
            <a
              href={"https://choosealicense.com/licenses/gpl-3.0/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              GPL-3.0-only
            </a>
            . <br />
            <br />
            <div className={"footer-links"}>
              <a
                href={"https://github.com/CraftionsMC"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                GitHub
              </a>
              <em>•</em>
              <a
                href={"https://twitter.com/CraftionsMC"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Twitter
              </a>
              <em>•</em>
              <a
                href={"https://discord.gg/udNjE2BxGW"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Discord
              </a>
              <br />
              <a
                href={"https://mctzock.de/legal/imprint"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Imprint
              </a>
              <em>•</em>
              <a
                href={"https://mctzock.de/legal/privacy"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Privacy
              </a>
            </div>
          </p>
        </div>
      </BulmaFooter>
    </>
  );
}
