let languageConfig = Object.assign({}, require("./go.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}
languageConfig.compilers = {
  go: {
    install: `${sudo}apt install golang`,
    command: "go",
    args: "run <file>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Alpine Linux":
    languageConfig.compilers.go.install = `${sudo}apk add --update -y --no-cache vim git make musl-dev go curl`;
    break;
  case "Arch Linux":
    languageConfig.compilers.go.install = `${sudo}pacman -Sy --noconfirm go`;
    break;
  default:
    languageConfig.compilers.go.install = replaceCommandByDist(
      languageConfig.compilers.go.install
    );
    break;
}

module.exports = languageConfig;
