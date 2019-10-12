module.exports = {
  description: "Go",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "go run",
  extension: ".go",
  errors: {
    "'go' is": {
      win32: "scoop install go",
      darwin: "brew install go",
      linux: "apt install go -y"
    },
    "you may need to install": {
      win32: "tocomplete <module>",
      darwin: "tocompletejuliainslta <module>",
      linux: "<module>"
    }
  },
  url: ""
};
