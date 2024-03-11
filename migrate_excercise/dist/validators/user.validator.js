"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJoiSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userJoiSchema = joi_1.default.object({
    customer_number: joi_1.default.string().required(),
    case_reference: joi_1.default.number().integer().required(),
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string(),
    case_outcome: joi_1.default.string().required()
});
//# sourceMappingURL=user.validator.js.map