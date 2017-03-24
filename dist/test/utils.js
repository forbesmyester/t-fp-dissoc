"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can dissoc', (tt) => {
    let input1 = { a: false, b: 1, c: 'hi' };
    let input2 = { a: false, b: 1, c: 'hi' };
    let input3 = { a: false, b: 1, c: 'hi' };
    let result1 = utils_1.default('c', input1);
    let result2 = utils_1.default('c', input2);
    let result3 = utils_1.default('c', input3);
    tt.deepEqual(result1, { a: false, b: 1 });
    tt.deepEqual(result2, { a: false, b: 1 });
    tt.deepEqual(result3, { a: false, b: 1 });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFrQztBQUVsQyxhQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRTtJQUdsQixJQUFJLE1BQU0sR0FBVyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDL0MsSUFBSSxNQUFNLEdBQXdDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM1RSxJQUFJLE1BQU0sR0FBMEMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxDQUFDO0lBRTlFLElBQUksT0FBTyxHQUFHLGVBQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsSUFBSSxPQUFPLEdBQUcsZUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sR0FBRyxlQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRWxDLEVBQUUsQ0FBQyxTQUFTLENBQ1IsT0FBTyxFQUNQLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQ25CLENBQUM7SUFFRixFQUFFLENBQUMsU0FBUyxDQUNSLE9BQU8sRUFDUCxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUNuQixDQUFDO0lBRUYsRUFBRSxDQUFDLFNBQVMsQ0FDUixPQUFPLEVBQ1AsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FDbkIsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=