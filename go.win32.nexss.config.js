const path = require("path");
process.env.GOPATH = path.resolve("../../../src");
// console.log("gopath:", process.env.GOPATH);
let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Go";
languageConfig.description =
  "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.";
languageConfig.url = "https://golang.org/";
languageConfig.extensions = [".go"];
languageConfig.builders = {};
languageConfig.compilers = {
  go: {
    install: "scoop install go",
    command: "go",
    args: "run <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.go.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "scoop install go",
    messageAfterInstallation: "",
    installed: "dep installed <args>",
    search: "dep search <args>",
    install: "dep require <args>",
    uninstall: "dep remove <args>",
    help: "dep <args>",
    version: "dep version",
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
    else: "dep <default> <args>"
  }
};

module.exports = languageConfig;
