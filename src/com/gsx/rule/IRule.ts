/**
 * @file The interface of chessman rule.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IChessman } from '../chessman/IChessman';
import { IChessboard } from '../chessboard/IChessboard';

export interface IRule {

    /**
     * Play the current chessman via the rule.
     * @param {number} The x in the chessboard.
     * @param {number} The y in the chessboard.
     * @return {IChessman}
     */
    playChessman(x: number, y: number): IChessman;

    /**
     * 
     */
    getWinner(): IChessman;
}