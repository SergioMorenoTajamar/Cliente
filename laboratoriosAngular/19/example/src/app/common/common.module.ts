import { NgModule } from "@angular/core";
import { PaDiscountDisplayComponent } from "../discountDisplay.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaAttrDirective } from "./attr.directive";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { PaDiscountPipe } from "./discount.pipe";
import { DiscountService } from "./discount.service";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { LogService } from "./log.service";
import { PaStructureDirective } from "./structure.directive";
import { PaModel } from "./twoway.directive";
import { VALUE_SERVICE } from "./valueDisplay.directive";


@NgModule({
    imports: [ModelModule],
    providers: [LogService, DiscountService,
    { provide: VALUE_SERVICE, useValue:"Apples" }
    declarations: [PaAttrDirective, PaAddTaxPipe, PaCategoryFilterPipe, PaCellColor, PaCellColorSwitcher, PaDiscountPipe, PaIteratorDirective, PaStructureDirective, PaModel, PaDiscountDisplayComponent ,PaDiscountAmountDirective]


})

export class CommonModule { }