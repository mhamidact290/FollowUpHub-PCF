# Follow-up Hub PCF
Multi-customer call notes and follow-up reminders for Dynamics 365 Contact Center, stored in Dataverse.

## Dataverse table required
Create a custom table such as `Contact Center Follow-up`, then add:
- Customer Name: Text
- Notes: Multiline Text
- Follow-up At: Date and Time, user local
- Status: Choice with Pending and Completed
- Priority: Choice with Normal and High, optional

After creating the table, copy the table/column logical names and Choice numeric values into the PCF properties.

## Included functions
- Take notes while speaking with a customer
- Create 5, 10, 15, or 30 minute reminders
- Show many customers simultaneously
- Countdown each pending reminder
- Highlight overdue reminders
- Snooze for 5 minutes
- Mark reminders completed
- Persist all records in Dataverse

## Security
Grant agents Create, Read, Write, and Append privileges on the custom follow-up table through a Dataverse security role. Use user-level access if agents should only see their own records.

## Build and deploy
This is source code. A machine or CI pipeline with Node.js, Power Platform CLI, and .NET must build and package it as a Dataverse solution. Import that solution into the Contact Center environment, add it as a custom productivity tool of type Control, and enable it in the agents' Experience profile.
