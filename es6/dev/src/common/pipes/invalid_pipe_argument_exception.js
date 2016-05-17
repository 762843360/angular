import { stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
export class InvalidPipeArgumentException extends BaseException {
    constructor(type, value) {
        super(`Invalid argument '${value}' for pipe '${stringify(type)}'`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZF9waXBlX2FyZ3VtZW50X2V4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtTk5XWll3ZkQudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vcGlwZXMvaW52YWxpZF9waXBlX2FyZ3VtZW50X2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFjLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUN4RCxFQUFDLGFBQWEsRUFBbUIsTUFBTSxnQ0FBZ0M7QUFFOUUsa0RBQWtELGFBQWE7SUFDN0QsWUFBWSxJQUFVLEVBQUUsS0FBYTtRQUNuQyxNQUFNLHFCQUFxQixLQUFLLGVBQWUsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRSxDQUFDO0FBQ0gsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVCwgVHlwZSwgc3RyaW5naWZ5fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgSW52YWxpZFBpcGVBcmd1bWVudEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlOiBUeXBlLCB2YWx1ZTogT2JqZWN0KSB7XG4gICAgc3VwZXIoYEludmFsaWQgYXJndW1lbnQgJyR7dmFsdWV9JyBmb3IgcGlwZSAnJHtzdHJpbmdpZnkodHlwZSl9J2ApO1xuICB9XG59XG4iXX0=