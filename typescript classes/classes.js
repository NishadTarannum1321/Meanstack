var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var engine = /** @class */ (function () {
    function engine(val) {
        this.enginetype = val;
    }
    engine.prototype.start = function () {
        console.log("start the engine");
    };
    return engine;
}());
var car = new engine();
car.start();
var transmission = /** @class */ (function (_super) {
    __extends(transmission, _super);
    function transmission() {
        var _this = _super.call(this, 'new engine') || this;
        _this.clutch = 'testclutch';
        return _this;
    }
    return transmission;
}(engine));
var petrolmachine = /** @class */ (function (_super) {
    __extends(petrolmachine, _super);
    function petrolmachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = 'grey';
        return _this;
    }
    return petrolmachine;
}(transmission));
var petrlmach = new petrolmachine();
petrlmach.val;
petrlmach.start();
petrlmach.enginetype;
var phone = /** @class */ (function () {
    function phone(model) {
        this.model = model;
    }
    Object.defineProperty(phone.prototype, "setBatterval", {
        set: function (v) {
            this.battery = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(phone.prototype, "getBatteryval", {
        get: function () {
            return this.battery;
        },
        enumerable: true,
        configurable: true
    });
    return phone;
}());
var phne = new phone('samsung');
phne.setBatterval = '3000mah';
phne.getBatteryval;
