let languageConfig = Object.assign({}, require("./go.win32.nexss.config"));
const sudo = process.sudo;

languageConfig.compilers = {
  go: {
    install: `${sudo}apt install golang`,
    command: "go",
    args: "run <file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ORACLE:
    languageConfig.compilers.go.install = process.replacePMByDistro(
      `${sudo}yum install -y oracle-golang-release-el7 golang`
    );
    break;
  case process.distros.ALPINE:
    languageConfig.compilers.go.install = `${sudo}apk add --update -y --no-cache git make musl-dev go curl`;
    break;
  case process.distros.ARCH:
    languageConfig.compilers.go.install = `${sudo}pacman -Sy --noconfirm go`;
    break;
  default:
    languageConfig.compilers.go.install = process.replacePMByDistro(
      languageConfig.compilers.go.install
    );
    break;
}

module.exports = languageConfig;
