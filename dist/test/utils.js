"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can dissoc', (tt) => {
    let input = { a: false, b: 1, c: 'hi' };
    let result = utils_1.default('c', input);
    tt.deepEqual(result, { a: false, b: 1 });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFrQztBQUVsQyxhQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRTtJQUVsQixJQUFJLEtBQUssR0FBd0MsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzNFLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEMsRUFBRSxDQUFDLFNBQVMsQ0FDUixNQUFNLEVBQ04sRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FDbkIsQ0FBQztBQUVOLENBQUMsQ0FBQyxDQUFDIn0=