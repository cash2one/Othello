/**
 * @file The black&white chessman unit test spec.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */
import { IAxis } from '../../../../src/com/gsx/IAxis';
import { IChessboard } from '../../../../src/com/gsx/chessboard/IChessboard';
import { IChessman } from '../../../../src/com/gsx/chessman/IChessman';
import Axis from '../../../../src/com/gsx/Axis';
import Black from '../../../../src/com/gsx/chessman/Black';
import Chessboard from '../../../../src/com/gsx/chessboard/Chessboard';
import S = require('string');
import White from '../../../../src/com/gsx/chessman/White';

describe('The chessboard Spec', function (): void {
    let rows: number = 15;
    let columns: number = 15;
    let chessboard: IChessboard;
    beforeAll(function (): void {
        chessboard = new Chessboard(rows, columns);
        document.querySelector('body').appendChild(chessboard.getNode());
    });
    it('The chessboard template should be correct', function (): void {
        expect(document.querySelector('.chessboard')).not.toBeNull();
        expect(document.querySelectorAll('.chessboard-row').length).toBe(rows);
        expect(document.querySelectorAll('.chessboard-column').length).toBe(rows * columns);
    });
    it('Add chessman into the chessboard', function (): void {
        let black1: IChessman = new Black(2, 3);
        let black2: IChessman = new Black(2, 2);
        let white1: IChessman = new White(3, 3);
        expect(chessboard.addChessman(black1)).toBeTruthy();
        expect(chessboard.addChessman(white1)).toBeTruthy();
        expect(chessboard.addChessman(black2)).toBeTruthy();
        expect(chessboard.getChessman(2, 3)).toBe(black1);
        expect(chessboard.getChessman(new Axis(3, 3))).toBe(white1);
        expect(chessboard.addChessman(new White(2, 2))).toBeFalsy('Duplicate axis, has been forbidden'); // add forbidden.
        expect(chessboard.getChessman(2, 2)).toBe(black2, 'The black2 chessman has been added already.');
    });
    afterAll(function (): void {
//        chessboard.destroy();
    });
});
