# Fix Delete

## File to fix

`COMP2139-ICE/Areas/ProjectManagement/Views/ProjectTask/Delete.cshtml`

## Old Code

<!-- Form to confirm deletion -->
//  <form asp-action="DeleteConfirmed" asp-route-id="@Model.ProjectId" method="post">

## New Code

<!-- Form to confirm deletion asp-route-ProjectTaskId UpdatedFix-->
//  <form asp-action="DeleteConfirmed" asp-route-ProjectTaskId="@Model.ProjectTaskId" method="post">
