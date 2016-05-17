var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from 'angular2/src/core/di';
import { Compiler } from './compiler';
import { isPresent } from 'angular2/src/facade/lang';
import { AppViewManager } from 'angular2/src/core/linker/view_manager';
/**
 * Represents an instance of a Component created via {@link DynamicComponentLoader}.
 *
 * `ComponentRef` provides access to the Component Instance as well other objects related to this
 * Component Instance and allows you to destroy the Component Instance via the {@link #dispose}
 * method.
 */
export class ComponentRef {
    /**
     * The {@link ViewRef} of the Host View of this Component instance.
     */
    get hostView() {
        return this.location.internalElement.parentView.ref;
    }
    /**
     * @internal
     *
     * The instance of the component.
     *
     * TODO(i): this api should be removed
     */
    get hostComponent() { return this.instance; }
}
export class ComponentRef_ extends ComponentRef {
    /**
     * TODO(i): refactor into public/private fields
     */
    constructor(location, instance, componentType, injector, _dispose) {
        super();
        this._dispose = _dispose;
        this.location = location;
        this.instance = instance;
        this.componentType = componentType;
        this.injector = injector;
    }
    /**
     * @internal
     *
     * Returns the type of this Component instance.
     *
     * TODO(i): this api should be removed
     */
    get hostComponentType() { return this.componentType; }
    dispose() { this._dispose(); }
}
/**
 * Service for instantiating a Component and attaching it to a View at a specified location.
 */
export class DynamicComponentLoader {
}
export let DynamicComponentLoader_ = class DynamicComponentLoader_ extends DynamicComponentLoader {
    constructor(_compiler, _viewManager) {
        super();
        this._compiler = _compiler;
        this._viewManager = _viewManager;
    }
    loadAsRoot(type, overrideSelector, injector, onDispose, projectableNodes) {
        return this._compiler.compileInHost(type).then(hostProtoViewRef => {
            var hostViewRef = this._viewManager.createRootHostView(hostProtoViewRef, overrideSelector, injector, projectableNodes);
            var newLocation = this._viewManager.getHostElement(hostViewRef);
            var component = this._viewManager.getComponent(newLocation);
            var dispose = () => {
                if (isPresent(onDispose)) {
                    onDispose();
                }
                this._viewManager.destroyRootHostView(hostViewRef);
            };
            return new ComponentRef_(newLocation, component, type, injector, dispose);
        });
    }
    loadIntoLocation(type, hostLocation, anchorName, providers = null, projectableNodes = null) {
        return this.loadNextToLocation(type, this._viewManager.getNamedElementInComponentView(hostLocation, anchorName), providers, projectableNodes);
    }
    loadNextToLocation(type, location, providers = null, projectableNodes = null) {
        return this._compiler.compileInHost(type).then(hostProtoViewRef => {
            var viewContainer = this._viewManager.getViewContainer(location);
            var hostViewRef = viewContainer.createHostView(hostProtoViewRef, viewContainer.length, providers, projectableNodes);
            var newLocation = this._viewManager.getHostElement(hostViewRef);
            var component = this._viewManager.getComponent(newLocation);
            var dispose = () => {
                var index = viewContainer.indexOf(hostViewRef);
                if (!hostViewRef.destroyed && index !== -1) {
                    viewContainer.remove(index);
                }
            };
            return new ComponentRef_(newLocation, component, type, null, dispose);
        });
    }
};
DynamicComponentLoader_ = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Compiler, AppViewManager])
], DynamicComponentLoader_);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY19jb21wb25lbnRfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1OTldaWXdmRC50bXAvYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFxRCxVQUFVLEVBQUMsTUFBTSxzQkFBc0I7T0FDNUYsRUFBQyxRQUFRLEVBQUMsTUFBTSxZQUFZO09BQzVCLEVBQTBCLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUNwRSxFQUFDLGNBQWMsRUFBQyxNQUFNLHVDQUF1QztBQUlwRTs7Ozs7O0dBTUc7QUFDSDtJQTBCRTs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE1BQU0sQ0FBZSxJQUFJLENBQUMsUUFBUyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLGFBQWEsS0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFRcEQsQ0FBQztBQUVELG1DQUFtQyxZQUFZO0lBQzdDOztPQUVHO0lBQ0gsWUFBWSxRQUFvQixFQUFFLFFBQWEsRUFBRSxhQUFtQixFQUFFLFFBQWtCLEVBQ3BFLFFBQW9CO1FBQ3RDLE9BQU8sQ0FBQztRQURVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksaUJBQWlCLEtBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFh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Z0JBQzlCLENBQUM7WUFDSCxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUFoREQ7SUFBQyxVQUFVLEVBQUU7OzJCQUFBO0FBZ0RaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtLZXksIEluamVjdG9yLCBSZXNvbHZlZFByb3ZpZGVyLCBQcm92aWRlciwgcHJvdmlkZSwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnLi9jb21waWxlcic7XG5pbXBvcnQge2lzVHlwZSwgVHlwZSwgc3RyaW5naWZ5LCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0FwcFZpZXdNYW5hZ2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19tYW5hZ2VyJztcbmltcG9ydCB7RWxlbWVudFJlZiwgRWxlbWVudFJlZl99IGZyb20gJy4vZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtIb3N0Vmlld1JlZn0gZnJvbSAnLi92aWV3X3JlZic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbnN0YW5jZSBvZiBhIENvbXBvbmVudCBjcmVhdGVkIHZpYSB7QGxpbmsgRHluYW1pY0NvbXBvbmVudExvYWRlcn0uXG4gKlxuICogYENvbXBvbmVudFJlZmAgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBDb21wb25lbnQgSW5zdGFuY2UgYXMgd2VsbCBvdGhlciBvYmplY3RzIHJlbGF0ZWQgdG8gdGhpc1xuICogQ29tcG9uZW50IEluc3RhbmNlIGFuZCBhbGxvd3MgeW91IHRvIGRlc3Ryb3kgdGhlIENvbXBvbmVudCBJbnN0YW5jZSB2aWEgdGhlIHtAbGluayAjZGlzcG9zZX1cbiAqIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFJlZiB7XG4gIC8qKlxuICAgKiBUaGUgaW5qZWN0b3IgcHJvdmlkZWQge0BsaW5rIER5bmFtaWNDb21wb25lbnRMb2FkZXIjbG9hZEFzUm9vdH0uXG4gICAqXG4gICAqIFRPRE8oaSk6IHRoaXMgYXBpIGlzIHVzZWxlc3MgYW5kIHNob3VsZCBiZSByZXBsYWNlZCBieSBhbiBpbmplY3RvciByZXRyaWV2ZWQgZnJvbVxuICAgKiAgICAgdGhlIEhvc3RFbGVtZW50UmVmLCB3aGljaCBpcyBjdXJyZW50bHkgbm90IHBvc3NpYmxlLlxuICAgKi9cbiAgaW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBMb2NhdGlvbiBvZiB0aGUgSG9zdCBFbGVtZW50IG9mIHRoaXMgQ29tcG9uZW50IEluc3RhbmNlLlxuICAgKi9cbiAgbG9jYXRpb246IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIFRoZSBpbnN0YW5jZSBvZiB0aGUgQ29tcG9uZW50LlxuICAgKi9cbiAgaW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogVGhlIHVzZXIgZGVmaW5lZCBjb21wb25lbnQgdHlwZSwgcmVwcmVzZW50ZWQgdmlhIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBjdXN0b21pemUgd29yZGluZyBmb3IgRGFydCBkb2NzIC0tPlxuICAgKi9cbiAgY29tcG9uZW50VHlwZTogVHlwZTtcblxuICAvKipcbiAgICogVGhlIHtAbGluayBWaWV3UmVmfSBvZiB0aGUgSG9zdCBWaWV3IG9mIHRoaXMgQ29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgZ2V0IGhvc3RWaWV3KCk6IEhvc3RWaWV3UmVmIHtcbiAgICByZXR1cm4gKDxFbGVtZW50UmVmXz50aGlzLmxvY2F0aW9uKS5pbnRlcm5hbEVsZW1lbnQucGFyZW50Vmlldy5yZWY7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIFRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBUT0RPKGkpOiB0aGlzIGFwaSBzaG91bGQgYmUgcmVtb3ZlZFxuICAgKi9cbiAgZ2V0IGhvc3RDb21wb25lbnQoKTogYW55IHsgcmV0dXJuIHRoaXMuaW5zdGFuY2U7IH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBhbmQgYWxsIG9mIHRoZSBkYXRhIHN0cnVjdHVyZXMgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgKlxuICAgKiBUT0RPKGkpOiByZW5hbWUgdG8gZGVzdHJveSB0byBiZSBjb25zaXN0ZW50IHdpdGggQXBwVmlld01hbmFnZXIgYW5kIFZpZXdDb250YWluZXJSZWZcbiAgICovXG4gIGFic3RyYWN0IGRpc3Bvc2UoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFJlZl8gZXh0ZW5kcyBDb21wb25lbnRSZWYge1xuICAvKipcbiAgICogVE9ETyhpKTogcmVmYWN0b3IgaW50byBwdWJsaWMvcHJpdmF0ZSBmaWVsZHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBFbGVtZW50UmVmLCBpbnN0YW5jZTogYW55LCBjb21wb25lbnRUeXBlOiBUeXBlLCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2Rpc3Bvc2U6ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gY29tcG9uZW50VHlwZTtcbiAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHR5cGUgb2YgdGhpcyBDb21wb25lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIFRPRE8oaSk6IHRoaXMgYXBpIHNob3VsZCBiZSByZW1vdmVkXG4gICAqL1xuICBnZXQgaG9zdENvbXBvbmVudFR5cGUoKTogVHlwZSB7IHJldHVybiB0aGlzLmNvbXBvbmVudFR5cGU7IH1cblxuICBkaXNwb3NlKCk6IHZvaWQgeyB0aGlzLl9kaXNwb3NlKCk7IH1cbn1cblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBpbnN0YW50aWF0aW5nIGEgQ29tcG9uZW50IGFuZCBhdHRhY2hpbmcgaXQgdG8gYSBWaWV3IGF0IGEgc3BlY2lmaWVkIGxvY2F0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY0NvbXBvbmVudExvYWRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgQ29tcG9uZW50IGB0eXBlYCBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlXG4gICAqIHBsYXRmb3JtLXNwZWNpZmljIGdsb2JhbCB2aWV3IHRoYXQgbWF0Y2hlcyB0aGUgY29tcG9uZW50J3Mgc2VsZWN0b3IuXG4gICAqXG4gICAqIEluIGEgYnJvd3NlciB0aGUgcGxhdGZvcm0tc3BlY2lmaWMgZ2xvYmFsIHZpZXcgaXMgdGhlIG1haW4gRE9NIERvY3VtZW50LlxuICAgKlxuICAgKiBJZiBuZWVkZWQsIHRoZSBjb21wb25lbnQncyBzZWxlY3RvciBjYW4gYmUgb3ZlcnJpZGRlbiB2aWEgYG92ZXJyaWRlU2VsZWN0b3JgLlxuICAgKlxuICAgKiBZb3UgY2FuIG9wdGlvbmFsbHkgcHJvdmlkZSBgaW5qZWN0b3JgIGFuZCB0aGlzIHtAbGluayBJbmplY3Rvcn0gd2lsbCBiZSB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZVxuICAgKiBDb21wb25lbnQuXG4gICAqXG4gICAqIFRvIGJlIG5vdGlmaWVkIHdoZW4gdGhpcyBDb21wb25lbnQgaW5zdGFuY2UgaXMgZGVzdHJveWVkLCB5b3UgY2FuIGFsc28gb3B0aW9uYWxseSBwcm92aWRlXG4gICAqIGBvbkRpc3Bvc2VgIGNhbGxiYWNrLlxuICAgKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHtAbGluayBDb21wb25lbnRSZWZ9IHJlcHJlc2VudGluZyB0aGUgbmV3bHkgY3JlYXRlZCBDb21wb25lbnQuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYFxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ2NoaWxkLWNvbXBvbmVudCcsXG4gICAqICAgdGVtcGxhdGU6ICdDaGlsZCdcbiAgICogfSlcbiAgICogY2xhc3MgQ2hpbGRDb21wb25lbnQge1xuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICogICB0ZW1wbGF0ZTogJ1BhcmVudCAoPGNoaWxkIGlkPVwiY2hpbGRcIj48L2NoaWxkPiknXG4gICAqIH0pXG4gICAqIGNsYXNzIE15QXBwIHtcbiAgICogICBjb25zdHJ1Y3RvcihkY2w6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgKiAgICAgZGNsLmxvYWRBc1Jvb3QoQ2hpbGRDb21wb25lbnQsICcjY2hpbGQnLCBpbmplY3Rvcik7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIGJvb3RzdHJhcChNeUFwcCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBSZXN1bHRpbmcgRE9NOlxuICAgKlxuICAgKiBgYGBcbiAgICogPG15LWFwcD5cbiAgICogICBQYXJlbnQgKFxuICAgKiAgICAgPGNoaWxkIGlkPVwiY2hpbGRcIj5DaGlsZDwvY2hpbGQ+XG4gICAqICAgKVxuICAgKiA8L215LWFwcD5cbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQXNSb290KHR5cGU6IFR5cGUsIG92ZXJyaWRlU2VsZWN0b3I6IHN0cmluZywgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgIG9uRGlzcG9zZT86ICgpID0+IHZvaWQsIHByb2plY3RhYmxlTm9kZXM/OiBhbnlbXVtdKTogUHJvbWlzZTxDb21wb25lbnRSZWY+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgQ29tcG9uZW50IGFuZCBhdHRhY2hlcyBpdCB0byBhIFZpZXcgQ29udGFpbmVyIGxvY2F0ZWQgaW5zaWRlIG9mIHRoZVxuICAgKiBDb21wb25lbnQgVmlldyBvZiBhbm90aGVyIENvbXBvbmVudCBpbnN0YW5jZS5cbiAgICpcbiAgICogVGhlIHRhcmdldGVkIENvbXBvbmVudCBJbnN0YW5jZSBpcyBzcGVjaWZpZWQgdmlhIGl0cyBgaG9zdExvY2F0aW9uYCB7QGxpbmsgRWxlbWVudFJlZn0uIFRoZVxuICAgKiBsb2NhdGlvbiB3aXRoaW4gdGhlIENvbXBvbmVudCBWaWV3IG9mIHRoaXMgQ29tcG9uZW50IEluc3RhbmNlIGlzIHNwZWNpZmllZCB2aWEgYGFuY2hvck5hbWVgXG4gICAqIFRlbXBsYXRlIFZhcmlhYmxlIE5hbWUuXG4gICAqXG4gICAqIFlvdSBjYW4gb3B0aW9uYWxseSBwcm92aWRlIGBwcm92aWRlcnNgIHRvIGNvbmZpZ3VyZSB0aGUge0BsaW5rIEluamVjdG9yfSBwcm92aXNpb25lZCBmb3IgdGhpc1xuICAgKiBDb21wb25lbnQgSW5zdGFuY2UuXG4gICAqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIGZvciB0aGUge0BsaW5rIENvbXBvbmVudFJlZn0gcmVwcmVzZW50aW5nIHRoZSBuZXdseSBjcmVhdGVkIENvbXBvbmVudC5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnY2hpbGQtY29tcG9uZW50JyxcbiAgICogICB0ZW1wbGF0ZTogJ0NoaWxkJ1xuICAgKiB9KVxuICAgKiBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgKiAgIHRlbXBsYXRlOiAnUGFyZW50ICg8ZGl2ICNjaGlsZD48L2Rpdj4pJ1xuICAgKiB9KVxuICAgKiBjbGFzcyBNeUFwcCB7XG4gICAqICAgY29uc3RydWN0b3IoZGNsOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAqICAgICBkY2wubG9hZEludG9Mb2NhdGlvbihDaGlsZENvbXBvbmVudCwgZWxlbWVudFJlZiwgJ2NoaWxkJyk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIGJvb3RzdHJhcChNeUFwcCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBSZXN1bHRpbmcgRE9NOlxuICAgKlxuICAgKiBgYGBcbiAgICogPG15LWFwcD5cbiAgICogICAgUGFyZW50IChcbiAgICogICAgICA8ZGl2ICNjaGlsZD1cIlwiIGNsYXNzPVwibmctYmluZGluZ1wiPjwvZGl2PlxuICAgKiAgICAgIDxjaGlsZC1jb21wb25lbnQgY2xhc3M9XCJuZy1iaW5kaW5nXCI+Q2hpbGQ8L2NoaWxkLWNvbXBvbmVudD5cbiAgICogICAgKVxuICAgKiA8L215LWFwcD5cbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkSW50b0xvY2F0aW9uKHR5cGU6IFR5cGUsIGhvc3RMb2NhdGlvbjogRWxlbWVudFJlZiwgYW5jaG9yTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycz86IFJlc29sdmVkUHJvdmlkZXJbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IFByb21pc2U8Q29tcG9uZW50UmVmPjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIENvbXBvbmVudCBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIFZpZXcgQ29udGFpbmVyIGZvdW5kIGF0IHRoZVxuICAgKiBgbG9jYXRpb25gIHNwZWNpZmllZCBhcyB7QGxpbmsgRWxlbWVudFJlZn0uXG4gICAqXG4gICAqIFlvdSBjYW4gb3B0aW9uYWxseSBwcm92aWRlIGBwcm92aWRlcnNgIHRvIGNvbmZpZ3VyZSB0aGUge0BsaW5rIEluamVjdG9yfSBwcm92aXNpb25lZCBmb3IgdGhpc1xuICAgKiBDb21wb25lbnQgSW5zdGFuY2UuXG4gICAqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIGZvciB0aGUge0BsaW5rIENvbXBvbmVudFJlZn0gcmVwcmVzZW50aW5nIHRoZSBuZXdseSBjcmVhdGVkIENvbXBvbmVudC5cbiAgICpcbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnY2hpbGQtY29tcG9uZW50JyxcbiAgICogICB0ZW1wbGF0ZTogJ0NoaWxkJ1xuICAgKiB9KVxuICAgKiBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgKiAgIHRlbXBsYXRlOiAnUGFyZW50J1xuICAgKiB9KVxuICAgKiBjbGFzcyBNeUFwcCB7XG4gICAqICAgY29uc3RydWN0b3IoZGNsOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAqICAgICBkY2wubG9hZE5leHRUb0xvY2F0aW9uKENoaWxkQ29tcG9uZW50LCBlbGVtZW50UmVmKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogYm9vdHN0cmFwKE15QXBwKTtcbiAgICogYGBgXG4gICAqXG4gICAqIFJlc3VsdGluZyBET006XG4gICAqXG4gICAqIGBgYFxuICAgKiA8bXktYXBwPlBhcmVudDwvbXktYXBwPlxuICAgKiA8Y2hpbGQtY29tcG9uZW50PkNoaWxkPC9jaGlsZC1jb21wb25lbnQ+XG4gICAqIGBgYFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZE5leHRUb0xvY2F0aW9uKHR5cGU6IFR5cGUsIGxvY2F0aW9uOiBFbGVtZW50UmVmLCBwcm92aWRlcnM/OiBSZXNvbHZlZFByb3ZpZGVyW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IFByb21pc2U8Q29tcG9uZW50UmVmPjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRMb2FkZXJfIGV4dGVuZHMgRHluYW1pY0NvbXBvbmVudExvYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBpbGVyOiBDb21waWxlciwgcHJpdmF0ZSBfdmlld01hbmFnZXI6IEFwcFZpZXdNYW5hZ2VyKSB7IHN1cGVyKCk7IH1cblxuICBsb2FkQXNSb290KHR5cGU6IFR5cGUsIG92ZXJyaWRlU2VsZWN0b3I6IHN0cmluZywgaW5qZWN0b3I6IEluamVjdG9yLCBvbkRpc3Bvc2U/OiAoKSA9PiB2b2lkLFxuICAgICAgICAgICAgIHByb2plY3RhYmxlTm9kZXM/OiBhbnlbXVtdKTogUHJvbWlzZTxDb21wb25lbnRSZWY+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZUluSG9zdCh0eXBlKS50aGVuKGhvc3RQcm90b1ZpZXdSZWYgPT4ge1xuICAgICAgdmFyIGhvc3RWaWV3UmVmID0gdGhpcy5fdmlld01hbmFnZXIuY3JlYXRlUm9vdEhvc3RWaWV3KGhvc3RQcm90b1ZpZXdSZWYsIG92ZXJyaWRlU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXMpO1xuICAgICAgdmFyIG5ld0xvY2F0aW9uID0gdGhpcy5fdmlld01hbmFnZXIuZ2V0SG9zdEVsZW1lbnQoaG9zdFZpZXdSZWYpO1xuICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuX3ZpZXdNYW5hZ2VyLmdldENvbXBvbmVudChuZXdMb2NhdGlvbik7XG5cbiAgICAgIHZhciBkaXNwb3NlID0gKCkgPT4ge1xuICAgICAgICBpZiAoaXNQcmVzZW50KG9uRGlzcG9zZSkpIHtcbiAgICAgICAgICBvbkRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92aWV3TWFuYWdlci5kZXN0cm95Um9vdEhvc3RWaWV3KGhvc3RWaWV3UmVmKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IENvbXBvbmVudFJlZl8obmV3TG9jYXRpb24sIGNvbXBvbmVudCwgdHlwZSwgaW5qZWN0b3IsIGRpc3Bvc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZEludG9Mb2NhdGlvbih0eXBlOiBUeXBlLCBob3N0TG9jYXRpb246IEVsZW1lbnRSZWYsIGFuY2hvck5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFJlc29sdmVkUHJvdmlkZXJbXSA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgcHJvamVjdGFibGVOb2RlczogYW55W11bXSA9IG51bGwpOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICAgIHJldHVybiB0aGlzLmxvYWROZXh0VG9Mb2NhdGlvbihcbiAgICAgICAgdHlwZSwgdGhpcy5fdmlld01hbmFnZXIuZ2V0TmFtZWRFbGVtZW50SW5Db21wb25lbnRWaWV3KGhvc3RMb2NhdGlvbiwgYW5jaG9yTmFtZSksIHByb3ZpZGVycyxcbiAgICAgICAgcHJvamVjdGFibGVOb2Rlcyk7XG4gIH1cblxuICBsb2FkTmV4dFRvTG9jYXRpb24odHlwZTogVHlwZSwgbG9jYXRpb246IEVsZW1lbnRSZWYsIHByb3ZpZGVyczogUmVzb2x2ZWRQcm92aWRlcltdID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgIHByb2plY3RhYmxlTm9kZXM6IGFueVtdW10gPSBudWxsKTogUHJvbWlzZTxDb21wb25lbnRSZWY+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZUluSG9zdCh0eXBlKS50aGVuKGhvc3RQcm90b1ZpZXdSZWYgPT4ge1xuICAgICAgdmFyIHZpZXdDb250YWluZXIgPSB0aGlzLl92aWV3TWFuYWdlci5nZXRWaWV3Q29udGFpbmVyKGxvY2F0aW9uKTtcbiAgICAgIHZhciBob3N0Vmlld1JlZiA9IHZpZXdDb250YWluZXIuY3JlYXRlSG9zdFZpZXcoaG9zdFByb3RvVmlld1JlZiwgdmlld0NvbnRhaW5lci5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycywgcHJvamVjdGFibGVOb2Rlcyk7XG4gICAgICB2YXIgbmV3TG9jYXRpb24gPSB0aGlzLl92aWV3TWFuYWdlci5nZXRIb3N0RWxlbWVudChob3N0Vmlld1JlZik7XG4gICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5fdmlld01hbmFnZXIuZ2V0Q29tcG9uZW50KG5ld0xvY2F0aW9uKTtcblxuICAgICAgdmFyIGRpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICAgIHZhciBpbmRleCA9IHZpZXdDb250YWluZXIuaW5kZXhPZihob3N0Vmlld1JlZik7XG4gICAgICAgIGlmICghaG9zdFZpZXdSZWYuZGVzdHJveWVkICYmIGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50UmVmXyhuZXdMb2NhdGlvbiwgY29tcG9uZW50LCB0eXBlLCBudWxsLCBkaXNwb3NlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19