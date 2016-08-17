/**
 * @file The interface of chessboard.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */
import { IChessman } from '../chessman/IChessman';
import { IAxis } from '../IAxis';
import { IComponent } from '../IComponent';
import { ITemplated } from '../ITemplated';

export interface IChessboard extends IComponent, ITemplated {

    /**
     * Add chessman into this chessboard.
     * @param The chessman
     */
    addChessman(chessman: IChessman): void;

    /**
     * Get chessman by axis.
     * @return The specified chessman.
     */
    getChessman: {
        (x: number, y: number): IChessman;
        (axis: IAxis): IChessman;
    };
}