"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesRoutes = void 0;
var data_1 = require("../data");
var zod_1 = require("zod");
var articlesRoutes = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        app.get('/main', function (req, res) {
            var articles = data_1.dataMainArticles.filter(function (article) { return article.rank <= 3; }).sort(function (a, b) { return a.rank > b.rank ? 1 : -1; });
            return { articles: articles };
        });
        app.get('/secondary', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var articles;
            return __generator(this, function (_a) {
                articles = data_1.dataMainArticles.filter(function (article) { return article.rank > 3; }).sort(function (a, b) { return a.rank > b.rank ? 1 : -1; });
                return [2 /*return*/, { articles: articles }];
            });
        }); });
        app.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var getArticleParamsSchema, id, article;
            return __generator(this, function (_a) {
                getArticleParamsSchema = zod_1.z.object({ id: zod_1.z.string().uuid() });
                id = getArticleParamsSchema.parse(req.params).id;
                article = data_1.dataMainArticles.filter(function (article) { return article.id === id; });
                if (!article[0]) {
                    return [2 /*return*/, res.status(404).send({ error: "id not found", message: "The indicated ID is not in the database!" })];
                }
                return [2 /*return*/, article[0]];
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.articlesRoutes = articlesRoutes;
