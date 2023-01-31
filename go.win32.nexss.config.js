const path = require("path");
process.env.GOPATH = path.resolve("../../../src");
// console.log("gopath:", process.env.GOPATH);
let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Go";
languageConfig.description =
  "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.";
languageConfig.url = "https://golang.org/";
languageConfig.founders = ["Robert Griesemer", "Rob Pike", "Ken Thompson"];
languageConfig.developers = ["Google"];
languageConfig.years = ["2009"];
languageConfig.extensions = [".go"];
languageConfig.builders = {};
languageConfig.compilers = {
  go: {
    install: "scoop install go",
    command: "go",
    args: "run <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.go.errors");
languageConfig.languagePackageManagers = {
  dep: {
    installation: "scoop install go dep",
    messageAfterInstallation: "",
    installed: "dep installed",
    search: "dep search",
    install: "go install",
    uninstall: "dep remove",
    help: "dep <args>",
    version: "go --version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "Gopkg.toml")
        )
      ) {
        require("child_process").execSync("dep init");
        d("initialize go dep project.");
      } else {
        d("go dep already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "go",
  },
};

module.exports = languageConfig;
