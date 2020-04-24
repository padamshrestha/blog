# Install and manage application using chocolatey

## Install Chocolatey

Run command as admin
```
$ @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

```

Install packages
```
choco install -y [app1] [app2] [app3] ...
```

Search application that you are looking for
```
choco search [keyword]  // chocho search fabric
```

List all installed applications
```
choco list -li // with version
```

Export install applications as powershell script
```
PS> choco list --local-only --idonly | % { "choco install -y " + $_ } > choco_install.ps1 
```
Don't forget to **remove first and last** line from the file, one with choco version and other with applications count.Once exported run the file using powershell **as admin** to reinstall all the application

Update all applications
```
cup -y all
```

we can install vs code extensions from command as well
```
code --install-extension [Unique Identifier] // Eg Angular.ng-template
```

similarly, for visual studio
```
choco install -y visualstudio2017professional --package-parameters="'--add Microsoft.VisualStudio.Component.Git'"
``` 



