/**
 * @file The coordinate axis.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */
import { IAxis } from './IAxis';

export default class Axis implements IAxis {

    private x: number = 0;
    private y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * @override
     */
    public getX(): number {
        return this.x;
    }

    /**
     * @override
     */
    public getY(): number {
        return this.y;
    }
}