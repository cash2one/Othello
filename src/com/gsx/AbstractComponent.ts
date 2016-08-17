/**
 * @file The abstract component.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IComponent } from './IComponent';
import { IEventEmitter } from './IEventEmitter';
let EventEmitter = require('eventemitter3');

export abstract class AbstractComponent implements IComponent {

    /**
     * The event emitter instance.
     */
    private eventEmitter: any;

    constructor() {
        this.eventEmitter = new EventEmitter();
    }

    /**
     * @override
     */
    emit(event: string, ...args: any[]): boolean {
        return this.eventEmitter.emit(event, args);
    }

    /**
     * @override
     */
    on(event: string, fn: Function, context?: any): IEventEmitter {
        this.eventEmitter.on(event, fn, context);
        return this;
    }

    /**
     * @override
     */
    once(event: string, fn: Function, context?: any): IEventEmitter {
        this.eventEmitter.once(event, fn, context);
        return this;
    }

    /**
     * @override
     */
    off(event: string, fn?: Function, context?: any, once?: boolean): IEventEmitter {
        this.eventEmitter.off(event, fn, context, once);
        return this;
    }

    /**
     * @abstract
     */
    abstract getNode(): Node;

    /**
     * @abstract
     */
    abstract destroy(): void;
}