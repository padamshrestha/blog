# Troubleshoot using Kusto

Kusto Extra MetaData is stored in property bag
CustomDimentions, ClientEvents, CustomEvent and TraceEvent

```
ClientEvents
| where Timestamp > todatetime("2019-04-01 20:31:02Z") and Timestamp < todatetime("2019-04-01 20:51:02Z")
| where Name == "GenericErrorDialog"
| extend cd = parsejson(CustomDimentions) 
| where cd.errorCode contains "GenericGetCompanyInfo" or cd.errorMessage contains "Undefined"
| where cd.rootActivity == ""
```

```
TraceEvent
| where ActivityType contains "HcmAttEOL"
```

```
ClientEvents
| where RootActivityId == "" 
// If there is no output then we can get it from TraceEvent
```

```
TraceEvent
| where RootActivityId = ""
```

ActivityVector provide the sequence of exectution for Async calls so it's helpful on bulding the call stack during investigation



![Demo](./../images/kusto_troubleshooting.png)


