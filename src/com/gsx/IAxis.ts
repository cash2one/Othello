/**
 * @file The interface of the coordinate axis.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

export interface IAxis {

    /**
     * Get the horizontal axis.
     * @return {number} The horizontal axis.
     */
    getX(): number;

    /**
     * Get the vertical axis.
     * @return {number} The vertical axis.
     */
    getY(): number;
}