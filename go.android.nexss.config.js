let languageConfig = Object.assign({}, require("./go.win32.nexss.config"));
// const sudo = process.sudo;

languageConfig.compilers = {
  go: {
    install: `apt install golang`,
    command: "go",
    args: "run <file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

module.exports = languageConfig;
