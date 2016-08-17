/**
 * @file The interface of the component.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IEventEmitter } from './IEventEmitter';

export interface IComponent extends IEventEmitter {

    /**
     * Get the component node.
     * @return The component node.
     */
    getNode(): Node;

    /**
     * Destroy the component.
     */
    destroy(): void;
}