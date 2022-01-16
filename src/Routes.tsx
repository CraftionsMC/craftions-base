/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
/* ! CRAFTIONS-CLI % ROUTE_IMPORT_POINT */

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path="*" component={NotFound} />

        {/* ! CRAFTIONS-CLI % ROUTE_MOUNT_POINT */}
      </Switch>
    </>
  );
}
