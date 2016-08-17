/**
 * @file The othello chessboard.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */
import { AbstractTemplatedComponent } from '../AbstractTemplatedComponent';
import { IAxis } from '../IAxis';
import { IChessboard } from './IChessboard';
import { IChessman } from '../chessman/IChessman';

// skins
require('!style!css!sass!./Chessboard.scss');

export default class Chessboard extends AbstractTemplatedComponent implements IChessboard {

    private chessmenMap: Map<string, IChessman>;
    private rows: number;
    private columns: number;

    constructor(rows: number, columns: number) {
        super();
        this.chessmenMap = new Map<string, IChessman>();
        this.rows = rows;
        this.columns = columns;
    }

    /**
     * @override
     */
    public getTemplate(): string {
        let template: string = '<table class="chessboard">';
        for (let rowIndex: number = 0; rowIndex < this.rows; ++rowIndex) {
            template += `<tr class="chessboard-row" data-row-index="${rowIndex}">`;
            for (let columnIndex: number = 0; columnIndex < this.columns; ++columnIndex) {
                template += `<td class="chessboard-column" data-column-index="${columnIndex}"></td>`;
            }
            template += '</tr>';
        }
        return template;
    }

    /**
     * 
     * @param {IAxis}
     */
    private getCellNodeByAxis(axis: IAxis): Node {
        return (<Element>this.getNode())
            .querySelector(`[data-row-index="${axis.getY()}"] [data-column-index="${axis.getX()}"]`);
    }

    /**
     * @override
     */
    public addChessman(chessman: IChessman): boolean {
        let axis: IAxis = chessman.getAxis();
        let cellNode: Node = this.getCellNodeByAxis(axis);
        if (cellNode.childNodes.length) {
            return false;
        }
        this.chessmenMap.set(axis.getX() + '_' + axis.getY(), chessman);
        cellNode.appendChild(chessman.getNode());
        return true;
    }

    /**
     * @override
     */
    public getChessman(x: number, y: number): IChessman;
    public getChessman(axis: IAxis): IChessman;
    public getChessman(arg1: any, arg2?: any): IChessman {
        let x: number = 0;
        let y: number = 0;
        if (typeof(arg1) === 'number') { // x, y
            x = arg1;
            y = arg2;
        } else { // axis
            x = arg1.getX();
            y = arg1.getY();
        }
        return this.chessmenMap.get(x + '_' + y);
    }

    /**
     * @override
     */
    public destroy() {
        let mapKeys: IterableIterator<string> = this.chessmenMap.keys();
        let mapKey: IteratorResult<string> = mapKeys.next();
        while (!mapKey.done) {
            this.chessmenMap.get(mapKey.value).destroy();
            mapKey = mapKeys.next();
        }
        super.destroy();
    }
}