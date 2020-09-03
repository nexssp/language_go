let languageConfig = Object.assign({}, require("./go.win32.nexss.config"));
languageConfig.compilers = {
  go: {
    install: "brew install golang",
    command: "go",
    args: "run <file>",
    help: ``,
  },
};

module.exports = languageConfig;
