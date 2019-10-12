## GO - Nexss Recipes

```sh
go env
go env GOPATH
export PATH=$PATH:$(go env GOPATH)/bin
export GOPATH=\$(go env GOPATH)

go get github.com/golang/example/hello
go install github.com/json-iterator/go

go mod init github.com/my/package
```
