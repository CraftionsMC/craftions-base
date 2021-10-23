/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's the new name? ", (newName) => {
  rl.question("What is the description? ", (description) => {
    const packageJSON = JSON.parse(fs.readFileSync("package.json").toString());

    packageJSON.name = "@craftions/" + newName;
    packageJSON.description = description;

    packageJSON.repository.url = "https://github.com/CraftionsMC/" + newName;
    packageJSON.homepage =
      "https://github.com/CraftionsMC/" + newName + "#readme";

    packageJSON.bugs.url =
      "https://github.com/CraftionsMC/" + newName + "/issues";

    packageJSON.scripts["docker:build"] = packageJSON.scripts[
      "docker:build"
    ].replace("mctzock/craftions-base", "mctzock/" + newName);

    packageJSON.scripts["docker:deploy"] = packageJSON.scripts[
      "docker:deploy"
    ].replace("mctzock/craftions-base", "mctzock/" + newName);

    packageJSON.scripts["docker:run"] = packageJSON.scripts[
      "docker:run"
    ].replace("mctzock/craftions-base", "mctzock/" + newName);

    packageJSON.scripts["docker:run"] = packageJSON.scripts[
      "docker:run"
    ].replace("craftions-base", newName);

    fs.writeFileSync("package.json", JSON.stringify(packageJSON));

    let readme = fs.readFileSync("README.MD").toString();

    readme = readme.replace(/craftions-base/g, newName);
    readme = readme.replace(
      /This.is.the.base.of.all.craftions.web.apps\./g,
      description
    );

    fs.writeFileSync("README.MD", readme);

    rl.close();
  });
});
