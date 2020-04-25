# Install and manage applications using Chocolatey

Run command as admin
``` batch
$ @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

```

**Install** packages/applications
``` batch
choco install -y [app1] [app2] [app3] ...
```

Search application that you are looking for
``` batch
choco search [keyword]  // chocho search fabric
```

List all installed applications
``` batch
choco list -li // with version
```

**Export all installed applications** as powershell script
``` powershell
PS> choco list --local-only --idonly | % { "choco install -y " + $_ } > choco_install.ps1 
```
Don't forget to **remove first and last** line from the file, one with choco version and other with applications count.Once exported run the file using powershell **as admin** to reinstall all the application

**Update** all applications
``` batch
cup -y all
```

we can install vs code extensions from command as well
``` batch
code --install-extension [Unique Identifier] // Eg Angular.ng-template
```

**Export vs code extensions**:
``` powershell
PS> code --list-extensions | % { "code --install-extension " + $_ } > vscode_extensions_install.ps1
```
Run vscode_extensions_install.ps1 to install all exported extensions.

similarly, for Visual Studio extensions or packages
``` batch
choco install -y visualstudio2017professional --package-parameters="'--add Microsoft.VisualStudio.Component.Git'"
``` 

::: tip
supported code block extensions
[Code block types](https://github.com/PrismJS/prism/blob/master/components.json)
:::


