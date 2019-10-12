// TODO: To implement json modification data
package main
	
import "github.com/json-iterator/go"
import (
    
    "bufio"
    "fmt"
    "os"
)

func main() {
    scanner := bufio.NewScanner(os.Stdin)

    var json = jsoniter.ConfigCompatibleWithStandardLibrary

    // for scanner.Scan() {
    //     fmt.Println(scanner.Text())
    // }

    var json = jsoniter.ConfigCompatibleWithStandardLibrary
    json.Unmarshal(os.Stdin, &data)

    fmt.Println(data)

    // enc := json.NewEncoder(os.Stdout)
    
    // enc.Encode(enc)

    if err := scanner.Err(); err != nil {
            fmt.Println(err)
    }
}