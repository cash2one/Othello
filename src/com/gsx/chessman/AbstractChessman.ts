/**
 * @file The abstract chessman
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { AbstractTemplatedComponent } from '../AbstractTemplatedComponent';
import { IChessman } from './IChessman';
import { IAxis } from '../IAxis';
import Axis from '../Axis';
import S = require('string');
import './Chessman.html';

// skins
require('!style!css!sass!./Chessman.scss');

export abstract class AbstractChessman extends AbstractTemplatedComponent implements IChessman {

    /**
     * The coordinate axis of this black chessman.
     */
    private axis: IAxis;

    constructor(x: number, y: number) {
        super();
        this.axis = new Axis(x, y);
    }

    /**
     * @override
     */
    public getTemplate(): string {
        return S(require('./Chessman.html')).template({ styleClass: this.getStyleClass() }).s;
    }

    /**
     * Get the style class name.
     * @return The style class name.
     */
    abstract getStyleClass(): string;

    /**
     * @override
     */
    public getAxis(): IAxis {
        return this.axis;
    }
}