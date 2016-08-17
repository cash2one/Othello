/**
 * @file The abstract templated component.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { AbstractComponent } from './AbstractComponent';
import { ITemplated } from './ITemplated';
import S = require('string');

export abstract class AbstractTemplatedComponent extends AbstractComponent implements ITemplated {
    
    constructor() {
        super();
        S.TMPL_OPEN = '${';
        S.TMPL_CLOSE = '}';
    }

    /**
     * The component node.
     */
    private node: Node;

    /**
     * @abstract
     */
    abstract getTemplate(): string;

    /**
     * @override
     */
    public getNode(): Node {
        if (!this.node) {
            let fragment: DocumentFragment = document.createDocumentFragment();
            let tempNode: Element = <Element>fragment.appendChild(document.createElement('div'));
            tempNode.innerHTML = this.getTemplate();
            this.node = tempNode.firstChild;
            tempNode.textContent = ''; // Ensure the created nodes are orphaned.
            fragment.textContent = ''; // Remove wrapper from fragment.
        }
        return this.node;
    }

    /**
     * @override
     */
    public destroy(): void {
        let fragment: DocumentFragment = document.createDocumentFragment();
        let node: Node = this.getNode();
        fragment.appendChild(node);
        fragment.removeChild(node);
        fragment.textContent = '';
    }
}