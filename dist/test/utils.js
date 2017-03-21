"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can dissoc', (tt) => {
    tt.deepEqual(utils_1.default('c', { a: false, b: 1, c: 'hi' }), { a: false, b: 1 });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFrQztBQUVsQyxhQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRTtJQUNsQixFQUFFLENBQUMsU0FBUyxDQUNSLGVBQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxDQUFDLEVBQ3RDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQ25CLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyJ9