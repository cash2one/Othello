/**
 * @file The black chessman
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { AbstractChessman } from './AbstractChessman';

// skins
require('!style!css!sass!./Black.scss');

export default class Black extends AbstractChessman {

    /**
     * @override
     */
    public getStyleClass(): string {
        return 'black';
    }
}