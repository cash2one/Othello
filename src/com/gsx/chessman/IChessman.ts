/**
 * @file The interface of chessman.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IAxis } from '../IAxis';
import { IComponent } from '../IComponent';
import { ITemplated } from '../ITemplated';

export interface IChessman extends IComponent, ITemplated {

    /**
     * Get the coordinate axis of this chessman.
     * @return {IAxis} The coordinate axis of this chessman.
     */
    getAxis(): IAxis;
}