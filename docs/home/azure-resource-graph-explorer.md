# Write query using Azure Resource Graph Explorer

Navigate to Azure Resource Graph Explorer and type Kusto query
```
summarize Count=count() by type
| order by Count desc
```

The result has chart option which can be pinned to Dashboard

![image ghpages](./../images/graph-explorer.jpg)

We can further apply further on Dashboard if needed.
