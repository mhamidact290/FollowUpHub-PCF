/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    tableName: ComponentFramework.PropertyTypes.StringProperty;
    customerColumn: ComponentFramework.PropertyTypes.StringProperty;
    notesColumn: ComponentFramework.PropertyTypes.StringProperty;
    followUpAtColumn: ComponentFramework.PropertyTypes.StringProperty;
    statusColumn: ComponentFramework.PropertyTypes.StringProperty;
    priorityColumn: ComponentFramework.PropertyTypes.StringProperty;
    pendingStatusValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
    completedStatusValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
    normalPriorityValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
    highPriorityValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
}
