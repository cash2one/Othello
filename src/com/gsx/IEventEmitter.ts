/**
 * @file The interface of the event emitter.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

export interface IEventEmitter {

    /**
     * Emit an event to all registered event listeners.
     *
     * @param {String} event The name of the event.
     * @return {Boolean} Indication if we've emitted an event.
     */
    emit(event: string, ...args: any[]): boolean;

    /**
     * Register a new EventListener for the given event.
     *
     * @param {String} event Name of the event.
     * @param {Function} fn Callback function.
     * @param {Mixed} [context=this] The context of the function.
     * @return {IEventEmitter}
     */
    on(event: string, fn: Function, context?: any): IEventEmitter;

    /**
     * Add an EventListener that's only called once.
     *
     * @param {String} event Name of the event.
     * @param {Function} fn Callback function.
     * @param {Mixed} [context=this] The context of the function.
     * @return {IEventEmitter}
     */
    once(event: string, fn: Function, context?: any): IEventEmitter;

    /**
     * Remove event listeners.
     *
     * @param {String} event The event we want to remove.
     * @param {Function} fn The listener that we need to find.
     * @param {Mixed} context Only remove listeners matching this context.
     * @param {Boolean} once Only remove once listeners.
     * @return {IEventEmitter}
     */
    off(event: string, fn?: Function, context?: any, once?: boolean): IEventEmitter;
}