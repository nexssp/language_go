const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".go");

const phpVersion = "7";
pl.add("title", "go");
pl.add("compiler", "go");
pl.add("compilerInstallation", {
  win32: "scoop install go",
  linux: "sudo apt-get -y install go",
  darwin: "brew install go"
});

pl.add("compilerArgs", ["run"]);
//pl.add("compilerArgsPost", ["run"]);

pl.add("description", `Go`);

pl.add("packageManager", {
  all: "composer require <package>"
});
// pl.add("afterPackageInstallMessage", {
//   all:
//     "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';"
// });
pl.add("url", "https://golang.org/");
// pl.addError("Uncaught Error: Class '(.*?)'", {
//   win32: "nexss install php <package>",
//   darwin: "nexss install php <package>",
//   linux: "nexss install php <package>"
// });

pl.addHelp("executeCommandLine", "php -r");
pl.addHelp("InteractiveShell", "php -a");

module.exports = pl.data;
