# plantuml

A plugin for drawing plantuml.

## Install

To render anything other than sequence diagrams, you need to install graphviz.

```shell
ipm install --production syhily/inkdrop-plantuml-plugin
brew install graphviz
```

## Usage

    ```puml
    autonumber
    Bob -> Alice : Authentication Request
    Bob <- Alice : Authentication Response
    ```

    ```plantuml
    autonumber
    Bob -> Alice : Authentication Request
    Bob <- Alice : Authentication Response
    ```
