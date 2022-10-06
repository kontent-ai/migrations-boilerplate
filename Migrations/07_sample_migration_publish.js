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
/**
* Publishes all Author and Blog items.
*
* Note: This migration shows that you can write the migrations directly in Javascript as well.
*/
const migration = {
    order: 7,
    run: (apiClient) => __awaiter(void 0, void 0, void 0, function* () {
        const authorLanguageVariantsResponse = yield apiClient.listLanguageVariantsOfContentType()
            .byTypeCodename('author')
            .toPromise();
        for (const variant of authorLanguageVariantsResponse.data.items) {
            yield apiClient.publishLanguageVariant()
                .byItemId(variant.item.id)
                .byLanguageId(variant.language.id)
                .withoutData()
                .toPromise();
        }
        const blogLanguageVariantsResponse = yield apiClient.listLanguageVariantsOfContentType()
            .byTypeCodename('blog')
            .toPromise();
        for (const variant of blogLanguageVariantsResponse.data.items) {
            yield apiClient.publishLanguageVariant()
                .byItemId(variant.item.id)
                .byLanguageId(variant.language.id)
                .withoutData()
                .toPromise();
        }
    }),
};
module.exports = migration;
