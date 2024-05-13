---
title: "ADMIN: How to remove connections from the environment (eg. shared_logicflows)"
description: "Cleaning up **shared_logicflows** connections in error state is essential for maintaining a healthy Power Platform environment. By following the steps outlined in this blog post, you’ll keep your connections tidy and improve overall performance."
date: "2024-05-16"
image: "/blog-images/remove-connections.jpeg"
tags: Power Platform, Administration, Powershell
category: power-platform
featured: true
---

As an administrator managing a Power Platform environment, you may encounter scenarios where you need to remove connections, especially when they are in the error state. Large enterprises might also have problems with their Center of Excellence Starter Kit, where the flows fail due to a large number of connections in the error state. Whether it’s cleaning up unused connections or troubleshooting issues, understanding the process is essential. In this blog post, we’ll explore why removing connections is necessary and guide you through the steps.

For example, a <b>shared_logicflows</b> connector, that is related to apps that trigger flows, can be seen quite often in the error state, but it is not actually a connector. And we can clean it up.

#### Why Remove Connections?
- <b>Security and Compliance</b>: Unused connections can pose security risks. By removing them, you reduce the attack surface and ensure compliance.
- <b>Resource Optimization</b>: Clearing out unnecessary connections improves resource allocation within your environment.
- <b>Troubleshooting</b>: Removing problematic connections can help resolve issues related to authentication or data access.

#### PowerShell Script
The PowerShell script below is straightforward. It connects to your Power Platform environment, retrieves the problematic connections, removes them, and disconnects. You can schedule this script to run periodically or execute it manually when needed.

```
#Insert your own value
$environment = "YourEnvironmentName"

Add-PowerAppsAccount

$items = Get-AdminPowerAppConnection `
  -ConnectorName shared_logicflows `
  -EnvironmentName $environment `
| Where-Object {$_.Statuses[0].status -eq "error"}

ForEach ($item in $items)
{
  Remove-AdminPowerAppConnection `
    -ConnectionName $item.ConnectionName `
    -ConnectorName $item.ConnectorName `
    -EnvironmentName $item.EnvironmentName 
}

```
> Make sure to replace "YourEnvironmentName" with the actual name of your environment. This script retrieves all shared_logicflows connections in error state and removes them one by one.


#### Conclusion
Cleaning up <b>shared_logicflows</b> connections in error state is essential for maintaining a healthy Power Platform environment. By following the steps outlined in this blog post, you’ll keep your connections tidy and improve overall performance.

Remember to test the script in a non-production environment first to ensure it behaves as expected. Happy cleaning! 