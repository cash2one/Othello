/**
 * @file The white chessman
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { AbstractChessman } from './AbstractChessman';


// skins
require('!style!css!sass!./White.scss');

export default class White extends AbstractChessman {

    /**
     * @override
     */
    public getStyleClass(): string {
        return 'white';
    }
}