/**
 * @file The black chessman unit test spec.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */
import { IAxis } from '../../../../src/com/gsx/IAxis';
import { IChessman } from '../../../../src/com/gsx/chessman/IChessman';
import Black from '../../../../src/com/gsx/chessman/Black';
import White from '../../../../src/com/gsx/chessman/White';
import '../../../../src/com/gsx/chessman/Chessman.html';
import S = require('string');

describe('The chessman Spec', function () {
    it('The chessman template should be correct', function () {
        var chessmanTemplate: string = require('../../../../src/com/gsx/chessman/Chessman.html');
        expect(new Black(4, 5).getTemplate()).toBe(S(chessmanTemplate).template({ styleClass: 'black' }).s);
        expect(new White(5, 5).getTemplate()).toBe(S(chessmanTemplate).template({ styleClass: 'white' }).s);
    });

    it('The coordinate axis should be correct', function () {
        var blackAxis: IAxis = new Black(4, 5).getAxis();
        expect(blackAxis.getX()).toBe(4);
        expect(blackAxis.getY()).toBe(5);

        var whiteAxis: IAxis = new White(5, 5).getAxis();
        expect(whiteAxis.getX()).toBe(5);
        expect(whiteAxis.getY()).toBe(5);
    });
});
