"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const roles_model_1 = require("../roles/roles.model");
const user_roles_model_1 = require("../roles/user-roles.model");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванов Иван Иванович', description: 'ФИО' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01.01.2000', description: 'Дата рождения' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "dateborn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'г. Москва, ул. Пушкина, д. 1', description: 'Адрес проживания' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], User.prototype, "educationadress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8-999-999-99-99', description: 'Номер телефона' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Frontend', description: 'Направление' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], User.prototype, "direction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'example@example.com', description: 'Номер телефона' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/avatar.jpg', description: 'Ссылка на аватар' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', description: 'Пароль' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => roles_model_1.Role, () => user_roles_model_1.UserRoles),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
exports.User = User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'users' })
], User);
//# sourceMappingURL=users.model.js.map