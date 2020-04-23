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

ActivityVector provide the sequence of execution for Async calls so it's helpful on building the call stack during investigation

::: tip
:bulb: Notes
* Leverage TraceEvent not just ClientEvents using raid/session id etc
* Leverage activity vector, activity type, application, service
* Use custom dimensions when needed
* Use status app for environment details, tenant details, user information
* Use tsg/wiki - all possible exception are there so search for it
* xrm exceptions - there is an amazing wiki - use that (xrm is on top of CDS)
* Play with product to understand how something should work
* Big picture - don't focus on just one issue what is reported - offer example
* repro - last thing to do 
:::

::: tip Apps
* Schedular for scheduling interviews and stuff
* Attract

:::

## Kusto Environment
![Demo](./../images/kusto_troubleshooting.png)

## ICM Query
![ICM QUery](./../images/Icm_Query.png)


